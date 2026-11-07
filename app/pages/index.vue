<script setup lang="ts">
  useHead({
    title: 'Home | Eden Adlao'
  })

  useSeoMeta({
  description: 'Aspiring to become a front-end developer, passionate about creating clean, user-friendly, and visually engaging web experiences.',
  ogDescription: 'Aspiring to become a front-end developer, passionate about creating clean, user-friendly, and visually engaging web experiences.',
  ogTitle: 'Home | Eden Adlao',
  ogType: 'website',
  ogUrl: 'https://eden-adlao-portfolio.onrender.com/',
  twitterCard: 'summary',
})
</script>

<template>
  <section class="mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-y-10 px-6 pb-24 pt-16 md:px-12 md:pt-24 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-10"
  >
    <div class="order-1 flex flex-col items-center text-center lg:order-0 lg:items-start lg:self-end lg:text-left">
      <p class="mb-6 text-2xl tracking-[2px] text-white/80 md:text-3xl">
        Hi, I am
      </p>

      <h1 class="relative isolate inline-block text-5xl font-bold leading-none sm:text-6xl md:text-7xl">
        <span class="absolute inset-0 -z-10 select-none bg-[linear-gradient(to_right,#fdbfb5,#edabc9,#d3c8e3,#9ec9ec)] bg-clip-text text-transparent blur-2xl opacity-70" aria-hidden="true"> EDEN ADLAO
        </span>
        <span class="bg-[linear-gradient(to_right,#fdbfb5,#edabc9,#d3c8e3,#9ec9ec)] bg-clip-text text-transparent">
          EDEN ADLAO
        </span>
      </h1>
    </div>

    <div class="order-2 flex justify-center lg:order-0 lg:row-span-2 lg:justify-end">
      <!-- profile-pic border ring-->
      <div class="relative size-65 animate-float rounded-full p-[5px] shadow-[0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.15)] sm:size-80 md:size-90">
        <!-- spinning gradient ring -->
        <div class="absolute inset-0 z-0 rounded-full bg-[linear-gradient(45deg,#fbcabb,#edabc9,#d6b5d4,#9ec9ec)] [animation-duration:3s] motion-safe:animate-spin"
          aria-hidden="true"/>
        

        <div class="relative z-[1] size-full overflow-hidden rounded-full bg-white">
          <img src="/images/profile-pic.jpg" alt="Portrait of Eden Adlao" class="size-full object-cover">
        </div>
      </div>
    </div>

    <div class="order-3 flex flex-col items-center text-center lg:order-0 lg:items-start lg:self-start lg:text-left">
      <p class="mb-8 max-w-xl text-base leading-7 text-white/70 sm:text-lg md:mb-10 md:text-xl md:leading-8">
        Aspiring to become a front-end developer, passionate about creating clean, user-friendly, and visually engaging web experiences.
      </p>

      <a href="https://github.com/EdenAdlao" target="_blank" rel="noreferrer" aria-label="Visit Eden Adlao on GitHub" class="group inline-block" >
        <img src="/images/github-logo.svg" alt="GitHub" class="h-12 w-12 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] sm:h-14 sm:w-14 md:h-16 md:w-16">
      </a>
    </div>
  </section>
</template>