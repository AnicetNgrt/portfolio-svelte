<script lang="ts">
    import '$styles/themes.css';
    import '$styles/global.css';
    import '$styles/flex-helpers.css';

    import { onMount } from 'svelte';

    let unmounted = true;
    onMount(() => {
        unmounted = false;
    });

    const description = "Anicet Nougaret's portfolio. CS Student, game creator, pixelartist. Come and discover my programming projects and artistic works.";
    const title = "Anicet Nougaret's portfolio.";
    const application_name = "Anicet Nougaret's portfolio.";
    const keywords = "ELIXIR, SVELTE, DEV, FRANCE, PARIS, LYON, INSA, IUT, INFORMATIQUE, JAVASCRIPT, TYPESCRIPT, REACT, NODE, EUROPE, STUDENT"
    const thumbnail = "/images/thumbnail.jpg";
</script>

<svelte:head>
    <meta name="application-name" content={application_name}/>
    <meta name="keywords" content={keywords}/>
    <title>{title}</title>
    <meta name="og:title" content={title}/>
    <meta name="description" content={description}/>
    <meta name="og:description" content={description}/>
    <meta property="og:image" content={thumbnail}/>
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