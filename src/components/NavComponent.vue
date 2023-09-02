<script setup lang="ts">
let api_response: object;

try {
    api_response = await fetch('/api.json').then((r) => r.json());
} catch (error) {
    console.error(error);
    api_response = {
        '/': '/home',
        '/about': '/about',
        '/values': '/values',
        '/posts': '/posts',
    };
}

const links = Object.values(api_response).filter((f) => typeof f === 'string');
</script>

<template>
    <header>
        <nav>
            <span class="top">
                <a class="hidden-navcontent" href="#content">Go to content</a>
                <h2 class="hero"><z-link href="/">Liefland</z-link></h2>
            </span>

            <span class="nav-links">
                <z-link v-for="link in links" :href="link">{{ link === '/' ? '/home' : link }}</z-link>
            </span>
        </nav>
    </header>
</template>

<style scoped>
header {
    padding-top: 1rem;
    padding-left: 1rem;
}

header nav {
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
    grid-gap: 1rem;
}

.hero {
    font-size: 2rem;
}

.hidden-navcontent {
    display: none;

    z-index: 1;
    background-color: black;
    font-size: 2rem;
    position: absolute;
    top: 0;
    left: 0;
}
.hidden-navcontent:hover,
.hidden-navcontent:focus {
    display: inherit;
}

.nav-links > a {
    margin: 0.25rem;
    font-size: 1.5rem;
    position: relative;
    top: 0.33rem;
}

.nav-links > a:link,
.nav-links > a:visited,
.hero a:link,
.hero a:visited {
    font-family: monospace;
    color: var(--c-text);
    text-decoration: none;
}

.nav-links a:hover,
.nav-links a:focus,
.hero a:hover,
.hero a:focus {
    color: var(--c-link);
    filter: brightness(125%);
}

.nav-buttons > button {
    margin-left: 1rem;
}
</style>
