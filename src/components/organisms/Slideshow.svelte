<script lang="ts">
    import MainSlide from "$components/slides/MainSlide.svelte";
    import ProfessionalXpSlide from "$components/slides/ProfessionalXpSlide.svelte";
    import MapSlide from "$components/slides/MapSlide.svelte";
    import ThemeEditor from "$components/slides/ThemeEditor.svelte";
    import { initNavigation, updateNavigation } from "../../logic/navigation";
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicInOut } from 'svelte/easing';
    import Education from "../slides/Education.svelte";
    import WebDevShowreel from "../slides/WebDevShowreel.svelte";
    import WebDesignShowreel from "../slides/WebDesignShowreel.svelte";
    import ArtGallery from "../slides/ArtGallery.svelte";
    import { goto } from "$app/navigation";
    
    export let slideOverride: string | null = null;

    let availableSlides: {[key: string]: any} = {
        main: { url: "/", slide: MainSlide, props: {} },
        professionalXp: { url: "/professional-xp", slide: ProfessionalXpSlide, props: {} },
        education: { url: "/education", slide: Education, props: {} },
        map: { url: "/map", slide: MapSlide, props: {} },
        themeEditor: { url: "/theme-editor", slide: ThemeEditor, props: {} },
        webdevShowreel: { url: "/fullstackdev-portfolio", slide: WebDevShowreel, props: {} },
        webdesignShowreel: { url: "/webdesign-portfolio", slide: WebDesignShowreel, props: {} },
        artGallery: { url: "/art-gallery", slide: ArtGallery, props: {} }
    };

    let shownSlides: any[] = [];
    let prevSlide: any;
    let animatedY = tweened(0, {
        duration: 500,
        easing: cubicInOut
    });
    let animating = false;
    let y = 0;

    onMount(() => {
        const savedNav = slideOverride ? { slideName: slideOverride, prevSlide: 'map' } : initNavigation();
        shownSlides = [ nameToSlide(savedNav.slideName) ];
        prevSlide = savedNav.prevSlide;
    });

    function nameToSlide(name: string) {
        return { ...availableSlides[name], name };
    }

    function gotoSlide(slideName: string) {
        const slide = nameToSlide(slideName);

        shownSlides = [...shownSlides, slide];
        setTimeout(() => {
            y = 0;
            animatedY.set(1);
            animating = true;
            setTimeout(() => {
                animating = false;
                animatedY.set(0);
                prevSlide = shownSlides[0].name;
                updateNavigation({ prevSlide, slideName });
                shownSlides = [slide];
                goto(slide.url);
            }, 500);
        }, 1);
    }
</script>

<div class="slides" style="--top-mult: {y + (animating ? $animatedY : 0)}">
    {#each shownSlides.reverse() as { slide, props }}
        <div class="slide">
            <svelte:component this={slide} {gotoSlide} {prevSlide} {...props}></svelte:component>
        </div>
    {/each}
</div>

<style>
    .slide {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translateY(0%);
    }

    .slide:last-child {
        transform: translateY(calc(var(--top-mult) * 100%));
    }

    .slides {
        position: relative;
    }
</style>