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
          <div class="stack-ring size-16 rounded-full p-1">
            <div class="stack-inner flex size-full items-center justify-center rounded-full p-3">
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
