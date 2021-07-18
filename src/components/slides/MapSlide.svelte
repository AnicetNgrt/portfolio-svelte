<script lang="ts">
    import Button from '$components/atoms/Button.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import Card from '$components/organisms/Card.svelte';
    import Box from '$components/atoms/Box.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};
</script>

<Slide themeOverride="summary-slide-theme">
    <Box size="lg" margin>
        <Button 
            size="mi" on:click={() => gotoSlide('main')} 
            leftEmoji="←" 
            label="Home" 
        />
        <h1>La carte <span style="font-weight: normal;">🗺</span></h1>
    </Box>
    <div class="col center-x wrap cards">
        <Card 
            title="Programming & IT"
            abstract="Student with professional experience. Proficient with both web backend and frontend. Most proficient with React, Svelte, Elixir, JS, TS, Java, Docker & Python."
            on:click={() => gotoSlide('programming')}
        />
        <div class="col">
            <div class="col">
                <Card 
                    title="Professional Experience"
                    on:click={() => gotoSlide('professionalXp')}
                />
                <Card 
                    title="Education & certificates"
                />
            </div>
            <div class="row">
                <Card 
                    small
                    title="Themer"
                    on:click={() => gotoSlide('themeEditor')}
                />
                <Card 
                    small
                    title="Gallery"
                />
            </div>
        </div>
        <Card 
            title="Design & Art"
            abstract="Most proficient with minimalist, brutalist and flat design. Professional experience with web design and UI/UX. Using mostly simple techniques and tools."
        />
        <Card 
            title="Game Creation"
            abstract="My main hobby. Trying a bit of everything but mostly Pixel art, gameplay programming and game design. Many game jams. Godot Engine is great."
        />
    </div>
</Slide>

<style>
    :global(.summary-slide-theme)  {
        --font: 'Roboto', sans-serif;
        --title-font: 'Playfair Display', serif;

        --br: 0.4;
        --ssmth: 0px;
        --sopac: 1;
        --bthic: 1;

        --cbg: rgb(255, 218, 148);
        --cfaint: rgb(240, 192, 120);
        --ccontrast: rgb(59, 52, 48);
        --ctext: rgb(59, 52, 48);
        --caccent: rgb(223, 157, 96);
        --caccent-faint: rgb(255, 218, 148);
        --ccontrast-shadow: rgba(0, 0, 0, var(--sopac));
        --caccent-shadow: rgba(59, 52, 48, var(--sopac));
    }

    .cards {
        height: 30ch;
        max-height: 100%;
        width: 68ch;
        max-width: 100%;
    }

    @media (max-width: 170ch) {
        .cards {
            width: 35ch;
            height: max-content;
        }
    }

    @media (max-width: 700px) {
        .cards {
            justify-content: center;
        }
    }
</style>
