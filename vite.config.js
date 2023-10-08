import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPathsPlugin from 'vite-tsconfig-paths'

const tsconfigPaths = tsconfigPathsPlugin({
	projects: [resolve('tsconfig.json')],
})

// https://vitejs.dev/config/
export default defineConfig(async () => {
	return {
		define: {
			'process.env.PUBLIC_URL': JSON.stringify('')
		},
		plugins: [
			react(),
			tsconfigPaths,
		],
		server: {
			host: '0.0.0.0',
			port: 3000,
			open: true,
		},
		build: {
			sourcemap: false,
			rollupOptions: {
				output: {
					entryFileNames: 'assets/[name].js',
					chunkFileNames: 'assets/[name].js',
				},
				commonjsOptions: {
					transformMixedEsModules: true,
				},
			},
		},
	}
})
