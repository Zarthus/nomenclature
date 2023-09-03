<script setup lang="ts">
const weaknesses = ['Perfectionist', 'Too Verbose', 'Scatterbrained', 'Impact', 'Poor Heat Resistance'];
</script>

<template>
    <div class="weaknesses">
        <v-container>
            <v-row>
                <v-col class="column" offset="2">
                    <h2>Weaknesses</h2>
                    <p>
                        The below list are weaknesses (and subweaknesses) I've figured out about myself, being aware of
                        them will help you engage with me, but noting them down also helps me keep myself accountable.
                    </p>
                    <p>
                        While I try not to be aware of these, they are weaknesses because I'm not very good at them, if
                        you observe the following behaviour from me feel free to mention it.
                    </p>
                    <span id="weaknesses-tableofcontents" v-for="(flaw, index) in weaknesses" :key="index">
                        <z-link :href="`#${flaw.toLowerCase().replace(/[^a-z]+/g, '-')}`"> {{ flaw }} </z-link>

                        <br v-if="index === 2" />
                    </span>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="perfectionist">Perfectionist</h2>
                    <!-- overengineering -->
                    <!-- frontend -->
                    <!-- -->
                </v-col>
            </v-row>
            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="too-verbose">Too Verbose</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="a">A</h2>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="a">A</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="a">A</h2>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
p {
    margin-bottom: 1rem;
}

.column {
    margin-top: 1rem;
    max-width: 50vw;
}

#weaknesses-tableofcontents {
    margin: 1rem;
}
</style>
