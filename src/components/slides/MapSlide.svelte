<script lang="ts">
    import Button from '$components/atoms/Button.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import Separator from '$components/atoms/Separator.svelte';
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
    <div class="row center-x wrap cards">
        <Card 
            title="👨‍💻 Programming & IT"
            abstract="Student with professional experience. Proficient with both web backend and frontend. Most proficient with React, Svelte, Elixir, JS, TS, Java, Docker & Python."
            on:click={() => gotoSlide('programming')}
        />
        <div class="col">
            <div class="col">
                <Card 
                    title="👔 Professional Experience"
                    on:click={() => gotoSlide('professionalXp')}
                />
                <Card 
                    title="🎓 Education & certificates"
                />
            </div>
            <div class="row">
                <Card 
                    small
                    title="🧪 Themer"
                    abstract="Play around with this site's cool theme system."
                    on:click={() => gotoSlide('themeEditor')}
                />
                <Card 
                    small
                    title="👀 Gallery"
                    abstract="Browse all pictures found on this site."
                />
            </div>
        </div>
        <Card 
            title="📐 Graphic design"
            abstract="Most proficient with minimalist, brutalist and flat design. Professional experience with web design and UI/UX. Using mostly simple techniques and tools."
        />
        <Card 
            title="🎮 Game Creation"
            abstract="Doing a bit of everything but mostly Pixel art, gameplay programming and game design. Many game jams. Godot Engine is great."
        />
    </div>
</Slide>

<style>
    :global(.summary-slide-theme)  {
        --font: 'Roboto', sans-serif;
        --title-font: 'Jost', sans-serif;

        --br: 0.4;
        --ssmth: 4px;
        --sopac: 0.3;
        --bthic: 2;

        --cbg: rgb(94, 133, 218);
        --cfaint: rgb(94, 133, 218);
        --ccontrast: rgb(60, 44, 151);
        --ctext: rgb(255, 255, 255);
        --caccent: rgb(60, 44, 151);
        --caccent-faint: rgb(83, 102, 207);
        --ccontrast-shadow: rgba(60, 44, 151, var(--sopac));
        --caccent-shadow: rgba(60, 44, 151, var(--sopac));
    }

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
</style>
