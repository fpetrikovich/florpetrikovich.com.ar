<template>
    <div class="flex flex-row">
        <template v-for="icon in icons" :key="icon.href">
            <NuxtLink
                :to="icon.href"
                target="_blank"
                rel="noopener noreferer"
                class="hover:scale-125 mx-2 text-typography_primary_light dark:text-typography_primary_dark hover:text-brand_primary_light dark:hover:text-brand_primary_dark transition-transform duration-100"
            >
                <component :is="icon.icon" :alt="icon.alt" :aria-label="icon.alt" class="w-6 h-6" width="24" height="24" />
            </NuxtLink>
        </template>
    </div>
</template>

<script setup>
import Github from '../icons/github.vue';
import Linkedin from '../icons/linkedin.vue';
import Gmail from '../icons/gmail.vue';

const icons = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/florencia-petrikovich/', alt: 'LinkedIn profile.' },
    { icon: Github, href: 'https://github.com/fpetrikovich', alt: 'Github profile.' },
    { icon: Gmail, href: 'mailto:fpetrikovich@gmail.com', alt: 'Email address.' }
];
</script>
