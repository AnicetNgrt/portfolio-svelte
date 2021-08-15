<script lang="ts">
    import Separator from '$components/atoms/Separator.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import Caroussel from '../organisms/Caroussel.svelte';
    import SlideHeader from '../molecules/SlideHeader.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};
</script>

<Slide url="art-gallery" {gotoSlide}>
    <SlideHeader 
        onBackClicked={() => gotoSlide('map')}
        title="👨‍🎨 Art gallery"
    />
    <div class="col center-x">
        <p>Although I reason and work like an engineer, I still cherish Art, and even do some myself. Open your eyes and judge for yourself:</p>
        <Separator size="xxl"/>
        <h5>2019 - Ink on paper - Card game illustrations</h5>
        <Caroussel slides={[
            { pictures: [{ src: "/art/zugzwang_cards_1.jpg" }] },
            { pictures: [{ src: "/art/zugzwang_cards_2.jpg" }] },
            { pictures: [{ src: "/art/zugzwang_cards_1.jpg" }, { src: "/art/zugzwang_cards_2.jpg" }] },
        ]}/>
        <Separator size="xxl"/>
        <h5>2020 - Pixel Art - Earth's Secrets game artworks</h5>
        <Caroussel slides={[
            { pictures: [{ src: "/art/earth_secret_1.png" }] },
            { pictures: [{ src: "/art/earth_secret_3.png" }] },
            { pictures: [{ src: "/art/earth_secret_2.png" }] },
        ]}
        link={{ label: "Play Earth Secrets", href: "https://anicetngrt.itch.io/earths-secrets" }}/>
        <Separator size="xxl"/>
        <h5>2019 - Ink on paper - "Running out of eyes"</h5>
        <Caroussel slides={[
            { pictures: [{ src: "/art/ink_dipt_1.jpg" }] },
            { pictures: [{ src: "/art/ink_dipt_2.jpg" }]  },
            { pictures: [{ src: "/art/ink_dipt_3.jpg" }] },
            { pictures: [{ src: "/art/ink_dipt_4.jpg" }] },
            { pictures: [{ src: "/art/ink_dipt_5.jpg" }] },
            { pictures: [
                { src: "/art/ink_dipt_1.jpg" },
                { src: "/art/ink_dipt_2.jpg" },
                { src: "/art/ink_dipt_3.jpg" },
                { src: "/art/ink_dipt_4.jpg" },
                { src: "/art/ink_dipt_5.jpg" }
            ] }
        ]}/>
        <Separator size="xxl"/>
        <h5>2019 - Paint on paper - "Le gratte-ciel"</h5>
        <Caroussel slides={[
            { pictures: [{ src: "/art/skyscrapper_1.jpg" }] },
        ]}/>
        <Separator size="xxl"/>    
        <h5>2021 - Pixel Art - Inroads game artworks</h5>
        <Caroussel slides={[
            { pictures: [{ src: "/art/inroads_jam_1.png" }] },
        ]}
        link={{ label: "Play Inroads", href: "https://nimblebeastscollective.itch.io/inroads" }}/>
        <Separator size="xxl"/>
        <h5>2019 - Pen on paper - "Chambre en désordre"</h5>
        <Caroussel slides={[
            { pictures: [{ src: "/art/earthquake_1.jpg" }] },
        ]}/>
        <Separator size="xxl"/>
        <h5>2020 - Pixel Art - Character designs</h5>
        <Caroussel slides={[
            { pictures: [{ src: "/art/characters_1.png" }] },
        ]}/>
        <Separator size="xxl"/>
        <h5>2020 - Pixel Art - Zugzwang game artworks</h5>
        <Caroussel slides={[
            { pictures: [{ src: "/art/zugzwang_pixel_1.png" }, { src: "/art/zugzwang_pixel_2.png" }] },
        ]}/>
        <Separator size="mi"/>
    </div>
</Slide>

<style>
    h5 {
        text-align: center;
        font-weight: 100;
    }
</style>