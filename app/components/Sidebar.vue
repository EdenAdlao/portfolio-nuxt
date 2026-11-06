<script setup lang="ts">
import { navItems } from '~/utils/navItems'
import { ExternalLink } from '@lucide/vue'

const route = useRoute()

function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <!-- outer column: stretches to the full height of the page -->
  <aside
    class="relative hidden w-64 shrink-0 border-r border-white/10 lg:block"
  >
    <!-- vertical gradient line on the right edge (full page height) -->
    <div
      class="absolute inset-y-0 right-0 w-0.75 bg-[linear-gradient(to_bottom,#fbcabb_0%,#edabc9_33%,#d3c8e3_66%,#9ec9ec_100%)]"
      aria-hidden="true"
    ></div>

    <!-- inner panel: stays in view while the page scrolls -->
    <div class="sticky top-0 flex h-screen flex-col px-4 py-8">
      <!-- profile -->
      <NuxtLink to="/" class="flex flex-col items-center gap-3 text-center">
        <div
          class="size-24 rounded-full bg-[linear-gradient(45deg,#fbcabb,#edabc9,#d6b5d4,#9ec9ec)] p-1 shadow-[0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.15)]"
        >
          <img
            src="/images/profile-pic.jpg"
            alt="Portrait of Eden Adlao"
            class="size-full rounded-full object-cover"
          >
        </div>
        <span class="text-lg font-semibold text-[#d6b5d4] drop-shadow-[0_0_10px_rgba(243,204,189,0.4)]">
          EDEN ADLAO
        </span>
      </NuxtLink>

      <!-- DaisyUI menu -->
      <nav aria-label="Sidebar" class="mt-10">
        <ul class="menu w-full gap-1 p-0">
          <li v-for="item in navItems" :key="item.path">
            <NuxtLink
              :to="item.path"
              :aria-current="isActive(item.path) ? 'page' : undefined"
              :class="[
                'flex items-center gap-3 rounded-xl bg-transparent px-4 py-3 text-sm font-medium tracking-[2px] transition-all duration-300 hover:bg-white/5',
                isActive(item.path) ? [item.active, 'bg-white/5'] : ['text-white/70', item.hover]
              ]"
            >
              <component :is="item.icon" :size="20" aria-hidden="true" />
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- bottom link -->
      <a
        href="https://github.com/EdenAdlao"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-ghost mt-auto justify-start gap-3 rounded-xl text-white/70 hover:bg-white/5"
      >
        <img src="/images/github-logo.svg" alt="" class="size-5">
        GitHub
        <ExternalLink :size="14" class="ml-auto" aria-hidden="true" />
      </a>
    </div>
  </aside>
</template>