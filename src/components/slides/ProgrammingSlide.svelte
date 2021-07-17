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
            accent
        />
        <Separator size="md"/>
        <h2>Programming & IT</h2>
    </Box>
    <Separator size="md"/>
    <div class="row center-x wrap cards">
        <Box size="sm" margin>
            <p>
                Programming is my main productive activity.
                I'm programming on my spare time since 2016.
                Owner of a CS degree (DUT BAC+2) at <i>Université de Paris</i>, I'm expecting to graduate as a CS Engineer at <i>INSA Lyon</i> in 2024.
            </p>
        </Box>
        <div class="col">
                <Card
                    title="🐙 Browse my open-source projects"
                    href="https://github.com/AnicetNgrt"
                />
                <Card
                    title="💾 Play the games I've made"
                    href="https://anicetngrt.itch.io/"
                />
        </div>
        <Card
            title="🌌 Web projects"
            abstract='From frontend with Svelte and React, backend with Node.js, Java and Elixir, to devOps with Docker. I love to solve difficult problems, share my knowledge and build beautiful UI.'
        />
        <Card
            title="🎲 Games projects"
            abstract='Video game programming is how I started to code. I mainly work on gameplay, but I also mess around with making tools and networking. Many completed projects playable now.'
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
        width: 46ch;
        margin: 0.25em;
        text-align: left;
    }
</style>
