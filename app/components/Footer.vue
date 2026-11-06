<script setup lang="ts">
import { Award, ExternalLink, House, SquareCode, UserRound } from '@lucide/vue'

const year = new Date().getFullYear()

const pageLinks = [
  { label: 'Home', path: '/', icon: House },
  { label: 'About', path: '/about', icon: UserRound },
  { label: 'Stack', path: '/stack', icon: SquareCode },
  { label: 'Certifications', path: '/certifications', icon: Award }
]
</script>

<template>
  <footer class="mt-10 w-full border-t border-white/10 bg-[#0b1027]/60 pb-24 md:pb-0">
    <!-- gradient line, same as the navbar -->
    <div class="h-0.75 w-full bg-[linear-gradient(to_right,#fbcabb_0%,#edabc9_33%,#d3c8e3_66%,#9ec9ec_100%)]"></div>

    <!-- DaisyUI footer -->
    <div class="footer footer-vertical mx-auto max-w-7xl gap-10 px-6 py-10 text-white/70 sm:footer-horizontal md:px-12">
      <aside class="max-w-xs">
        <div class="flex items-center gap-3">
          <img src="/images/logo-ea.png" alt="" class="size-8 object-contain">
          <span class="text-lg font-semibold text-[#d6b5d4]">EDEN ADLAO</span>
        </div>
        <p class="mt-3 text-sm leading-relaxed">
          Aspiring front-end developer creating clean, user-friendly, and visually engaging web experiences.
        </p>
      </aside>

      <nav aria-label="Footer pages">
        <h2 class="footer-title text-[#edabc9]">Pages</h2>
        <NuxtLink
          v-for="link in pageLinks"
          :key="link.path"
          :to="link.path"
          class="link link-hover inline-flex items-center gap-2"
        >
          <component :is="link.icon" :size="16" aria-hidden="true" />
          {{ link.label }}
        </NuxtLink>
      </nav>

      <nav aria-label="Footer social">
        <h2 class="footer-title text-[#9ec9ec]">Connect</h2>
        <a
          href="https://github.com/EdenAdlao"
          target="_blank"
          rel="noopener noreferrer"
          class="link link-hover inline-flex items-center gap-2"
        >
          <img src="/images/github-logo.svg" alt="" class="size-4">
          GitHub
          <ExternalLink :size="14" aria-hidden="true" />
        </a>
      </nav>
    </div>

    <!-- copyright bar -->
    <div class="border-t border-white/10 px-6 py-4 text-center text-xs text-white/50">
      &copy; {{ year }} Eden Adlao. All rights reserved.
    </div>
  </footer>
</template>