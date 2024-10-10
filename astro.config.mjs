import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://brixtonselfdefence.co.uk',
	// integrations: [mdx(), sitemap()],
});

