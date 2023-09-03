<script setup lang="ts">
defineProps(['license', 'src', 'alt', 'classes', 'id']);
</script>

<template>
    <img :id="id" :class="classes" :alt="`${alt} (licensed under ${license})`" :src="src" />
</template>
