<script setup lang="ts">
defineProps(['post']);
</script>

<template>
    <v-card>
        <v-card-title>{{ post.title }}</v-card-title>
        <v-card-subtitle>Published at: {{ post.published_at }}</v-card-subtitle>
        <v-card-text>
            <div class="tags" v-if="post.tags.length">
                Tags:
                <span v-for="tag in post.tags" :key="tag">
                    <v-chip>{{ tag }}</v-chip>
                </span>
            </div>

            <z-markdown :source="`posts/${post.slug}`" />
        </v-card-text>
        <v-card-actions>
            <v-btn>
                <z-link href="/posts"> Return to Posts Overview </z-link>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped></style>
