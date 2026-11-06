<script setup lang="ts">
import type { ECharts } from 'echarts/core'

type ChartItem = {
  name: string
  value: number
}

const props = defineProps<{
  items: ChartItem[]
}>()

const chartEl = ref<HTMLDivElement | null>(null)
let chart: ECharts | null = null
let observer: ResizeObserver | null = null

// same colors as the category titles on the Stack page
const colors = ['#ffc1b2', '#edabc9', '#d3c8e3', '#9ec9ec']

const total = computed(() => props.items.reduce((sum, item) => sum + item.value, 0))

function percent(value: number) {
  return total.value ? Math.round((value / total.value) * 1000) / 10 : 0
}

const legend = computed(() =>
  props.items.map((item, index) => ({
    name: item.name,
    count: item.value,
    percent: percent(item.value),
    color: colors[index % colors.length]
  }))
)

const summary = computed(
  () => `Technologies by category: ${legend.value.map(i => `${i.name} ${i.percent}%`).join(', ')}`
)

function buildOption() {
  const last = props.items.length - 1

  return {
    aria: { enabled: true },
    grid: { left: 0, right: 0, top: 0, bottom: 0 },
    xAxis: { type: 'value', max: total.value, show: false },
    yAxis: { type: 'category', data: ['stack'], show: false },
    tooltip: {
      trigger: 'item',
      position: 'top',
      backgroundColor: '#23252f',
      borderColor: '#343642',
      textStyle: { color: '#ffffff' },
      formatter: (p: { seriesName: string; value: number }) =>
        `${p.seriesName}<br/>${p.value} technologies (${percent(p.value)}%)`
    },
    series: props.items.map((item, index) => ({
      name: item.name,
      type: 'bar',
      stack: 'total',
      barWidth: '100%',
      data: [item.value],
      itemStyle: {
        color: colors[index % colors.length],
        // round only the two outer ends of the bar
        borderRadius: index === 0 ? [7, 0, 0, 7] : index === last ? [0, 7, 7, 0] : 0
      },
      emphasis: {
        focus: 'series',
        itemStyle: { shadowBlur: 12, shadowColor: 'rgba(255,255,255,0.35)' }
      }
    }))
  }
}

onMounted(async () => {
  // load only the parts of ECharts we need, and only in the browser
  const echarts = await import('echarts/core')
  const { BarChart } = await import('echarts/charts')
  const { GridComponent, TooltipComponent, AriaComponent } = await import('echarts/components')
  const { CanvasRenderer } = await import('echarts/renderers')

  echarts.use([BarChart, GridComponent, TooltipComponent, AriaComponent, CanvasRenderer])

  if (!chartEl.value) return

  chart = echarts.init(chartEl.value)
  chart.setOption(buildOption())

  observer = new ResizeObserver(() => chart?.resize())
  observer.observe(chartEl.value)
})

watch(
  () => props.items,
  () => chart?.setOption(buildOption()),
  { deep: true }
)

onBeforeUnmount(() => {
  observer?.disconnect()
  chart?.dispose()
})
</script>

<template>
  <section
    class="card rounded-3xl border border-[#343642] bg-[#23252f] shadow-[0_0_35px_rgba(0,0,0,0.35)]"
  >
    <div class="card-body p-8 sm:p-10">
      <h2 class="text-base font-semibold tracking-[4px] text-[#d6b5d4] sm:text-lg">
        STACK OVERVIEW
      </h2>

      <!-- ECharts stacked bar -->
      <div
        ref="chartEl"
        class="mt-4 h-3.5 w-full"
        role="img"
        :aria-label="summary"
      ></div>

      <!-- legend, GitHub-style -->
      <ul class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <li v-for="item in legend" :key="item.name" class="flex items-center gap-2">
          <span
            class="size-3 rounded-full"
            :style="{ backgroundColor: item.color }"
            aria-hidden="true"
          ></span>
          <span class="font-semibold text-white">{{ item.name }}</span>
          <span class="text-white/60">{{ item.percent }}%</span>
        </li>
      </ul>
    </div>
  </section>
</template>