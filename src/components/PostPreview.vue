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
                <span v-for="tag in post.tags" :key="tag" class="tag">
                    <v-chip>{{ tag }}</v-chip>
                </span>
            </div>

            <p v-for="(paragraph, index) in post.headline" :key="index">
                {{ paragraph }}
            </p>
            <p>...</p>
        </v-card-text>
        <v-card-actions>
            <v-btn>
                <z-link :href="post.uri" icon="mdi-open-in-new" :details="`Opens blog post ${post.title}`">
                    Read more
                </z-link>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
.tag {
    margin-right: 0.2rem;
}

.tags {
    margin-bottom: 1rem;
}
</style>
