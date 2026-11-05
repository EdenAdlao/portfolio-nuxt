import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  css: ['~/assets/css/styles.css'],

  app: {
    head: {
      title: 'Web Portfolio | Eden Adlao',
      link: [
        
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})
