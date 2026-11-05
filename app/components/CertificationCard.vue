<script setup lang="ts">
import type { Certification } from '~/types/certification'

defineProps<{
  certification: Certification
}>()

const emit = defineEmits<{
  preview: [certification: Certification]
}>()
</script>

<template>
  <article
    class="cert-card card w-full max-w-72.5 border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl"
  >
    <figure
      class="cert-img-bg px-6 pt-6"
      :class="`cert-${certification.variant}`"
      @click="emit('preview', certification)"
    >
      <img
        :src="certification.image"
        :alt="`${certification.title} certificate`"
        class="rounded-lg"
      >
    </figure>

    <div class="card-body items-center p-6 text-center">
      <h2 class="card-title justify-center text-2xl font-semibold" :style="{ color: certification.color }">
        {{ certification.title }}
      </h2>
      <p class="tracking-[4px] text-white/50">
        {{ certification.category }}
      </p>
      <div class="card-actions mt-3 w-full">
        <a
          href="https://www.certiport.com/portal/pages/credentialverification.aspx"
          target="_blank"
          rel="noopener noreferrer"
          class="verify-btn"
          :class="`verify-${certification.variant}`"
        >
          VERIFY
        </a>
      </div>
      <p class="mt-1 text-base" :style="{ color: `${certification.color}cc` }">
        code: {{ certification.code }}
      </p>
    </div>
  </article>
</template>
