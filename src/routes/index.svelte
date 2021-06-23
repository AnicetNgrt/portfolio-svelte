<script lang="ts">
    import MainSlide from "$components/slides/MainSlide.svelte";
    import ProfessionalXpSlide from "$components/slides/ProfessionalXpSlide.svelte";
    import ProgrammingSlide from "$components/slides/ProgrammingSlide.svelte";
    import MapSlide from "$components/slides/MapSlide.svelte";
    import ThemeEditor from "$components/slides/ThemeEditor.svelte";
    import { initNavigation, updateNavigation } from "$lib/navigation";
    import { onMount } from "svelte";
    
    let availableSlides = {
        main: { slide: MainSlide, props: {} },
        professionalXp: { slide: ProfessionalXpSlide, props: {} },
        programming: { slide: ProgrammingSlide, props: {} },
        map: { slide: MapSlide, props: {} },
        themeEditor: { slide: ThemeEditor, props: {} }
    }

    let switching = false;

    let slidesContainer: svelte.JSX.Element;
    let shownSlides = [];
    let prevSlide = null;

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

        switching = true;
        shownSlides = [...shownSlides, slide];
        setTimeout(() => {
            slidesContainer.children[1].scrollIntoView({
                behavior: 'smooth'
            });
            setTimeout(() => {
                prevSlide = shownSlides[0].name;
                updateNavigation({ prevSlide, slideName });
                shownSlides = [slide];

                switching = false;
            }, 500);
        }, 200);
    }
</script>

<div bind:this={slidesContainer}>
    {#each shownSlides as { slide, props }}
        <div>
            <svelte:component this={slide} {gotoSlide} {prevSlide} {...props}></svelte:component>
        </div>
    {/each}
</div>