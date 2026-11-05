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
    <div v-if="certification" class="cert-preview modal-box relative max-w-3xl p-6 sm:p-8">
      <button
        type="button"
        aria-label="Close certificate preview"
        class="cert-preview-close"
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
