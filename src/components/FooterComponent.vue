<script setup lang="ts"></script>

<template>
    <footer>
        <div class="footer-copy">
            <p>
                Zarthus &middot;
                <z-link :external="true" href="https://github.com/zarthus/liefland" icon="mdi-github">Source</z-link>
            </p>
        </div>

        <div class="footer-buttons">
            <v-btn icon>
                <z-link :external="true" href="https://github.com/zarthus" icon="mdi-github" details="GitHub Profile" />
            </v-btn>

            <v-btn icon>
                <z-link :external="true" href="https://gitlab.com/zarthus" icon="mdi-gitlab" details="GitLab Profile" />
            </v-btn>

            <v-btn icon>
                <z-link :external="false" href="/posts" icon="mdi-file-document" details="Blog" />
            </v-btn>

            <v-btn icon>
                <z-link :external="true" href="/api.json" icon="mdi-sitemap" details="Sitemap" />
            </v-btn>
        </div>
    </footer>
</template>

<style scoped>
footer {
    text-align: center;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.footer-buttons > button {
    margin: 0.25rem;
}
</style>
