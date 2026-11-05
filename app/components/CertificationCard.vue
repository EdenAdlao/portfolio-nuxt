<script setup lang="ts">
import { ref } from 'vue'
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
</script>

<template>
  <article
    class="cert-card h-full min-h-[430px] w-full max-w-80 rounded-[28px] bg-white/5 p-6 text-center backdrop-blur-xl"
  >
    <figure
      class="cert-img-bg"
      :class="`cert-${certification.variant}`"
      @click="emit('preview', certification)"
    >
      <img
        :src="certification.image"
        :alt="`${certification.title} certificate`"
      >
    </figure>

    <h2 class="cert-title mt-10 text-[25px] font-semibold" :class="`cert-title-${certification.variant}`">
        {{ certification.title }}
    </h2>
    <p class="mt-1 text-xs tracking-[4px] text-white/50">
      {{ certification.category }}
    </p>

    <div class="mt-5 flex w-full gap-4 text-sm font-semibold">
      
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

    <p class="mt-3 text-base" :class="`cert-code-${certification.variant}`">
      code: {{ certification.code }}
    </p>
  </article>
</template>
