<script setup lang="ts">
defineProps(['weakness']);
</script>

<template>
    <z-link :href="`/weakness#${weakness.toLowerCase().replace(/[^a-z]+/g, '-')}`"
        ><slot>Weakness: {{ weakness }}</slot></z-link
    >
</template>
