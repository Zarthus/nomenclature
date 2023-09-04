<script setup lang="ts">
let response: { posts: Array<{ id: number }> };
let post: object;
let post_slug: string;
let post_id: number;
let success = true;
let errmsg: string | null = null;

try {
    let w = window.location.href.replace('//', '/').split('/');
    post_slug = w[w.length - 1];
    post_id = parseInt(post_slug.split('-')[0]);
} catch (err: unknown) {
    console.error('Could not infer post from URL', err);
    success = false;
    // @ts-ignore
    errmsg = err.toString();
}

if (success) {
    try {
        response = await fetch('/posts.json').then((res) => res.json());
        post = response.posts.filter((p: { id: number }) => p.id === post_id)[0];
    } catch (err: unknown) {
        console.error(err);
        success = false;
        // @ts-ignore
        errmsg = err.toString();
    }
}
</script>

<template>
    <v-container>
        <v-row>
            <v-col offset="2" cols="8">
                <div v-if="!success" class="error">
                    <h1>This post most likely does not exist.</h1>
                    <p>See the console for more details.</p>
                    <p>{{ errmsg }}</p>
                </div>
                <div v-else class="post">
                    <z-post :post="post" />
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
p {
    margin-top: 1rem;
}
</style>
