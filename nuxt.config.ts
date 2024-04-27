export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-icon'],
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: '',
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: './components/ui',
	},
	app: {
		head: {
			link: [
				{
					rel: 'stylesheet',
					href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
				},
			],
		},
	},
})
