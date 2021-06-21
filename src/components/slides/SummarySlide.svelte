<script lang="ts">
    import Button from '$components/atoms/Button.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import Separator from '$components/atoms/Separator.svelte';
    import Box from '$components/atoms/Box.svelte';
import Card from '../organisms/Card.svelte';

    export const onNext = () => {};
    export let onPrev: () => void;
</script>

<Slide>
    <Button size="mi" on:click={onPrev} leftEmoji="<--" label="Back" round/>
    <h1>La carte 🗺</h1>
    <Separator size="md"/>
    <div class="row center-x wrap cards">
        <Card 
            title="👨‍💻 Programming & IT"
            abstract="Student with professional experience. Proficient with both web backend and frontend. Most proficient with React, Svelte, Elixir, JS, TS, Java, Docker & Python."
        />
        <Card 
            title="📐 Graphic design"
            abstract="Most proficient with minimalist, brutalist and flat design. Professional experience with web design and UI/UX. Using mostly simple techniques and tools."
        />
        <Card 
            title="🎮 Indie Game Creation"
            abstract="Doing a bit of everything but mostly Pixel art, gameplay programming and game design. Many game jams. Godot Engine is great."
        />
        <div class="col">
            <div class="row">
                <Card 
                    small
                    title="📚 My Blog"
                    abstract="Sharing my humble knowledge and thoughts."
                />
                <Card 
                    small
                    title="🎺 Jukebox"
                    abstract="Discover underappreciated music that I recommend."
                />
            </div>
            <div class="row">
                <Card 
                    small
                    title="🧪 Themer"
                    abstract="Play around with this site's cool theme system™."
                />
                <Card 
                    small
                    title="🖼 Gallery"
                    abstract="Browse all pictures found on this site."
                />
            </div>
        </div>
    </div>
</Slide>

<style>
    .cards {
        width: 64.7ch;
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
</style>
