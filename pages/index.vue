<template>
    <main id="main">
        <SectionsHero />
    </main>
</template>

<script setup>
const title = 'Florencia Petrikovich | Software Engineer';
const description =
    "I am a highly motivated Software Engineer (BS, MEng) experienced in full-stack development, focused on back-end. I'm an energetic learner driven by curiosity and a passion for growth.";
const image = '/meta-img.webp';
const url = 'https://florpetrikovich.com.ar';

// Get the authors
const { data: authorData } = await useAsyncData('home', () => queryContent('/authors').findOne());
const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url: url,
    description: description,
    publisher: authorData.value['Florencia Petrikovich'],
    license: 'http://creativecommons.org/licenses/by-nc-sa/3.0/us/deed.en_US'
};
useHead({
    title: title,
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            hid: 'description',
            name: 'description',
            content: description
        },
        {
            hid: 'keywords',
            name: 'keywords',
            content: 'Development, Developer, Software, Engineer, Software Engineer, Engineering, Full-Stack, Experiences, AWS'
        },
        {
            hid: 'author',
            name: 'author',
            content: 'Florencia Petrikovich'
        },
        // OG Card
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:image', property: 'og:image', content: url + image },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image:type', property: 'og:image:type', content: 'image/jpeg' },
        { hid: 'og:image:width', property: 'og:image:width', content: '800' },
        { hid: 'og:image:height', property: 'og:image:height', content: '418' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'Florencia Petrikovich' },

        // Twitter card
        { hid: 'twitter:card', name: 'twitter:card', content: 'Summary' },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:url', name: 'twitter:url', content: url },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:image', name: 'twitter:image', content: url + image },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Florencia Petrikovich' }
    ],
    link: [
        {
            hid: 'canonical',
            rel: 'canonical',
            href: url
        }
    ],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify(webpage)
        }
    ]
});
</script>

