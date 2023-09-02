<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavComponent from './components/NavComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
    <Suspense>
        <nav-component />
        <template #fallback> Something went wrong. Oops!</template>
    </Suspense>

    <main id="content">
        <Suspense>
            <router-view />
            <template #fallback> Something went wrong. Oops! </template>
        </Suspense>
    </main>

    <footer-component />
</template>

<style scoped></style>
