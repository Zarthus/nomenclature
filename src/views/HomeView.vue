<script setup lang="ts">
import SquareParticleEffect from '../components/SquareParticleEffect.vue';
import LatestPost from '../components/LatestPost.vue';
</script>

<template>
    <main>
        <div class="user-info">
            <square-particle-effect />
            <p>
                <span id="alias">Zarthus</span>
                <span id="pronouns">(they/them)</span>,
                <span id="location">The Netherlands</span>
            </p>
            <p>
                <span id="bio">Debugging reality, one breakpoint at a time.</span>
            </p>
        </div>

        <v-container>
            <div class="user-info-ext">
                <v-row>
                    <v-col>
                        <h2>About</h2>
                        <p><z-link href="/about">Learn a bit more about me and what I do</z-link></p>
                    </v-col>

                    <v-col>
                        <h2>Values</h2>
                        <p><z-link href="/values">I documented my values on this website, you can view them</z-link></p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <h2>Strengths</h2>
                        <p><z-link href="/strengths">Some of the things I think I'm good at</z-link></p>
                    </v-col>
                    <v-col>
                        <h2>Weaknesses</h2>
                        <p>
                            <z-link href="/weaknesses">
                                I'm not perfect, here's some of the things I'm not good at
                            </z-link>
                        </p>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col offset="3" cols="6">
                        <h2>Latest Post</h2>
                        <latest-post />
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </main>
</template>

<style scoped>
h1,
#pronouns {
    color: gray;
    margin-left: 0.25rem;
}

main {
    margin-top: 1rem;
    text-align: center;
}

#alias {
    font-size: 1.5rem;
}

.user-info {
    min-height: 25vh;
}

.user-info-ext {
    margin-top: 2rem;
}
</style>
