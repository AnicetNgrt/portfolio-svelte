<script lang="ts">
    import MainSlide from "$components/slides/MainSlide.svelte";
    import SummarySlide from "$components/slides/SummarySlide.svelte";
    
    let switching = false;

    const defaultSlidesProps = {
        onNext: nextSlide,
        onPrev: previousSlide
    }

    const slides = [
        { slide: MainSlide, props: {} },
        { slide: SummarySlide, props: {} },
    ]

    for(let i = 0; i < slides.length; i++) {
        slides[i].props = { ...defaultSlidesProps, ...slides[i].props }
    }

    let slidesContainer: svelte.JSX.Element;
    let slideIndex = 0;
    let shownSlides = [slides[slideIndex]];

    function hasNextSlide() {
        return slideIndex + 1 < slides.length;
    }

    function hasPreviousSlide() {
        return slideIndex - 1 >= 0;
    }

    function nextSlide() {
        if (!hasNextSlide || switching) return;
        switching = true;
        slideIndex += 1;
        shownSlides = [...shownSlides, slides[slideIndex]];
        setTimeout(() => {
            moveToSlide(shownSlides.length - 1);
        }, 200);
    }

    function previousSlide() {
        if (!hasPreviousSlide || switching) return;
        switching = true;
        slideIndex -= 1;
        shownSlides = [...shownSlides, slides[slideIndex]];
        setTimeout(() => {
            moveToSlide(shownSlides.length - 1);
        }, 200);
    }

    function moveToSlide(i) {
        slidesContainer.children[i].scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            shownSlides = [slides[slideIndex]];
            switching = false;
        }, 500);
    }
</script>

<div bind:this={slidesContainer}>
    {#each shownSlides as { slide, props }}
        <div>
            <svelte:component this={slide} {...props}></svelte:component>
        </div>
    {/each}
</div>