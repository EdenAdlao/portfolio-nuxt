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
    class="card border border-white/10 bg-white/5 shadow-[0_0_35px_rgba(0,0,0,0.4)] backdrop-blur-xl"
  >
    <div class="card-body p-7 sm:p-10 md:p-14">
      <h2
        class="mb-6 text-xl font-semibold tracking-[4px] sm:text-2xl"
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
          class="card card-compact items-center border border-white/10 bg-white/5 p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(214,181,212,0.2)] sm:p-4"
        >
          <div class="card-body items-center justify-center gap-3 p-1 sm:p-2">
            <div class="flex size-16 items-center justify-center rounded-full bg-white/5 p-3 sm:size-20">
              <img
                :src="`/images/stack-icons/${technology.icon}`"
                :alt="technology.name"
                class="size-full object-contain"
              >
            </div>
            <p class="text-xs font-medium text-white/90 sm:text-sm">
              {{ technology.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
