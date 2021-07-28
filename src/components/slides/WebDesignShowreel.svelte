<script lang="ts">
    import Separator from '$components/atoms/Separator.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import Caroussel from '../organisms/Caroussel.svelte';
    import SlideHeader from '../molecules/SlideHeader.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};
</script>

<Slide url="webdesign-portfolio" themeOverride="minimalist" {gotoSlide}>
    <SlideHeader 
        onBackClicked={() => gotoSlide('map')}
        title="🎴 Web design portfolio"
    />
    <div class="col center-x">
        <p>I always try to stay simple and realistic with my plans. I'm more of a developer than a designer. Therefore, when I design something, I always make sure it can be made for real.</p>
        <Separator size="mi"/>
        <Caroussel slides={[
            { pictures: [{ src: "/3wsherlocks/image.png" }], label: "Main page for 3W Sherlocks, an awarded hackathon project (1000€ cashprize)." },
            { pictures: [{ src: "/3wsherlocks/screen_desktop_2.png" }], label: "Had a complex website idea which is not always easy to explain to the user."  },
            { pictures: [{ src: "/3wsherlocks/screen_desktop_3.png" }], label: "Therefore I tried to make a simple UI in order to lower friction." },
            { pictures: [{ src: "/3wsherlocks/screen_desktop_7.png" }] },
            { pictures: [
                { src: "/3wsherlocks/screen_mobile_3.png" },
                { src: "/3wsherlocks/screen_mobile_12.png" },
                { src: "/3wsherlocks/screen_mobile_6.png" }
            ], label: "Had to design and implement responsive designs for potential phone users." }
        ]}
        link={{ label: "Check out 3W Sherlocks", href: "https://bourse2021-coddity.anicetnougaret.fr" }}/>
        <Separator size="mi"/>
        <p>My thought process when designing a website is often the same: First, I find a color palette that fits the mood I want to achieve. Second, I figure out a hierarchy of informations and links the user might want to have access to. Third, I use the hierarchy to build shapes, place them in the most ideal way, and I use the colors to more distinctively differenciate parts of the UI. Really, it's like painting or drawing. Mood -> composition -> construction.</p>
        <Separator size="mi"/>
        <Caroussel slides={[
            { pictures: [{ src: "/homesynck/homesynck_desktop_1.PNG" }], label: "Presentation page for an open-source project." },
            { pictures: [{ src: "/homesynck/homesynck_mockup.PNG" }], label: "Initial mockup. As you can see it got simplified during the implementation." },
            { pictures: [{ src: "/homesynck/homesynck_logo.PNG" }], label: "Also designed the logo" },
        ]}
        link={{ label: "Check out Homesynck", href: "https://homesynck.anicetnougaret.fr" }}/>
        <Separator size="mi"/>
        <p>I usually work with mockups. But when it does not feel like a waste of time, I prefer to design using the implementation tool from the beginning. </p>
        <Separator size="mi"/>
        <Caroussel slides={[
            { pictures: [{ src: "/blogc/blogc_desktop_1.PNG" }], label: "Coddity's blog was fully designed by me." },
            { pictures: [{ src: "/blogc/blogc_desktop_2.PNG" }], label: "It was a fun design challenge since I had to build upon Coddity's branding to make something fun." },
            { pictures: [{ src: "/blogc/blogc_desktop_3.PNG" }], label: "Design also included responsive UI and dark theme." },
            { pictures: [
                { src: "/blogc/blogc_mobile_2.PNG" },
                { src: "/blogc/blogc_mobile_3.PNG" }
            ] },
            { pictures: [
                { src: "/blogc/blogc_mobile_1.PNG" },
                { src: "/blogc/blogc_mobile_4.PNG" },
            ] }
        ]}
        link={{ label: "Check out Blog Coddity", href: "https://blog.coddity.com" }}/>
        <Separator size="mi"/>
        <p>Designing is always a nice necessary and productive break from programming for me. Working on code for so many hours can get boring even for the most passionate programmers. Having such pleasing and relaxing side tasks such as design trully helps staying in the flow.</p>
        <Separator size="mi"/>
        <Caroussel slides={[
            { pictures: [{ src: "/musicial/1.png" }], label: "Branding for a music browsing website project that I still haven't got a chance to implement." },
            { pictures: [{ src: "/musicial/2.png" }], label: "Tried several themes as usual. Always a good method to figure out the rest of the design." },
            { pictures: [{ src: "/musicial/3.png" }] },
            { pictures: [{ src: "/musicial/4.png" }] },
            { pictures: [{ src: "/musicial/5.png" }] },
            { pictures: [{ src: "/musicial/6.png" }] },
            { pictures: [{ src: "/musicial/7.png" }] },
            { pictures: [{ src: "/musicial/8.png" }] },
            { pictures: [{ src: "/musicial/9.png" }] },
            { pictures: [{ src: "/musicial/10.png" }] },
            { pictures: [{ src: "/musicial/11.png" }] },
            { pictures: [{ src: "/musicial/12.png" }] }
        ]}/>
        <Separator size="mi"/>
        <p>I believe tools don't really matter, just find something that's expressive enough for your needs and master it. I'm using canva.com for everything and although it's fairly limiting, limitations are my jam. Limitations in art and design always help me find more originality even though it may seem paradoxal.</p>
        <Separator size="mi"/>
        <Caroussel slides={[
            { pictures: [
                { src: "/web_tabletop/1.png" },
                { src: "/web_tabletop/2.png" }
            ], label: "Logos for a cool website project." },
            { pictures: [
                { src: "/web_tabletop/3.png" },
                { src: "/web_tabletop/5.png" }
            ], label: "It's an online tabletop simulator. So I wanted it feel boardgame-ish and technical at the same time." },
            { pictures: [{ src: "/web_tabletop/mock1.png" }], label: "Also made a few mockups." },
            { pictures: [{ src: "/web_tabletop/mock2.png" }] },
            { pictures: [{ src: "/web_tabletop/mock3.png" }], label: "Don't be afraid, for now it's very early and rough around the edges." },
            { pictures: [{ src: "/web_tabletop/mock4.png" }] },
        ]}/>
        <Separator size="mi"/>
        <p>My designs don't always get into real websites. Artists and designers have sketchbooks and many unfinished pieces, so do I. But this kind of work is always helpful. It's a very powerful training, plus one day you may get to build upon your sketches.</p>
        <Separator size="mi"/>
        <Caroussel slides={[
            { pictures: [{ src: "/parser_m/7.png" }], label: "Design for a never implemented project. Still happy with it." },
            { pictures: [{ src: "/parser_m/8.png" }], label: "Yeah, themes. You start to know me." },
            { pictures: [{ src: "/parser_m/9.png" }] },
            { pictures: [{ src: "/parser_m/10.png" }] },
            { pictures: [{ src: "/parser_m/3.png" }] },
            { pictures: [{ src: "/parser_m/4.png" }] },
            { pictures: [{ src: "/parser_m/5.png" }] },
            { pictures: [{ src: "/parser_m/6.png" }] },
            { pictures: [{ src: "/parser_m/1.png" }] },
            { pictures: [{ src: "/parser_m/2.png" }] },
        ]}/>
        <Separator size="mi"/>
    </div>
</Slide>

<style>
</style>