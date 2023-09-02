<script setup lang="ts">
defineProps(['license', 'src', 'alt', 'class', 'id']);
</script>

<template>
    <img :id="id" :class="class" :alt="`${alt} (licensed under ${license})`" :src="src" />
</template>
