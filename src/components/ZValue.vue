<script setup lang="ts">
defineProps(['value']);
</script>

<template>
    <z-link :href="`/values#${value.toLowerCase().replace(/[^a-z]+/g, '-')}`"
        ><slot>Value: {{ value }}</slot></z-link
    >
</template>
