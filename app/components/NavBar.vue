
<template>
  <nav class="w-full">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
      <NuxtLink
        to="/"
        class="hidden text-lg font-semibold text-[#d6b5d4] drop-shadow-[0_0_10px_rgba(243,204,189,0.4)] md:block"
      >
        EDEN ADLAO
      </NuxtLink>

      <div class="hidden items-center gap-10 md:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          :class="[
            'transition-all duration-300',
            isActive(item.path) ? item.active : ['text-white/70', item.hover]
          ]"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>

    <div class="hidden h-0.75 w-full bg-[linear-gradient(to_right,#fbcabb_0%,#edabc9_33%,#d3c8e3_66%,#9ec9ec_100%)] md:block"></div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()

const navItems = [
  {
    label: 'HOME',
    path: '/',
    active: 'text-[#fbcabb] drop-shadow-[0_0_10px_rgba(251,202,187,0.9)]',
    hover: 'hover:text-[#fbcabb] hover:drop-shadow-[0_0_10px_rgba(251,202,187,0.9)]'
  },
  {
    label: 'ABOUT',
    path: '/about',
    active: 'text-[#edabc9] drop-shadow-[0_0_10px_rgba(237,171,201,0.9)]',
    hover: 'hover:text-[#edabc9] hover:drop-shadow-[0_0_10px_rgba(237,171,201,0.9)]'
  },
  {
    label: 'STACK',
    path: '/stack',
    active: 'text-[#d3c8e3] drop-shadow-[0_0_10px_rgba(211,200,227,0.9)]',
    hover: 'hover:text-[#d3c8e3] hover:drop-shadow-[0_0_10px_rgba(211,200,227,0.9)]'
  },
  {
    label: 'CERTIFICATIONS',
    path: '/certifications',
    active: 'text-[#9ec9ec] drop-shadow-[0_0_10px_rgba(158,201,236,0.9)]',
    hover: 'hover:text-[#9ec9ec] hover:drop-shadow-[0_0_10px_rgba(158,201,236,0.9)]'
  }
]

function isActive(path: string) {
  return route.path === path
}
</script>