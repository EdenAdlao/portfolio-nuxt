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
    <div v-if="certification" class="modal-box max-w-3xl bg-[#23252f] p-4">
      <h2 class="sr-only">{{ certification.title }}</h2>
      <img
        :src="certification.image"
        :alt="`${certification.title} certificate`"
        class="w-full rounded-lg"
      >
      <div class="modal-action">
        <button type="button" class="btn" @click="emit('close')">
          Close
        </button>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop" @submit="emit('close')">
      <button type="submit" aria-label="Close certificate preview">close</button>
    </form>
  </dialog>
</template>
