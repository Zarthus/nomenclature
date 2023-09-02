<script setup lang="ts">
defineProps(['content', 'href', 'external', 'icon', 'details']);
</script>

<template>
    <a v-if="external" rel="noopener" target="_blank" :href="href" :aria-details="details">
        <v-icon v-if="icon">{{ icon }}</v-icon>
        <slot>{{ content }}</slot>
    </a>
    <router-link v-else :to="href">
        <v-icon v-if="icon">{{ icon }}</v-icon>
        <slot>{{ content }}</slot>
    </router-link>
</template>
