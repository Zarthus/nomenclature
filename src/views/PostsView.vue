<script lang="ts" setup>
const api_response = await fetch('/posts.json');
const api = await api_response.json();

import PostPreview from '../components/PostPreview.vue';
</script>

<template>
    <div class="posts">
        <v-container>
            <v-row v-for="post in api.posts.reverse()" :key="post.id">
                <v-col offset="3" cols="6">
                    <post-preview :post="post" />
                </v-col>
            </v-row>
        </v-container>
    </div>

    <v-pagination length="1" id="pagination">
        <v-btn :disabled="api.pagination.previous == null">
            <z-link :href="api.pagination.previous" icon="mdi-chevron-left">Previous</z-link>
        </v-btn>

        <v-btn disabled>
            <z-link>{{ api.pagination.index }}</z-link>
        </v-btn>

        <v-btn :disabled="api.pagination.next == null">
            <z-link :href="api.pagination.next" icon="mdi-chevron-right">Next</z-link>
        </v-btn>
    </v-pagination>
</template>

<style scoped>
.posts {
    margin-top: 1rem;
}

#pagination {
    margin-top: 3rem;
}
</style>
