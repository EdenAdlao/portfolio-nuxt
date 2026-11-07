<script setup lang="ts">
  useHead({
    title: 'About Me | Eden Adlao'
  })

  useSeoMeta({
  description: 'Learn how my creative background shapes my work in UI/UX design and front-end development.',
  ogDescription: 'Learn how my creative background shapes my work in UI/UX design and front-end development.',
  ogTitle: 'About Me | Eden Adlao',
  ogType: 'website',
  ogUrl: 'https://eden-adlao-portfolio.onrender.com/about',
  twitterCard: 'summary',
})
</script>

<template>
  <section class="flex flex-col items-center px-6 pb-45 pt-20 md:px-10">
    <h1
      class="mb-16 text-5xl font-semibold tracking-[5px] text-[#edabc9] drop-shadow-[0_0_12px_rgba(237,171,201,1)] sm:text-6xl md:text-7xl"
    >
      ABOUT ME
    </h1>

    <div class="flex w-full max-w-6xl flex-col gap-10 md:flex-row md:gap-16">
      <div class="flex-1 text-justify text-base leading-relaxed text-white/80 md:text-xl">
        <p>
          I have always had a deep passion for arts, particularly painting. Over the years, I’ve
          grabbed every opportunity to apply this creativity, and as an IT student, I’ve found it
          to be a surprising advantage. My background in art gives me a unique edge in UI/UX design
          and front-end development, allowing me to bridge the gap between aesthetics and code.
        </p>
      </div>

      <div class="flex-1 text-justify text-base leading-relaxed text-white/80 md:text-xl">
        <p>
          I am actively pursuing a career in front-end development, excited by the challenge of
          executing creative ideas in a technical space. While my primary focus is on the
          user-facing side of tech, I also enjoy the logic and structure of the backend, making
          database management a strong secondary area of interest.
        </p>
      </div>
    </div>
  </section>
</template>