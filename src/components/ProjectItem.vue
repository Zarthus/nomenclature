<script setup lang="ts">
const props = defineProps(['title', 'date', 'tags', 'details', 'link']);

const sortedTags = props.tags;
sortedTags.sort();
</script>

<template>
    <v-card>
        <v-card-title v-if="link">
            <z-link :external="true" :href="link" :details="details" v-if="link">
                {{ title }}
            </z-link>
        </v-card-title>
        <v-card-title v-else>
            {{ title }}
        </v-card-title>
        <v-card-subtitle>{{ date }}</v-card-subtitle>
        <v-card-text>
            <div class="tags" v-if="tags.length">
                <span v-for="tag in sortedTags" :key="tag" class="tag">
                    <v-chip>{{ tag }}</v-chip>
                </span>
            </div>

            <slot></slot>
        </v-card-text>
        <v-card-actions v-if="link">
            <v-btn>
                <z-link :external="true" :href="link" icon="mdi-open-in-new" :details="details">
                    Link to Project
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
