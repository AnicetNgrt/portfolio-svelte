<script lang="ts">
    import Button from '$components/atoms/Button.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import Card from '$components/organisms/Card.svelte';
    import Box from '$components/atoms/Box.svelte';
import SlideHeader from '../molecules/SlideHeader.svelte';
import Separator from '../atoms/Separator.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};
</script>

<Slide themeOverride="map-theme">
    <SlideHeader 
        onBackClicked={() => gotoSlide('main')}
        title="🗺"
    />
    <div class="row center-x">
        <h1>La carte</h1>
    </div>
    <Separator size="sm"/>
    <div class="col center-x wrap cards">
        <Card 
            title="Programming & CompSci."
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
                    title="Education"
                    on:click={() => gotoSlide('education')}
                />
            </div>
            <div class="row">
                <Card
                    small
                    title="Theme Editor"
                    on:click={() => gotoSlide('themeEditor')}
                />
                <Card
                    small wip disabled
                    title="Gallery"
                />
            </div>
        </div>
        <Card
            title="Design & Art" wip disabled
            abstract="Most proficient with minimalist, brutalist and flat design. Professional experience with web design and UI/UX. Using mostly simple techniques and tools."
        />
        <Card
            title="Game Creation" wip disabled
            abstract="My main hobby. Trying a bit of everything but mostly Pixel art, gameplay programming and game design. Many game jams. Godot Engine is great."
        />
    </div>
</Slide>

<style>
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
