<script lang="ts">
    import Box from '../atoms/Box.svelte';
    import Button from '$components/atoms/Button.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import Separator from '$components/atoms/Separator.svelte';
    import Caroussel from '../molecules/Caroussel.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};
</script>

<Slide url="fullstackdev-portfolio" themeOverride="programming-slides-theme">
    <Box size="sm">
        <div class="row wrap center-y">
            <Button 
                size="mi" on:click={() => gotoSlide('programming')} 
                leftEmoji="←" 
                label="Back to Programming & CompSci."
            />
            <Separator size="mi"/>
            <h5>🌌 Fullstack development portfolio</h5>
        </div>
    </Box>
    <Separator size="xl"/>
    <Box size="sm">
        <div class="row center-x center-y">
            <h2 class="highlighted">3W Sherlocks</h2>
            <Separator size="md"/>
            <div>
                <h4>🥇 "Bourse Coddity 2021" hackathon winner</h4>                
                <Separator size="pi"/>
                <p>february to march 2021 ∙ fullstack website ∙ 1000€ cashprize</p>
            </div>
        </div>
        <Separator size="md"/>
        <div class="body row wrap center-x">
            <div class="col" style="width: 60%;">
                <div>
                    <Caroussel slides={[
                        [{ src: "/3wsherlocks/image.png" }],
                        [{ src: "/3wsherlocks/screen_desktop_2.png" }],
                        [{ src: "/3wsherlocks/screen_desktop_3.png" }],
                        [{ src: "/3wsherlocks/screen_desktop_7.png" }],
                        [
                            { src: "/3wsherlocks/screen_mobile_3.png" },
                            { src: "/3wsherlocks/screen_mobile_12.png" },
                            { src: "/3wsherlocks/screen_mobile_6.png" }
                        ]
                    ]}/>
                </div>
            </div>
            <div class="col" style="width: 40%;">
                <div>
                    <h4>About</h4>
                    <Separator size="sm"/>
                    <p>Web application that fights fake news through user-ruled online debunking sessions.</p>
                    <Separator size="mi"/>
                    <p>Fullstack project written in <b>Elixir</b> using <b>Phoenix framework</b> for it's real-time capabilities, <b>PostgreSQL</b>, <b>Docker</b> and <b>TailwindCSS</b>.</p>
                </div>
                <Separator size="sm"/>
                <div>
                    <h4>Key features</h4>
                    <Separator size="sm"/>
                    <ul>
                        <li>Take part in collaborative debunking sessions with anyone online using a live tchat and voting system.</li>
                        <Separator size="mi"/>
                        <li>Have fun and stay engaged with a role-playing-game-like system that pushes participants to think differently.</li>
                        <Separator size="mi"/>
                        <li>Browse past sessions and spread the truth.</li>
                    </ul>
                </div>
            </div>
        </div>
    </Box>
    <Separator size="xxl"/>
    <Box size="sm">
        <div class="row center-x center-y">
            <h2 class="highlighted">Homesynck</h2>
            <Separator size="md"/>
            <div>
                <h4>🎓 CS degree final project</h4>                
                <Separator size="pi"/>
                <p>january to march 2021 ∙ open-source toolkit</p>
            </div>
        </div>
        <Separator size="md"/>
        <div class="body row wrap center-x">
            <div class="col" style="width: 60%;">
                <div>
                    <Caroussel slides={[
                        [{ src: "/3wsherlocks/image.png" }],
                        [{ src: "/3wsherlocks/screen_desktop_2.png" }],
                        [{ src: "/3wsherlocks/screen_desktop_3.png" }],
                        [{ src: "/3wsherlocks/screen_desktop_7.png" }],
                        [
                            { src: "/3wsherlocks/screen_mobile_3.png" },
                            { src: "/3wsherlocks/screen_mobile_12.png" },
                            { src: "/3wsherlocks/screen_mobile_6.png" }
                        ]
                    ]}/>
                </div>
            </div>
            <div class="col" style="width: 40%;">
                <div>
                    <h4>About</h4>
                    <Separator size="sm"/>
                    <p>Web application that fights fake news through user-ruled online debunking sessions.</p>
                    <Separator size="mi"/>
                    <p>Fullstack project written in <b>Elixir</b> using <b>Phoenix framework</b> for it's real-time capabilities, <b>PostgreSQL</b>, <b>Docker</b> and <b>TailwindCSS</b>.</p>
                </div>
                <Separator size="sm"/>
                <div>
                    <h4>Key features</h4>
                    <Separator size="sm"/>
                    <ul>
                        <li>Take part in collaborative debunking sessions with anyone online using a live tchat and voting system.</li>
                        <Separator size="mi"/>
                        <li>Have fun and stay engaged with a role-playing-game-like system that pushes participants to think differently.</li>
                        <Separator size="mi"/>
                        <li>Browse past sessions and spread the truth.</li>
                    </ul>
                </div>
            </div>
        </div>
    </Box>
    <Separator size="giga"/>
</Slide>

<style>
    .body {
        max-width: 100%;
        width: max-content;
    }

    .body .col {
        height: max-content;
        width: 50%;
        min-width: 45ch;
        max-width: 100%;
    }

    .body div div {
        border-radius: var(--brad);
        padding: var(--pi) var(--pi);
        width: 100%;
    }

    .body ul {
        margin-left: var(--sm);
    }
</style>