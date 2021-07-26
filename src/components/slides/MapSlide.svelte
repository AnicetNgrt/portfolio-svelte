<script lang="ts">
    import Slide from '$components/molecules/Slide.svelte';
    import Card from '$components/organisms/Card.svelte';
    import SlideHeader from '../molecules/SlideHeader.svelte';
    import Cards from '../organisms/Cards.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};
</script>

<Slide url="map">
    <SlideHeader 
        onBackClicked={() => gotoSlide('main')}
        title="Discover my world 🌍"
    />
    <Cards>
        <Card
            title="👔 Professional Experience"
            on:click={() => gotoSlide('professionalXp')}
        />
        <Card
            title="🎓 Education"
            on:click={() => gotoSlide('education')}
        />
        <Card
            title="💻 Fullstack dev portfolio"
            abstract='From frontend with Svelte and React, backend with Node.js, Java and Elixir, to devOps with Docker. I love to solve difficult problems, share my knowledge and build beautiful UI.'
            on:click={() => gotoSlide('webdevShowreel')}
        />
        <Card
            title="🎴 Web design portfolio"
            abstract="As a self-thaught web designer I'm most proficient with minimalist, brutalist and flat design. Professional experience with web design and UI/UX. Using mostly simple techniques and tools."
            on:click={() => gotoSlide('webdesignShowreel')}
        />
        <Card
            title="👨‍🎨 Art gallery"
            abstract="There you will discover my artworks. You'll find ink on paper works, Pixel Art works, drawings. My goal isn't to work in the art industry thought. I'm mostly keen to work and collaborate on hobby projects."
            on:click={() => gotoSlide('artGallery')}
        />
        <Card
            title="🎲 Game creation showreel" wip disabled
            abstract="Creating small games is my main hobby. I'm doing a bit of everything but mostly Pixel art, gameplay programming and game design. Many game jams. Godot Engine is great."
        />
        <div class="row">
            <Card
                small
                title="Theme Editor"
                on:click={() => gotoSlide('themeEditor')}
            />
            <Card
                small
                title="Source code"
                href="https://github.com/AnicetNgrt/portfolio-svelte"
            />
        </div>
    </Cards>
</Slide>
