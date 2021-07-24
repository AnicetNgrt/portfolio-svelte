<script lang="ts">
    import MainSlide from "$components/slides/MainSlide.svelte";
    import ProfessionalXpSlide from "$components/slides/ProfessionalXpSlide.svelte";
    import ProgrammingSlide from "$components/slides/ProgrammingSlide.svelte";
    import MapSlide from "$components/slides/MapSlide.svelte";
    import ThemeEditor from "$components/slides/ThemeEditor.svelte";
    import { initNavigation, updateNavigation } from "../../logic/navigation";
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicInOut } from 'svelte/easing';
    import Education from "../slides/Education.svelte";
    import WebDevShowreel from "../slides/WebDevShowreel.svelte";
    import DesignAndArt from "../slides/DesignAndArt.svelte";
    
    export let slideOverride: string = null;

    let availableSlides = {
        main: { slide: MainSlide, props: {} },
        professionalXp: { slide: ProfessionalXpSlide, props: {} },
        education: { slide: Education, props: {} },
        programming: { slide: ProgrammingSlide, props: {} },
        map: { slide: MapSlide, props: {} },
        themeEditor: { slide: ThemeEditor, props: {} },
        webdevShowreel: { slide: WebDevShowreel, props: {} },
        designAndArt: { slide: DesignAndArt, props: {} },
    };

    let slidesContainer: svelte.JSX.Element;
    let shownSlides = [];
    let prevSlide = null;
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

    function nameToSlide(name) {
        return { ...availableSlides[name], name };
    }

    function gotoSlide(slideName) {
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
            }, 500);
        }, 1);
    }
</script>

<div bind:this={slidesContainer} class="slides" style="--margin-top-mult: {y + (animating ? $animatedY : 0)}">
    {#each shownSlides as { slide, props }}
        <div>
            <svelte:component this={slide} {gotoSlide} {prevSlide} {...props}></svelte:component>
        </div>
    {/each}
</div>

<style>
    .slides {
        margin-top: calc(var(--margin-top-mult) * -100vh);
    }
</style>