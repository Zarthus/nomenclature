<script setup lang="ts">
const skillset = ['foo', 'bar'];
</script>

<template>
    <div class="values">
        <v-container>
            <v-row>
                <v-col class="column" offset="2">
                    <h2>Skillset</h2>
                    <p></p>
                    <p></p>
                    <span id="skillset-tableofcontents" v-for="(value, index) in skillset">
                        <z-link :href="`#${value.toLowerCase().replace(/[^a-z]+/g, '-')}`"> {{ value }} </z-link>

                        <br v-if="index === 2" />
                    </span>
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

#skillset-tableofcontents {
    margin: 1rem;
}
</style>
