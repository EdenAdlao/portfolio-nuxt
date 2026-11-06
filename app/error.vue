<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error.statusCode === 404)

const heading = computed(() => (is404.value ? 'Page not found' : 'Something went wrong'))
const message = computed(() =>
  is404.value
    ? "You know that I can't show you me... because this page doesn't exist."
    : 'An unexpected error occurred. Please try again in a moment.'
)

useHead({ title: `${is404.value ? '404 Not Found' : 'Error'} | Eden Adlao` })
useSeoMeta({
  description: message.value,
  robots: 'noindex, nofollow',
  ogTitle: `${heading.value} | Eden Adlao`,
  ogDescription: message.value
})


const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <main class="grid min-h-svh place-items-center overflow-hidden bg-[#161824] px-6 py-8 text-white">
    <div class="flex w-[min(100%,38rem)] flex-col items-center text-center">

      <!-- Ring -->
      <div class="relative aspect-square w-[min(72vw,23.625rem)] animate-float rounded-full p-[10px] shadow-[0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.15)]" aria-hidden="true" >
            <!-- ::before → spinning gradient ring -->
            <div class="absolute inset-0 z-0 rounded-full bg-[linear-gradient(45deg,#fbcabb,#edabc9,#d6b5d4,#9ec9ec)] [animation-duration:20s] motion-safe:animate-spin"/>

            <!-- > div → inner circle (dark, holds the code) -->
            <div class="relative z-[1] grid size-full place-items-center overflow-hidden rounded-full bg-[#161824]">
                <span class="text-[clamp(5.5rem,14vw,8rem)] font-bold leading-none text-white text-shadow-[0_0_0.5rem_rgba(255,255,255,0.9),0_0_1.5rem_rgba(255,255,255,0.55)]"
                >
                {{ error.statusCode }}
                </span>
            </div>
        </div>

      <h1 class="mt-6 text-[clamp(1.35rem,3vw,1.6rem)] font-bold leading-tight">
        {{ heading }}
      </h1>

      <p class="mt-6 max-w-[35rem] text-[clamp(1rem,2.5vw,1.25rem)] italic leading-[1.3] text-[#f5f5f7]">
        {{ message }}
      </p>

      <button
        type="button"
        class="btn btn-ghost mt-[3.25rem] h-auto min-w-[17.625rem] cursor-pointer rounded-[1.25rem] border border-white/30 bg-white/[0.03] px-8 py-[0.8rem] text-xl font-normal leading-[1.4] text-white transition-colors duration-200 hover:border-white/55 hover:bg-white/10 focus-visible:border-white/55 focus-visible:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#9ec9ec]"
        @click="goHome" >
            Back to home
      </button>
    </div>
  </main>
</template>