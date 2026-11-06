<template>
  <div class="min-h-screen bg-[#161824] text-white lg:flex">
    <AppSidebar />

    <div class="flex min-h-screen min-w-0 flex-1 flex-col">
      <NavBar />
      <main class="flex-1">
        <NuxtPage />
      </main>
      <Footer />
    </div>
  </div>
</template>