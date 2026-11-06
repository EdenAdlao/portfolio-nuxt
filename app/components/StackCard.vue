<script setup lang="ts">
type Technology = {
  name: string
  icon: string
}

defineProps<{
  name: string
  color: string
  technologies: Technology[]
}>()
</script>

<template>
  <article
    class="card rounded-3xl border border-[#343642] bg-[#23252f] shadow-[0_0_35px_rgba(0,0,0,0.35)]"
  >
    <div class="card-body p-8 sm:p-10">
      <h2
        class="mb-6 text-base font-semibold tracking-[4px] sm:text-lg"
        :class="color"
      >
        {{ name }}
      </h2>

      <div
        class="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
        :class="{ 'md:grid-cols-5': technologies.length === 5 }"
      >
        <div
          v-for="technology in technologies"
          :key="technology.name"
          class="flex flex-col items-center gap-2 text-center"
        >
          <div
            class="size-16 rounded-full bg-[linear-gradient(45deg,#fbcabb,#edabc9,#d6b5d4,#9ec9ec)] p-1 shadow-[0_0_10px_rgba(255,255,255,0.08)] transition-shadow duration-300 transform-3d hover:animate-ring-flip hover:shadow-[0_0_15px_rgba(255,255,255,0.15),0_0_30px_rgba(237,171,201,0.25)]"
          >
            <div class="flex size-full items-center justify-center rounded-full bg-[#161824] p-3">
              <img
                :src="`/images/stack-icons/${technology.icon}`"
                :alt="technology.name"
                class="size-full object-contain"
              >
            </div>
          </div>
          <p class="text-xs font-medium text-white/90">
            {{ technology.name }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>