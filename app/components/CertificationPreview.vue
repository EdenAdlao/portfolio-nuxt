<script setup lang="ts">
import type { Certification } from '~/types/certification'

defineProps<{
  certification: Certification | null
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <dialog class="modal" :class="{ 'modal-open': certification }">
    <!-- .cert-preview -->
    <div
      v-if="certification"
      class="modal-box relative max-w-3xl overflow-visible rounded-[1.25rem] bg-[linear-gradient(to_right,rgb(253,191,181),rgb(237,171,201),rgb(211,200,227),rgb(158,201,236))] p-6 shadow-[0_0_45px_rgba(255,255,255,0.2)] sm:p-8"
    >
      <!-- .cert-preview-close -->
      <button
        type="button"
        aria-label="Close certificate preview"
        class="absolute right-0 top-0 z-[3] size-9 cursor-pointer text-[1.75rem] leading-none text-white transition-colors duration-300 hover:text-[#161824]"
        @click="emit('close')"
      >
        ×
      </button>
      <img
        :src="certification.image"
        :alt="`${certification.title} certificate`"
        class="w-full rounded-xl"
      >
      <h2 class="mt-5 text-center text-xl font-semibold tracking-[4px] text-[#161824]">
        {{ certification.title }}
      </h2>
    </div>
    <form method="dialog" class="modal-backdrop" @submit="emit('close')">
      <button type="submit" aria-label="Close certificate preview">close</button>
    </form>
  </dialog>
</template>