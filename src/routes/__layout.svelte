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