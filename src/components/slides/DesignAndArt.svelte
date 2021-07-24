<script lang="ts">
    import Slide from '$components/molecules/Slide.svelte';
    import SlideHeader from '../molecules/SlideHeader.svelte';
    import Portfolio from '../organisms/Portfolio.svelte';
    import Art from './portfolio/Art.svelte';
    import WebDesign from './portfolio/WebDesign.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};
</script>

<Slide url="design-and-art-portfolio" themeOverride="map-theme">
    <SlideHeader 
        onBackClicked={() => gotoSlide('map')}
        title="Design & Art"
    />
    <Portfolio type="topic" tabs={[
        {
            title: "Web design & branding",
            body: WebDesign
        },
        {
            title: "Graphic Art",
            body: Art
        }
    ]}/>
</Slide>
