<script lang="ts">
    import Box from '../atoms/Box.svelte';
    import Button from '$components/atoms/Button.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import Separator from '$components/atoms/Separator.svelte';

    export let gotoSlide: (slide) => void;
    export let prevSlide;
</script>

<Slide url="professional-xp" themeOverride="programming-slides-theme">
    <Box size="sm" margin>
        <Button 
            size="mi" on:click={() => gotoSlide(prevSlide)} 
            leftEmoji="←" 
            label="Previous"
        />
        <Separator size="md"/>
        <h2>Professional experience</h2>
    </Box>
    <Separator size="md"/>
</Slide>

<style>
</style>