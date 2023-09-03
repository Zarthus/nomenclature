<script setup lang="ts">
const strengths = ['Transperancy', 'Observant', 'Learner', 'Passion for the Product', 'Action on actionables'];
</script>

<template>
    <div class="values">
        <v-container>
            <v-row>
                <v-col class="column" offset="2">
                    <h2>Strengths</h2>
                    <p>
                        Below are a list of items I consider myself to be good at, and although I may still make
                        mistakes - these are typically the things I receive positive feedback on.
                    </p>
                    <p>
                        This document assumes you've read or skimmed the <z-link href="/values">Values</z-link> page,
                        but will make references where it makes sense.
                    </p>
                    <span v-for="(value, index) in strengths" :key="index" id="strengths-tableofcontents">
                        <z-link :href="`#${value.toLowerCase().replace(/[^a-z]+/g, '-')}`"> {{ value }} </z-link>
                        <br v-if="index == Math.floor(strengths.length / 2)" />
                    </span>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="transperancy">Transperancy</h2>
                    <p>This is directly reflected in my values</p>
                    <p><z-value value="Transperancy" /></p>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="observant">Observant</h2>
                    <p>
                        When talking about observing, I don't necessarily mean people, but rather situations or systems
                    </p>
                    <p>
                        What this means is that I try to understand situations and identify contextually what I do not
                        yet know, and understand the full picture or both sides of a story before passing judgment -
                        when this is not reasonably possible, moving ahead knowing some gaps in knowledge exist will
                        help assess situations better.
                    </p>
                    <p>
                        This also applies to systems - combining into
                        <z-strength strength="Passion for the Product" />
                    </p>
                    <h3>Self Aware</h3>
                    <p>
                        I consistently get feedback that I am well aware of my strength and weaknesses, and that's
                        because I spend a lot of time retrospecting, asking for feedback, and the nature of being
                        transparant means there is often a lot of insights to gain.
                    </p>
                    <p>
                        Being aware of them also helps me identify when I run into a weakness, and that I can
                        transparantly communicate them
                    </p>
                    <h3>Security</h3>
                    <p>
                        Security as a strength does not necessarily mean that I have a lot of contextual knowledge about
                        the subject - though I do enjoy learning as much as possible about it, but rather that I can
                        identify weaknesses in processes and point them out.
                    </p>
                    <h3>Debugging</h3>
                    <p>
                        A side-effect from most of the above is that I tend to be pretty good at navigating and
                        reasoning through systems and figuring out problems with it.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="learner">Learner</h2>
                    <p>
                        There's an incredible passion burning within me to learn, and it's something I'll never really
                        get bored of - there's a saying where if you didn't learn anything in a day, you haven't lived
                        that day, while it's not as binary as that, there's a great deal of truth to it.
                    </p>
                    <p>
                        Typically when I have questions, I try to ask them, figure them out on my own, or add them to a
                        TODO list for later review
                    </p>
                    <p>This strength correlates to a few of my values:</p>
                    <p>
                        <z-value value="Be The Best Version of Yourself" />
                    </p>
                    <p>
                        <z-value value="Iteration" />
                    </p>
                    <h3>Passionate</h3>
                    <p>
                        Hand in hand with learning comes a great deal of passion for learning new things, expanding
                        existing horizons, and understanding new points of view.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="passion-for-the-product">Passion for the Product</h2>
                    <p>
                        Piggybacking off off the above strengths: Observant and Learner, one of the things I am
                        passionate about is using what I make (also known as Dogfooding)
                    </p>
                    <p>
                        I enjoy understanding the nitty gritty, how to use products, so that I can deliver concrete and
                        actionable feedback
                    </p>
                    <h3>Ally of Product &amp; Design</h3>
                    <p>
                        I have historically been very involved with Product and Design to assist with making the best
                        product possible together, providing feedback early on in the processes and making small
                        comments that ensure that the deliverable will be even better. Things like "I can see X as a
                        potential issue, and I think if we do Y it will be even better/faster"
                    </p>
                    <h3>Considering the minority groups</h3>
                    <p>
                        There is a bias towards data driven development in this world, and I try to include our minority
                        friends as best as possible when brainstorming about new additions based on data, where it makes
                        sense
                    </p>
                    <h3>In Values</h3>
                    <p>
                        Closely relates to <z-value value="Be Ethical" /> and
                        <z-value value="Diversity, Inclusion, Belonging" />
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="action-on-actionables">Action on Actionables</h2>
                    <p>To me, this is about a three step process:</p>
                    <p>1. Identify actionables</p>
                    <p>2. Determine if they are worth acting on.</p>
                    <p>3. Ensure it gets done.</p>
                    <p>
                        I have been very successful in getting things done efficiently, or to inspire other people with
                        getting things across the finish line, whereas my enthousiasm sometimes can also lead to
                        <z-weakness weakness="Impact" /> or <z-weakness weakness="Scatterbrained" />, I have learned to
                        properly timebox these elements to ensure I don't overcommit.
                    </p>
                    <h3>Efficiency</h3>
                    <p>
                        I've been praised for being incredibly efficient in getting things done, and I take pride in
                        that.
                    </p>
                    <p>I'm most effective during morning hours.</p>
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

#strengths-tableofcontents {
    margin: 1rem;
}
</style>
