<script lang="ts" setup>
import ProjectItem from '../components/ProjectItem.vue';

defineProps(['title', 'date', 'tags', 'details', 'link']);
</script>

<template>
    <div class="about">
        <div class="user-info-ext">
            <v-container>
                <v-row>
                    <v-col offset="3" cols="6">
                        <h2>Public contributions &amp; projects</h2>
                        <p>Gain some insights into public projects I've significantly contributed to</p>
                    </v-col>
                </v-row>
            </v-container>

            <v-container>
                <v-row>
                    <v-col offset="3" cols="6">
                        <ProjectItem
                            title="GitLab"
                            date="2023"
                            :tags="['open source', 'ruby', 'ruby on rails', 'vue', 'javascript', 'git']"
                            :details="undefined"
                            link="https://gitlab.com"
                        >
                            <p>
                                Contributing to GitLab - you can view my profile at
                                <z-link :external="true" href="https://gitlab.com/zarthus">
                                    https://gitlab.com/zarthus
                                </z-link>
                            </p>
                        </ProjectItem>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col offset="3" cols="6">
                        <ProjectItem
                            title="React Datepicker"
                            date="2023"
                            :tags="['open source', 'react', 'javascript']"
                            :details="undefined"
                            link="https://github.com/Hacker0x01/react-datepicker"
                        >
                            <p>Maintainer of the React Datepicker from HackerOne</p>
                        </ProjectItem>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col offset="3" cols="6">
                        <ProjectItem
                            title="The Lounge IRC Client"
                            date="2018 &mdash; 2019"
                            :tags="['open source', 'irc', 'vue', 'javascript']"
                            :details="undefined"
                            link="https://github.com/thelounge/thelounge"
                        >
                        </ProjectItem>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col offset="3" cols="6">
                        <ProjectItem
                            title="Regex101"
                            date="2017 &mdash; 2019 primarily, thereafter passively"
                            :tags="['regular expressions', 'open source', 'react', 'issue management', 'translations']"
                            :details="undefined"
                            link="https://github.com/firasdib/Regex101"
                        >
                            <p>
                                <z-link :external="true" href="https://regex101.com">https://regex101.com</z-link> is a
                                tool for testing and learning Regular Expressions.
                            </p>
                        </ProjectItem>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col offset="3" cols="6">
                        <ProjectItem title="Bug Bounty Hunter" date="2016 - current" :tags="['security', 'bug bounty']">
                            <p>Found vulnerabilities in:</p>
                            <ul>
                                <li>GitHub</li>
                                <li>HackerOne</li>
                                <li>T-Mobile</li>
                                <li>Several Open Source repositories</li>
                            </ul>

                            <p>Profiles:</p>
                            <ul>
                                <li>
                                    <z-link :external="true" href="https://hackerone.com/zarthus">
                                        zarthus, HackerOne
                                    </z-link>
                                </li>
                                <li>
                                    <z-link :external="true" href="https://hackerone.com/zerotea">
                                        zerotea, HackerOne
                                    </z-link>
                                </li>
                                <li>
                                    <z-link :external="true" href="https://github.com/zarthus">
                                        zarthus, GitHub
                                    </z-link>
                                </li>
                            </ul>
                        </ProjectItem>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col offset="3" cols="6">
                        <ProjectItem
                            title="IRC Operator, Network Admin - Esper.net"
                            date="2014 &mdash; 2019"
                            :tags="['irc', 'sysadmin', 'c', 'sponsor', 'support']"
                            :details="undefined"
                            link="https://esper.net"
                        >
                            <p>
                                EsperNet is an IRC server - known for hosting many communities, most notably those for
                                Minecraft and Factorio
                            </p>
                        </ProjectItem>
                    </v-col>
                </v-row>
            </v-container>

            <v-container>
                <v-row>
                    <v-col offset="3" cols="6">
                        <h2>Places I've worked at</h2>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row>
                    <v-col offset="3" cols="6">
                        <ul>
                            <li>HackerOne (2022 &mdash; current)</li>
                            <li>Joyride (2018 &mdash; 2022)</li>
                            <li>trivago (2017 &mdash; 2018)</li>
                            <li>Almanapp (2016 &mdash; 2017)</li>
                            <li>Dotsolutions (2015)</li>
                        </ul>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<style scoped>
p,
ul {
    margin-bottom: 1rem;
}

li {
    margin-left: 2rem;
}
</style>
