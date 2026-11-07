<script setup lang="ts">
import type { Certification } from '~/types/certification'

useHead({
  title: 'Certifications | Eden Adlao'
})

useSeoMeta({
  description: 'Browse my certifications in Microsoft 365 apps and IT Specialist programs, and verify each credential through Certiport.',
  ogDescription: 'Browse my certifications in Microsoft 365 apps and IT Specialist programs, and verify each credential through Certiport.',
  ogTitle: 'Certifications | Eden Adlao',
  ogType: 'website',
  ogUrl: 'https://eden-adlao-portfolio.onrender.com/certifications',
  twitterCard: 'summary',
})

const certifications: Certification[] = [
  {
    title: 'Word Associate',
    category: 'MS 365 APPS',
    image: '/images/cert-word.jpg',
    color: '#fbcabb',
    code: 'eLSa - 4wvo',
    variant: 'word'
  },
  {
    title: 'PowerPoint Associate',
    category: 'MS 365 APPS',
    image: '/images/cert-ppt.jpg',
    color: '#ec9cb4',
    code: '2CCE - Xaqa',
    variant: 'ppt'
  },
  {
    title: 'Java',
    category: 'IT SPECIALIST',
    image: '/images/cert-java.jpg',
    color: '#89bce5',
    code: 'LSE9 - s4Na',
    variant: 'java'
  },
  {
    title: 'Databases',
    category: 'IT SPECIALIST',
    image: '/images/cert-dbs.jpg',
    color: '#89bce5',
    code: 'PS8o - uSrC',
    variant: 'databases'
  }
]

const selectedCertification = ref<Certification | null>(null)


</script>

<template>
  <section class="mx-auto max-w-6xl px-6 pb-24 pt-14 md:px-12 md:pt-20">
    <h1
      class="mb-16 text-center text-4xl font-semibold tracking-[5px] text-[#9ec9ec] drop-shadow-[0_0_12px_rgba(158,201,236,1)] sm:text-5xl md:text-6xl"
    >
      CERTIFICATIONS
    </h1>

    <div class="mx-auto grid max-w-4xl grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <CertificationCard
        v-for="certification in certifications"
        :key="certification.title"
        :certification="certification"
        @preview="selectedCertification = $event"
      />
    </div>
  </section>

  <CertificationPreview
    :certification="selectedCertification"
    @close="selectedCertification = null"
  />
</template>
