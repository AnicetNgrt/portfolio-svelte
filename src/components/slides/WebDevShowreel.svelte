<script lang="ts">
    import Box from '../atoms/Box.svelte';
    import Separator from '$components/atoms/Separator.svelte';
    import Button from '$components/atoms/Button.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import Caroussel from '../molecules/Caroussel.svelte';
    import SlideHeader from '../molecules/SlideHeader.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};

    // let projectIndex = 0;
    // const maxIndex = 0;
</script>

<Slide url="fullstackdev-portfolio" themeOverride="programming-slides-theme">
    <SlideHeader 
        onBackClicked={() => gotoSlide('programming')}
        title="🌌 Fullstack development portfolio"
    />
    <Separator size="sm"/>
    <div class="col center-x">
        <div class="sticky">
            <div class="row center-y">
                <div class="col">
                    <h3>3W Sherlocks</h3>
                    <p>🥇 <i>"Bourse Coddity 2021" hackathon winner (1000€ cashprize)</i></p>
                </div>
                <Separator size="lg"/>
                <Button size="md" round label="next" rightEmoji="⏭"/>
            </div>
        </div>
        <Separator size="pi"/>
        <p class="info">📆 02/20 ~> 04/20 :: 👤 solo :: [🐳Docker, 🐘Postgres, 🍷Elixir, 🔥Phoenix, 🌀Tailwind]</p>
        <Separator size="sm"/>
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
        <Separator size="sm"/>
        <div class="col">
            <Separator size="sm"/>
            <Button size="md" label="Check out the deployed version" rightEmoji="🚀" href="https://bourse2021-coddity.anicetnougaret.fr"/>
            <Separator size="lg"/>
            <div>
                <h4>About</h4>
                <Separator size="sm"/>
                <p>Web application that fights fake news through user-ruled online debunking sessions.</p>
                <Separator size="mi"/>
                <p>Fullstack project written in <b>Elixir</b> using <b>Phoenix framework</b> for it's real-time capabilities, <b>PostgreSQL</b>, <b>Docker</b> and <b>TailwindCSS</b>.</p>
            </div>
            <Separator size="lg"/>
            <div>
                <h4>Key features</h4>
                <Separator size="sm"/>
                <ul>
                    <li>Take part in collaborative debunking sessions with anyone online using a real-time chat and voting system.</li>
                    <Separator size="mi"/>
                    <li>Have fun and stay engaged with a role-playing-game-like system that pushes participants to think differently.</li>
                    <Separator size="mi"/>
                    <li>Discover sessions with full-text search and useful filters.</li>
                </ul>
            </div>
        </div>
    </div>
</Slide>

<style>
    .sticky {
        background: var(--cbg);
        position: sticky;
        top: 0;
        width: 100%;
        padding: var(--padd);
        z-index: 2;
    }

    .sticky .row {
        justify-content: space-between;
        padding: 0 var(--sm);
    }

    .info {
        font-family: "Jetbrains Mono";
        background: var(--caccent-faint);
        min-width: 100%;
        text-align: center;
        color: var(--caccent);
        padding: var(--padd);
        font-size: var(--mi);
        border-radius: var(--brad);
    }
</style>