<script lang="ts">
    import '$styles/themes.css';
    import '$styles/global.css';
    import '$styles/flex-helpers.css';

    import { onMount } from 'svelte';

    let unmounted = true;
    onMount(() => {
        unmounted = false;
    });

    const description = "Anicet Nougaret's portfolio. Computer Science student, indie games creator, pixelartist. Come and discover my programming projects and artistic works.";
    const title = "Anicet Nougaret's programming & art portfolio.";
    const application_name = "Anicet Nougaret's portfolio.";
    const keywords = "ELIXIR, SVELTE, DEV, FRANCE, PARIS, LYON, INSA, IUT, INFORMATIQUE, JAVASCRIPT, TYPESCRIPT, REACT, NODE, EUROPE, STUDENT"
    const thumbnail = "anicetnougaret.fr/images/thumbnail.jpg";
</script>

<svelte:head>
    <meta name="application-name" content={application_name}/>
    <meta name="keywords" content={keywords}/>
    <title>{title}</title>
    <meta name="description" content={description}/>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@AniC_dev" />
    <meta name="twitter:creator" content="@AniC_dev" />
    <meta property="og:url" content="https://anicetnougaret.fr" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="http://{thumbnail}" />
    <meta property="og:image:secure_url" content="https://{thumbnail}" /> 
    <meta property="og:image:type" content="image/jpeg" /> 
    <meta property="og:image:width" content="710" /> 
    <meta property="og:image:height" content="527" />
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