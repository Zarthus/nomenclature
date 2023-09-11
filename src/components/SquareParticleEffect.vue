<script setup lang="ts">
declare module 'vue3-particles';

import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const particlesInit = async (engine: any) => {
    //await loadFull(engine);
    await loadSlim(engine);
};

const particlesLoaded = async (container: any) => {
    console.log('Particles container loaded', container);
};
</script>

<template>
    <vue-particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="{
            background: {
                color: {
                    value: 'var(--c-background)',
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    resize: true,
                },
            },
            fullScreen: false,
            particles: {
                color: {
                    value: '#ffffff',
                },
                links: {
                    color: '#ffffff',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outMode: 'bounce',
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.2,
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    random: true,
                    value: 5,
                },
            },
            detectRetina: true,
        }"
    />
</template>

<style scoped>
#tsparticles {
    position: fixed;
    width: 100%;

    overflow: hidden;
    pointer-events: auto;

    z-index: -10;
}
</style>
