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
                    <p>
                        This document assumes you've read or skimmed the <z-link href="/values">Values</z-link> page,
                        but will make references where it makes sense.
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
                    <h3>In day to day life</h3>
                    <p>
                        I take a lot of enjoyment out of designing things perfectly and giving it that gold-trimmed
                        polish, which can make it hard to find a stopping point and take time to reflect and see it work
                        in practice. I've gotten decent at finding these stopping points nowadays and focusing towards a
                        more Prototype or Proof of Concept type of working.
                    </p>
                    <h3>In Frontend</h3>
                    <p>
                        This perfectionism especially translates into Frontend, I will usually spend more time to ensure
                        everything looks good, and since I'm not an especially strong frontend developer this also means
                        it takes a lot of time to get things working. I will prefer simple and ugly designs usually in
                        favor of complex and comprehensive ones for that reason.
                    </p>
                    <h3>In writing</h3>
                    <p>
                        I've gotten better at letting go on this one, and unless it becomes a published work I can
                        usually let go pretty well of imperfections.
                    </p>
                    <p>
                        Things I look out for: Double spaces, proper wrapping, correct grammar, and if the narrative
                        that is being communicated comes across well.
                    </p>
                    <h3>As a value</h3>
                    <p>One of my values is <z-value value="Iteration" /> which helps me combat this weakness.</p>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="too-verbose">Too Verbose</h2>
                    <p>
                        In the interest of brevity, I think this website is a good example of how I can be too verbose.
                        There's a lot of text here that could have probably been written in a different way to make it
                        easier to read.
                    </p>
                    <p>Relevant are <z-value value="Transperancy" /> and <z-value value="Iteration" /></p>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="scatterbrained">Scatterbrained</h2>
                    <p>
                        Largely documented in <z-value value="Allow Distractions, When They Make Sense" /> - I am easily
                        distracted or happy to jump on new topics or help people out.
                    </p>
                    <p>
                        Tools that help me control this is Obsidian for note taking and TODOs and Slack's recently
                        introduced TODO items.
                    </p>
                    <h3>Deals poorly with monotony</h3>
                    <p>
                        I use my scattered brain to split up monotonous tasks and pour that energy back into the
                        monotonous tasks, sometimes this works, sometimes this does not.
                    </p>
                    <h3>In meetings</h3>
                    <p>
                        During meetings, I actively have to put on focus mode to ensure my attention is not split up
                        between multiple tasks.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="impact">Impact</h2>
                    <p>
                        A direct result of basically all of my weaknesses combined - it can be hard for me to stay on
                        track and deliver impact where it can make the biggest difference.
                    </p>
                    <h3>Prioritization</h3>
                    <p>
                        Thanks to <z-strength strength="Passion for the Product" /> I can usually prioritize my work
                        properly and ensure those that the most important things do come to finish in a timely manner.
                    </p>
                    <p>
                        If we work closely together, you can help me by specifying what should be a top priority so that
                        I can use that information to ensure my priorities are aligned.
                    </p>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="poor-heat-resistance">Poor Heat Resistance</h2>
                    <p>
                        I work really poorly when the temperature of a room is too high, I can get a shorter temper and
                        lose focus, and not immediately pick up on it.
                    </p>
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
