<script setup lang="ts">
import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor';
import MarkdownItHighlightJs from 'markdown-it-highlightjs';
import { computed } from 'vue';

const markdown = computed(() => {
    const markdown = new MarkdownIt().use(MarkdownItAnchor).use(MarkdownItHighlightJs);

    return markdown;
});

const props = defineProps({
    source: {
        required: true,
        type: String,
    },
});

if (props.source == null) {
    throw Error('source is null in markdown component');
}

const contents = await fetch('/markdown/' + props.source + '.md').then((r) => r.text());
</script>

<template>
    <span class="markdown" v-html="markdown.render(contents)"></span>
</template>

<style>
.markdown p {
    word-wrap: break-word;
}

.markdown p,
.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4 {
    margin-top: 1rem;
}

.markdown li {
    margin-left: 2rem;
}
</style>
