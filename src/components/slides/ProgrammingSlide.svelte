<script lang="ts">
    import Button from '$components/atoms/Button.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import Separator from '$components/atoms/Separator.svelte';
    import Card from '$components/organisms/Card.svelte';
    import Box from '$components/atoms/Box.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};
</script>

<Slide themeOverride="programming-slides-theme">
    <Box size="lg" margin>
        <Button 
            size="mi" on:click={() => gotoSlide('map')} 
            leftEmoji="←" 
            label="Back to La Carte"
        />
        <Separator size="md"/>
        <h2>Programming & Computer Science</h2>
        <Separator size="pi"/>
        <p>
            Programming is my main productive activity.
            I'm programming on my spare time since 2016.
        </p>
    </Box>
    <Separator size="sm"/>
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
            title="👔 Professional Experience"
            on:click={() => gotoSlide('professionalXp')}
        />
        <Card
            title="🎓 Education"
            on:click={() => gotoSlide('education')}
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
</Slide>

<style>
    .cards {
        width: 69ch;
        max-width: 100%;
    }

    @media (max-width: 170ch) {
        .cards {
            width: 35ch;
        }
    }

    @media (max-width: 700px) {
        .cards {
            justify-content: center;
        }
    }

    p {
        width: 75ch;
        max-width: 100%;
        margin: 0.25em;
        text-align: left;
    }
</style>
