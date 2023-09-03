<script setup lang="ts">
const values = [
    'Be Kind',
    'Be Ethical',
    'Be The Best Version of Yourself',
    'Transperancy',
    'Diversity, Inclusion, Belonging',
    'Iteration',
    'Allow Distractions, When They Make Sense',
];
</script>

<template>
    <div class="values">
        <v-container>
            <v-row>
                <v-col class="column" offset="2">
                    <h2>Values</h2>
                    <p>
                        The below list are values (and subvalues) I subscribe to, things I deem important. They assist
                        me with decision making. These are a mixture of personal and professional values.
                    </p>
                    <p>
                        While I try not to compromise on these, life is complicated and best judgment can take
                        presidence.
                    </p>
                    <span id="values-tableofcontents" v-for="(value, index) in values" :key="index">
                        <z-link :href="`#${value.toLowerCase().replace(/[^a-z]+/g, '-')}`"> {{ value }} </z-link>

                        <br v-if="index == Math.floor(values.length / 2)" />
                    </span>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="be-kind">Be Kind</h2>
                    <p>
                        While it may sound simple, it's also very important. Being kind and assuming good intent helps
                        improve the world towards a better tomorrow.
                    </p>
                    <h3>Assume good intent</h3>
                    <p>
                        When someone does something that may seem bad, assume they did not mean to do it. This helps
                        prevent unnecessary conflict and allows for a more constructive conversation. It also helps
                    </p>
                    <p>
                        Every conflict has at least two sides of a story, it is important to understand the full picture
                        of a conflict before making attempts to resolve it.
                    </p>
                    <p>When someone has made your life easier, or better, appreciate it and let them know.</p>
                    <h3>Respect All People</h3>
                    <p>
                        There are a lot of people around the world, some have ideas or approaches I don't subscribe to
                        or are aligned with my personal values. That's okay, I do not need to like or collaborate with
                        them, but I should respect their point of view.
                    </p>
                    <h3>A Person is not defined by their work</h3>
                    <p>
                        What a person is currently doing is only a small subset of the complexity that is a person, and
                        not their whole person.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="be-ethical">Be Ethical</h2>
                    <p>
                        If something is going to have an adverse negative impact on somebody else, it's important to
                        consider if the risks outweigh the benefits, and if they don't, it's important to consider a
                        change in strategy.
                    </p>
                    <p>
                        If something feels unethical, suggest ways to make it better, and allow for mechanisms to be
                        prioritized that actively guide the user towards awareness of the risks.
                    </p>
                    <p>
                        When something feels unethical, it's important to speak up. That way you can directly influence
                        a better future.
                    </p>
                    <h3>Value integrity, even when nobody is watching</h3>
                    <p>
                        The dictionary defines integrity as "the quality of being honest and having strong moral
                        principles.", and I think that's spot on - it's tempting to take shortcuts when there are no
                        other participants, but we shouldn't give in to that temptation.
                    </p>
                    <h3>Informed Consent</h3>
                    <p>
                        It's important that when pulling another party into the mix, they have all the facts up front so
                        make their own conclusion before comitting to the decision. This will help with better decision
                        making, but also help with giving context on the bigger picture and ensure smooth collaboration.
                    </p>
                    <p>
                        Note that in some scenarios, consent does not mean agreement: It is okay to disagree with a
                        strategy but still consent &amp; commit to it.
                    </p>
                    <h3>Say No</h3>
                    <p>
                        If something makes you uncomfortable, and the other party is unwilling to compromise - say no.
                        If something actively can be harmful for other people, and the feedback being given is not being
                        considered, say no.
                    </p>
                    <p>
                        It's about not compromising on what you believe is important. Refusing to do something if they
                        are not aligned with your values is not a sign of weakness, but a sign of strength.
                    </p>
                    <h3>Privacy By Design</h3>
                    <p>
                        Privacy is important, and it's important to respect people's privacy. This means not sharing
                        information that is not mine to share, and not collecting information that is not mine to
                        collect.
                    </p>
                    <p>
                        In the things I do in life, I try to minimize the amount of information I collect. When that's
                        not possible, I ensure great care is taken to ensure it is difficult to obtain.
                    </p>
                    <h3>Security</h3>
                    <p>
                        Every company in the world says that security is a top-most priority - and in many cases, it's
                        not wrong - but the reality is that it would be really bad PR if you said it wasn't. While I'm
                        sure it's on the list of things to consider for major decisions, you will often see it's not a
                        default way of thinking, leading to simple mishaps.
                    </p>
                    <p>
                        The "issue" with security is that the weakest link is often the failing point, and it only takes
                        a single weakest link for things to fall apart.
                    </p>
                    <h4>A note on security shifted to the left</h4>
                    <p>
                        We should aim to guarantee at least the very basic of security measurements are in place in the
                        early development cycle, and take extra efforts to do up-front security rather than after the
                        fact.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="be-the-best-version-of-yourself">Be The Best Version of Yourself</h2>
                    <p>
                        This is a very gentle reminder to myself that I should not compare myself to other people. Life
                        is not a competition with anyone but myself.
                    </p>
                    <p>
                        Comparing myself to others will lead to unhappiness but also uneven playing grounds. Humans are
                        complex and difficult to compare.
                    </p>
                    <h3>We are our own worst critic</h3>
                    <p>
                        It's important to be kind to. We are all human, and we all make mistakes. It's important to
                        learn from them, but it's also important to not let them define you.
                    </p>
                    <p>
                        Try not to let ego take over or assume, and instead ask for clarification when in doubt when it
                        makes reasonable sense.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="transperancy">Transperancy</h2>
                    <p>"We learn history, lest it repeats itself"</p>
                    <p>That only works when history is written down, and that's why we need to be transparent.</p>
                    <p>
                        I try to be as open as I can, I communicate publically by default when it makes sense, notes
                        that I have are public or available on request, and typically aim to keep things open.
                    </p>
                    <h3>Open Source</h3>
                    <p>
                        I contribute to and write open source software myself. When I write my own software, I aim to
                        have a license as permissive as possible by default so that everyone can benefit.
                    </p>
                    <h3>When things are in the open, you get free backups</h3>
                    <p>
                        Convieniently, when you put most of your data transperantly online, it's backed up for free.
                        Data loss is mitigated and you can access it from anywhere.
                    </p>
                    <h3>Communication</h3>
                    <h4>A note on acronyms</h4>
                    <p>There are many acronyms, in fact - we often get into 'acronym hell'</p>
                    <p>Write things out fully, this will avoid misunderstandings</p>
                    <h4>A note on other common patterns</h4>
                    <p>
                        bi-weekly (and the same applies for bi-monthly and bi-yearly) can mean both "twice a week" or
                        "once every two weeks"
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="diversity-inclusion-belonging">Diversity, Inclusion, Belonging</h2>
                    <p>Include people, in conversations, software, and everyday life.</p>
                    <p>There are a lot of minorities, and we typically are blind to those we do not support</p>
                    <p>I try to engage and understand as much as I can, so that I can better support people.</p>
                    <h3>Use inclusive language</h3>
                    <p>Use inclusive pronouns, and use the word "people" to refer to people.</p>
                    <p>
                        By following the above values, that should translate into people feeling like the belong more,
                        but that is not guaranteed.
                    </p>
                    <h3>Use the defined language everybody in the group speaks</h3>
                    <p>
                        Often it happens people use their native language in groups and then someone passes by that does
                        not speak that language. It happens often people do not naturally switch to the language
                        everyone is comfortable with. When possible, accomodate other people and take ownership into
                        changing the language of the conversation.
                    </p>
                    <p>
                        When communication is public, such as meeting notes, they should always be in the most common
                        language (which is usually English)
                    </p>
                    <h3>A note on Data Driven decisions</h3>
                    <p>
                        Data Driven metrics often are biased towards the majority groups, which is an important fact to
                        be aware of.
                    </p>
                    <h3>A note on Privileged Positions</h3>
                    <p>
                        I was born a white caucasian male born in a rich country, have no visible handicaps or trauma,
                        and had a decent youth - which puts me in a privileged position. It is important to me that I
                        maintain awareness of that fact, I am not privy to much of the hidden 'nuance' of life that many
                        other people may experience simply by the fact of being different.
                    </p>
                    <p>
                        No matter how much "differently" I identify, I still have a leg up on a lot of people, and a lot
                        of lifes challenges may have been less visible or even completely invisible to me.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="iteration">Iteration</h2>
                    <p>
                        It's better to ship fast even if it is incomplete. Get feedback, show it to people, and iterate.
                        Thoughts change all the time and you might learn something from someone that changes the way you
                        will make what you are working on.
                    </p>
                    <h3>Ask for feedback</h3>
                    <p>
                        Even when working on a completely isolated project, asking for feedback will lead to better end
                        results.
                    </p>
                    <h3>Retrospect</h3>
                    <p>
                        When you iterate, you get frequent opportunities to respect - what went wrong, what went right?
                        Invaluable questions to ask, which will lead to making better iterations in the future.
                    </p>
                    <h3>When you learn, you do not lose</h3>
                    <p>We all make mistakes, and that's okay.</p>
                    <p>
                        It's important to realize we are all human and that mistakes can still converted into wins, or
                        at least into learning opportunities.
                    </p>
                    <p>Detect mistakes early, own up to them, and if it makes sense - share them!</p>
                    <p>
                        It's important not to double down on mistakes and let ego take hold, lest we activate the
                        <z-link :external="true" href="https://en.wikipedia.org/wiki/Sunk_cost">
                            Sunk Cost Fallacy
                        </z-link>
                    </p>
                    <h3>Things don't need to look good to be shipped</h3>
                    <p>
                        This is a value mostly to combat my
                        <z-link href="flaws#perfectionist">flaw for perfectionism</z-link> and acts as a self-reminder.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="column" offset="2">
                    <h2 id="allow-distractions-when-they-make-sense">Allow Distractions, When They Make Sense</h2>
                    <p>
                        One of my personal
                        <z-link href="/flaws#scatterbrained">flaws is that I am scatterbrained</z-link>, and I can get
                        distracted easily, in addition - I NEED distractions to keep myself happy.
                    </p>
                    <p>
                        I usually work in moments of hyperfocus, where I have significant output in a short period (2-4
                        hours) of time and then become less productive for the remainder of the day.
                    </p>

                    <h3>When does it make sense?</h3>
                    <h4>It takes less than 15 minutes to get done</h4>
                    <p>
                        If something comes inbetween, especially if it unblocks someone, and it takes less than 15
                        minutes - get it off your TODO list and just do it.
                    </p>

                    <h4>Breaking the monotony</h4>
                    <p>
                        When working on a long project, plan in distractions that break the monotony of the project so
                        that you are re-invigorated and can continue working on it. Sometimes, this can also learn to
                        new insights since some time has passed and you've looked at something else for a while.
                    </p>

                    <h4>When things are not going as planned</h4>
                    <p>
                        Sometimes taking a pause and "sleeping on it" will help pivot yourself back on course resulting
                        in a better result.
                    </p>

                    <h4>It makes you happy</h4>
                    <p>
                        If it contributes to your own happiness, it will likely be channeled back into productivity on
                        other topics
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

#values-tableofcontents {
    margin: 1rem;
}
</style>
