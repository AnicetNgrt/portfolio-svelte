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
    <Box size="sm" margin>
        <Button 
            size="mi" on:click={() => gotoSlide('main')} 
            leftEmoji="←" 
            label="Home" 
            round
            accent
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

        --br: 2;
        --ssmth: 0px;
        --sopac: 0.2;
        --bthic: 1.4;

        --cbg: rgb(94, 133, 218);
        --cfaint: rgb(86, 173, 93);
        --ccontrast: rgb(35, 41, 41);
        --ctext: rgb(247, 248, 201);
        --caccent: rgb(9, 83, 59);
        --caccent-faint: rgb(211, 171, 84);
        --ccontrast-shadow: rgba(77, 47, 14, var(--sopac));
        --caccent-shadow: rgba(32, 29, 44, var(--sopac));
    }

    .cards {
        width: 64.9ch;
        max-width: 100%;
    }

    @media (max-width: 170ch) {
        .cards {
            width: 32ch;
        }
    }

    @media (max-width: 700px) {
        .cards {
            justify-content: center;
        }
    }

    h4 {
        margin-left: var(--sm);
        margin-top: 0.25em;
    }
</style>
