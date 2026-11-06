<script setup lang="ts">
useHead({
  title: 'Tech Stack | Eden Adlao'
})

useSeoMeta({
  description: 'View the technologies and tools Eden Adlao uses to build modern web experiences.',
  ogTitle: 'Tech Stack | Eden Adlao',
  ogDescription: 'View the technologies and tools Eden Adlao uses to build modern web experiences.',
  ogType: 'website',
  twitterCard: 'summary',
})

type StackCategory = {
  name: string
  color: string
  technologies: {
    name: string
    icon: string
  }[]
}

const stackCategories: StackCategory[] = [
  {
    name: 'FRONT-END',
    color: 'text-[#f3ccbd]',
    technologies: [
      { name: 'HTML5', icon: 'stack-html.svg' },
      { name: 'CSS3', icon: 'stack-css.svg' },
      { name: 'JavaScript', icon: 'stack-javascript.svg' },
      { name: 'Tailwind CSS', icon: 'stack-tailwindcss.svg' }
    ]
  },
  {
    name: 'BACK-END',
    color: 'text-[#edabc9]',
    technologies: [
      { name: 'Java', icon: 'stack-java.svg' },
      { name: 'C', icon: 'stack-c.svg' },
      { name: 'Python', icon: 'stack-python.svg' },
      { name: 'Node.js', icon: 'stack-nodejs.svg' }
    ]
  },
  {
    name: 'DATABASE MANAGEMENT',
    color: 'text-[#d6b5d4]',
    technologies: [
      { name: 'SQL Server', icon: 'stack-sqlserver.svg' },
      { name: 'MySQL', icon: 'stack-mysql.svg' },
      { name: 'PostgreSQL', icon: 'stack-postgresql.svg' },
      { name: 'SQLite', icon: 'stack-sqlite.svg' },
      { name: 'MongoDB', icon: 'stack-mongodb.svg' }
    ]
  },
  {
    name: 'TOOLS & ENVIRONMENT',
    color: 'text-[#9ec9ec]',
    technologies: [
      { name: 'Git', icon: 'stack-git.svg' },
      { name: 'GitHub', icon: 'stack-github.svg' },
      { name: 'VS Code', icon: 'stack-vscode.svg' },
      { name: 'Android Studio', icon: 'stack-androidstudio.svg' }
    ]
  }
]
</script>

<template>
  <section class="mx-auto max-w-2xl px-6 pb-24 pt-14">
    <h1
      class="mb-10 text-center text-5xl font-semibold tracking-[5px] text-[#d6b5d4] drop-shadow-[0_0_12px_rgba(214,181,212,0.9)] sm:text-6xl"
    >
      MY STACK
    </h1>

    <div class="grid gap-8">
      <StackCard
        v-for="category in stackCategories"
        :key="category.name"
        :name="category.name"
        :color="category.color"
        :technologies="category.technologies"
      />
    </div>
  </section>
</template>