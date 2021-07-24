<script lang="ts">
    import '$styles/themes.css';
    import '$styles/global.css';
    import '$styles/flex-helpers.css';

    import { onMount } from 'svelte';

    let unmounted = true;
    onMount(() => {
        unmounted = false;
    });
</script>

<svelte:head>
    <meta name="application-name" content="Anicet Nougaret's portfolio."/>
    <meta
        name="keywords"
        content="ELIXIR, SVELTE, DEV, FRANCE, PARIS, LYON, INSA, IUT, INFORMATIQUE, JAVASCRIPT, TYPESCRIPT, REACT, NODE, EUROPE, STUDENT"
    />
    <title>Anicet Nougaret</title>
    <meta name="description" content="Anicet Nougaret's portfolio. CS Student, game creator, pixelartist."/>
    <meta property="og:image" content="/images/thumbnail.jpg"/>
</svelte:head>

<main class="main-theme light-theme theme-compute" class:unmounted>
    <slot/>
</main>

<style>
    main {
        height: 100vh;
        overflow-x: hidden;
    }

    .unmounted {
        opacity: 0;
    }
</style>