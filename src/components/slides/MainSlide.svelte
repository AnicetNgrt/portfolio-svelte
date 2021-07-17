<script lang="ts">
    import Separator from '$components/atoms/Separator.svelte';
    import Button from '$components/atoms/Button.svelte';
    import Box from '$components/atoms/Box.svelte';
    import Slide from '$components/molecules/Slide.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};

    const nextSlide = 'map';
</script>

<Slide> 
    <header class="row center-y center-x wrap">
        <img id="pp" alt="me" src="https://avatars.githubusercontent.com/u/31180613?v=4"/>
        <div class="col">
            <h1 class="myname">Anicet</h1>
            <h1 class="myname">Nougaret</h1>
        </div>
    </header>
    <Separator size="md"/>
    <h4>Welcome! I'm a Computer Science student from Paris, France.</h4>
    <Separator size="mi"/>
    <p>Currently doing fullstack web development, web design, multi-paradigm programming, indie game creation and graphic art. This website is to showcase all of that to you.</p>
    <Separator size="xl"/>

    <Button on:click={() => gotoSlide(nextSlide)} size="lg" label="Discover my world" rightEmoji="🌍" accent round/>
    <Separator size="sm"/>
    <p>∷ or ∷</p>
    <Separator size="sm"/>
    <p><i>Find me on the WWW</i></p>
    <Separator size="mi"/>
    <div class="links row wrap">
        <Box size="sm" margin>
            <Button size="md" label="Linkedin" leftEmoji="👔" round href="https://www.linkedin.com/in/anicet-nougaret-b7846b174/"/>
        </Box>
        <Box size="sm" margin>
            <Button size="md" label="Github" leftEmoji="🐙" round href="https://github.com/AnicetNgrt"/>
        </Box>
        <Box size="sm" margin>
            <Button size="md" label="Codersrank" leftEmoji="💻" round href="https://profile.codersrank.io/user/anicetngrt"/>
        </Box>
        <Box size="sm" margin>
            <Button size="md" label="Itch.io" leftEmoji="💾" round href="https://anicetngrt.itch.io/"/>
        </Box>
        <Box size="sm" margin>
            <Button size="md" label="Email" leftEmoji="📮" round href="mailto:anicet.nougaret@etu.u-paris.fr"/>
        </Box>
    </div>
</Slide>

<style>
    header {
        width: max-content;
        max-width: 100%;
    }

    .myname {
        font-size: var(--giga); 
    }

    .myname:not(:first-child) {
        margin-top: calc(var(--lg) / -1);
    }

    #pp {
        display: none;
        font-size: var(--md);
        width: 6em;
        height: 6em;
        object-fit: cover;
        border-radius: 6em;
        padding: 0.1em;
        background-color: var(--caccent-faint);
        margin: var(--marg);
        margin-left: 0;
        border: solid var(--bord) var(--ccontrast);
    }

    @media (max-width: 700px) {
        header div {
            align-items: center;
        }

        .links {
            justify-content: center;
        }
    }
</style>
