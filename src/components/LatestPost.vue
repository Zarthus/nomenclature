<script setup lang="ts">
import { computed } from 'vue';

const latest_post = await fetch('/posts.json').then((r) => r.json());

const post = computed(() => {
    return latest_post.posts[0];
});
</script>

<template>
    <v-card>
        <v-card-title>{{ post.title }}</v-card-title>
        <v-card-subtitle>Published at: {{ post.published_at }}</v-card-subtitle>
        <v-card-text>{{ post.headline.join(' ') }}...</v-card-text>
        <v-card-actions>
            <v-btn>
                <z-link :href="post.uri" icon="mdi-open-in-new" :details="`Opens blog post ${post.title}`">
                    Read more
                </z-link>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped></style>
