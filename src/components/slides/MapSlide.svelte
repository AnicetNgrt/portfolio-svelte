<script lang="ts">
    import Button from '$components/atoms/Button.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import Card from '$components/organisms/Card.svelte';
    import Box from '$components/atoms/Box.svelte';
import SlideHeader from '../molecules/SlideHeader.svelte';
import Separator from '../atoms/Separator.svelte';
import Cards from '../organisms/Cards.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};
</script>

<Slide>
    <SlideHeader 
        onBackClicked={() => gotoSlide('main')}
        title="Discover my world 🌍"
    />
    <Cards>
        <Card 
            title="Programming & CompSci."
            abstract="Student with professional experience. Proficient with both web backend and frontend. Most proficient with React, Svelte, Elixir, JS, TS, Java, Docker & Python."
            on:click={() => gotoSlide('programming')}
        />
        <Card
            title="Design & Art"
            abstract="Most proficient with minimalist, brutalist and flat design. Professional experience with web design and UI/UX. Using mostly simple techniques and tools."
            on:click={() => gotoSlide('designAndArt')}
        />
        <Card
            title="Game Creation" wip disabled
            abstract="My main hobby. Trying a bit of everything but mostly Pixel art, gameplay programming and game design. Many game jams. Godot Engine is great."
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
    </Cards>
</Slide>
