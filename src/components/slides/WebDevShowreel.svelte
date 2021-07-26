<script lang="ts">
    import Separator from '$components/atoms/Separator.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import SlideHeader from '../molecules/SlideHeader.svelte';
    import Portfolio from '../organisms/Portfolio.svelte';
    import BlogCoddity from './portfolio/BlogCoddity.svelte';
    import Homesynck from './portfolio/Homesynck.svelte';
    import Sherlocks from './portfolio/Sherlocks.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};
</script>

<Slide url="fullstackdev-portfolio">
    <SlideHeader 
        onBackClicked={() => gotoSlide('map')}
        title="💻 Fullstack dev portfolio"
    />
    <Portfolio tabs={[
        {
            title: "3W Sherlocks",
            subtitle: '🥇 Hackathon winner (1000€ cashprize)',
            info: '02/20 ~> 04/20 :: solo :: [Postgres, Docker, Elixir, Phoenix, Tailwind]',
            body: Sherlocks
        },
        {
            title: "Coddity Blog",
            subtitle: "📮 Jamstack in all its glory",
            info: '05/20 (2 weeks) :: team of 2 :: [SvelteKit, Typescript]',
            body: BlogCoddity
        },
        {
            title: "Homesynck",
            subtitle: '🎓 2 years CS degree final project',
            info: '01/20 ~> 04/20 :: team of 7 :: [Docker, Postgres, Elixir, Phoenix, JS, Java]',
            body: Homesynck
        }
    ]}/>
</Slide>

<style>
</style>