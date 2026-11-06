<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Certification } from '~/types/certification'

const props = defineProps<{
  certification: Certification
}>()

const emit = defineEmits<{
  preview: [certification: Certification]
}>()

const isCopied = ref(false)

async function handleCopy() {
  try {
    await navigator.clipboard.writeText(props.certification.code)
    isCopied.value = true
    window.setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (error) {
    console.error('Failed to copy credential code:', error)
  }
}

// Full class names so Tailwind can detect them
const variants: Record<
  Certification['variant'],
  { gradient: string; title: string; code: string }
> = {
  word: {
    gradient: 'from-[#fbcabb] to-[#ec9cb4]',
    title: 'text-[25px] text-[#fbcabb]',
    code: 'text-[#fbcabb]'
  },
  ppt: {
    gradient: 'from-[#ec9cb4] to-[#bfb0d3]',
    title: 'whitespace-nowrap text-[1.3rem] text-[#ec9cb4]',
    code: 'text-[#ec9cb4]'
  },
  java: {
    gradient: 'from-[#a88fcc] to-[#89bce5]',
    title: 'text-[25px] text-[#89bce5]',
    code: 'text-[#89bce5]'
  },
  databases: {
    gradient: 'from-[#a88fcc] to-[#89bce5]',
    title: 'text-[25px] text-[#89bce5]',
    code: 'text-[#89bce5]'
  }
}

const style = computed(() => variants[props.certification.variant])
</script>

<template>
  <!-- cert card -->
  <article class="h-full min-h-[430px] w-full max-w-80 rounded-[28px] bg-white/5 p-6 text-center backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2.5">
    <figure class="group relative w-full cursor-pointer" @click="emit('preview', certification)">
      <div class="absolute left-3 top-3 z-0 size-full bg-linear-to-b" :class="style.gradient" aria-hidden="true"/>
      <img :src="certification.image" :alt="`${certification.title} certificate`" class="relative z-[2] w-full rounded-none shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-transform duration-[350ms] group-hover:scale-[1.03] active:z-50 active:scale-[1.18]">
    </figure>

    <h2 class="mt-10 font-semibold" :class="style.title">
      {{ certification.title }}
    </h2>
    <p class="mt-1 text-xs tracking-[4px] text-white/50">
      {{ certification.category }}
    </p>

    <div class="mt-5 flex w-full gap-4 text-sm font-semibold">
      <!-- verify button -->
      <a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank" rel="noopener noreferrer" class="flex flex-1 cursor-pointer items-center justify-center rounded-[18px] bg-linear-to-b p-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.35)]" :class="style.gradient">
        VERIFY
      </a>
    </div>

    <p class="mt-3 text-base" :class="style.code">
      code: {{ certification.code }}
    </p>
  </article>
</template>