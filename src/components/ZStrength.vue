<script setup lang="ts">
defineProps(['strength']);
</script>

<template>
    <z-link :href="`/strengths#${strength.toLowerCase().replace(/[^a-z]+/g, '-')}`"
        ><slot>Strength: {{ strength }}</slot></z-link
    >
</template>
