<script lang="ts">
    import Slide from '$components/molecules/Slide.svelte';
    import Separator from '$components/atoms/Separator.svelte';
    import Card from '$components/organisms/Card.svelte';
    import SlideHeader from '../molecules/SlideHeader.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};
</script>

<Slide themeOverride="minimalist">
    <SlideHeader 
        onBackClicked={() => gotoSlide('map')}
        title="Programming & CompSci."
    />
    <div class="cards-container row center-x">
        <div class="row center-x wrap cards">
            <Card
                title="🌌 Fullstack dev portfolio"
                abstract='From frontend with Svelte and React, backend with Node.js, Java and Elixir, to devOps with Docker. I love to solve difficult problems, share my knowledge and build beautiful UI.'
                on:click={() => gotoSlide('webdevShowreel')}
            />
            <Card
                title="🎲 Gamedev showreel" wip disabled
                abstract='Video game programming is how I started to code. I mainly work on gameplay, but I also mess around with making tools and networking. Many completed projects playable now.'
            />
            <Card
                title="🐙 Browse my repositories"
                href="https://github.com/AnicetNgrt"
            />
            <Card
                title="💾 Play my games"
                href="https://anicetngrt.itch.io/"
            />
        </div>
    </div>
</Slide>

<style>
    .cards-container {
        width: 100%;
    }

    .cards {
        width: 70ch;
        max-width: 100%;
    }

    @media (max-width: 80ch) {
        .cards {
            width: 35ch;
        }
    }

    @media (max-width: 700px) {
        .cards {
            justify-content: center;
        }
    }
</style>
