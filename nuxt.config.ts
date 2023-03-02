const keywords = 'Development, Developer, Software, Engineer, Software Engineer, Engineering, Full-Stack, BS, MEng';
const description =
"I am a highly motivated Software Engineer (BS, MEng) experienced in full-stack development, focused on back-end. I'm an energetic learner driven by curiosity and a passion for growth.";
const website = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Florencia Petrikovich | Software Engineer',
    url: 'https://florpetrikovich.com.ar/'
};
const person = {
    '@context': 'http://www.schema.org',
    '@type': 'Person',
    '@id': 'https://florpetrikovich.com.ar/',
    name: 'Florencia Petrikovich',
    alternateName: 'Florencia Petrikovich',
    nationality: 'Argentinian',
    alumniOf: [
        {
            '@type': 'CollegeOrUniversity',
            name: 'Instituto Tecnológico de Buenos Aires',
            sameAs: 'http://itba.edu.ar/'
        }
    ],
    gender: 'Female',
    jobTitle: 'Software Engineer',
    url: 'https://florpetrikovich.com.ar/',
    image: 'https://florpetrikovich.com.ar/meta-img.webp',
    sameAs: [
        'https://florpetrikovich.com.ar/',
        'https://github.com/fpetrikovich',
        'https://www.linkedin.com/in/florencia-petrikovich/'
    ]
};
const logos = {
    '@context': 'http://www.schema.org',
    '@type': 'Organization',
    url: 'https://florpetrikovich.com.ar/',
    logo: 'https://florpetrikovich.com.ar/logo.webp',
    email: 'fpetrikovich@gmail.com',
    name: 'Florencia Petrikovich | Software Engineer',
    description: description,
    founder: person,
    keywords: keywords
};
const jsonLds = [website, person, logos];

// Sitemap
const blogPageCount = 1;
const routes: String[] = ['/'];
for (let i = 1; i <= blogPageCount; i++) {
    routes.push(`/blog/page/${i}/` as string);
}

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
    css: ['/assets/css/main.css'],
    ssr: true,
    generate: {
        routes: routes
    },
    // Sitemap
    // https://content.nuxtjs.org/guide/recipes/sitemap/
    nitro: {
        prerender: {
            routes: ['/sitemap.xml', '/rss.xml']
        }
    },
    experimental: {
        payloadExtraction: false
    },
    router: {
        options: {
            strict: false
        }
    },
    app: {
        baseURL: process.env.NODE_ENV == 'production' ? '/' : '/',
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            title: 'Florencia Petrikovich | Software Engineer',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: keywords
                },
                {
                    hid: 'author',
                    name: 'author',
                    content: 'Florencia Petrikovich'
                }
            ],
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
            script: jsonLds.map((elem) => {
                return {
                    type: 'application/ld+json',
                    children: JSON.stringify(elem)
                };
            })
        }
    },
    // tailwindcss: {
    //     // This is the option that works
    //     darkMode: 'class'
    // },
    sourcemap: false,
    // Inspired on https://blog.openreplay.com/power-your-blog-with-nuxt-content
    content: {
        // https://content.nuxtjs.org/api/configuration
        highlight: {
            theme: 'github-dark',
            preload: ['java']
        },
        markdown: {
            // https://github.com/rehypejs/rehype-external-links
            rehypePlugins: [
                [
                    'rehype-external-links',
                    {
                        target: '_blank',
                        rel: 'noopener noreferer'
                    }
                ]
            ]
        }
    }
});
