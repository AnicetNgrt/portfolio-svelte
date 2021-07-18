<script lang="ts">
    import MainSlide from "$components/slides/MainSlide.svelte";
    import ProfessionalXpSlide from "$components/slides/ProfessionalXpSlide.svelte";
    import ProgrammingSlide from "$components/slides/ProgrammingSlide.svelte";
    import MapSlide from "$components/slides/MapSlide.svelte";
    import ThemeEditor from "$components/slides/ThemeEditor.svelte";
    import { initNavigation, updateNavigation } from "$lib/navigation";
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicInOut, cubicOut } from 'svelte/easing';
    
    let availableSlides = {
        main: { slide: MainSlide, props: {} },
        professionalXp: { slide: ProfessionalXpSlide, props: {} },
        programming: { slide: ProgrammingSlide, props: {} },
        map: { slide: MapSlide, props: {} },
        themeEditor: { slide: ThemeEditor, props: {} }
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
        const savedNav = initNavigation();
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