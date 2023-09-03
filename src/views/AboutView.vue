<template>
    <div class="about">
        <div class="user-info-ext">
            <v-container>
                <v-row>
                    <v-col offset="3" cols="6">
                        <h2>Introduction</h2>
                        <p>
                            I'm Zarthus, I identify as a non-binary person, an introvert-leaning ambivert, and my
                            pronouns are they/them, and live in the Netherlands.
                        </p>
                        <p>
                            I enjoy playing board games, take value in understanding the non-understood, make time to
                            create meaningful and long-lasting connections, seek to explore and learn about new things
                            in the world and focus on becoming a little bit better at something every day. I gain energy
                            from those close to me. I enjoy playing Devils Advocate or a "chaotic neutral" role to get a
                            type of discussion going that is healthy and stimulates improvement.
                        </p>
                        <p>
                            Professionally, I'm a software engineer and devops engineer for roughly a decade now (nearly
                            15 years if you include hobby and studies), nowadays I write mostly in Rust, Go, Bash,
                            TypeScript and Ruby
                        </p>
                        <p>Below, you can find some of my specific interests</p>
                    </v-col>
                </v-row>
            </v-container>

            <v-container>
                <v-row>
                    <v-col class="column">
                        <h2>Software Engineer</h2>
                        <z-markdown source="home/software-engineer" />
                    </v-col>
                    <v-col class="column">
                        <h2>Open Source</h2>
                        <z-markdown source="home/open-source" />
                    </v-col>
                    <v-col class="column">
                        <h2>Tinkerer</h2>
                        <z-markdown source="home/tinkerer" />
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="column">
                        <h2>World Builder</h2>
                        <z-markdown source="home/world-builder" />
                    </v-col>
                    <v-col class="column">
                        <h2>Dungeon Master</h2>
                        <z-markdown source="home/dungeon-master" />
                    </v-col>
                    <v-col class="column">
                        <h2>Writer</h2>
                        <z-markdown source="home/writer" />
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<style scoped>
p {
    margin-bottom: 1rem;
}
</style>
