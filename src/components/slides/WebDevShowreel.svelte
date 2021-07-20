<script lang="ts">
    import Box from '../atoms/Box.svelte';
    import Separator from '$components/atoms/Separator.svelte';
    import Button from '$components/atoms/Button.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import Caroussel from '../molecules/Caroussel.svelte';
    import SlideHeader from '../molecules/SlideHeader.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};
</script>

<Slide url="fullstackdev-portfolio" themeOverride="programming-slides-theme">
    <SlideHeader 
        onBackClicked={() => gotoSlide('programming')}
        title="🌌 Fullstack development portfolio"
    />
    <Separator size="md"/>
    <div class="col center-x">
        <div class="row center-x">
            <Button size="sm" leftEmoji="⋖" round label=""/>
            <Separator size="sm"/>
            <h3>3W Sherlocks</h3>
            <Separator size="sm"/>
            <Button size="sm" rightEmoji="⋗" round label=""/>
        </div>
        <Separator size="sm"/>
        <div class="preview">
            <img class="illustration" alt="truc" src="/3wsherlocks/image.png"/>
        </div>
    </div>
</Slide>

<style>
    .preview {
        height: 65vh;
        width: 100%;
    }

    .preview .illustration {
        max-height: 100%;
    }
</style>