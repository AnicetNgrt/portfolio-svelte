<script lang="ts">
    import '$styles/themes.css';
    import '$styles/global.css';
    import '$styles/flex-helpers.css';
</script>

<main class="main-theme light-theme theme-compute">
    <slot/>
</main>

<style>
    main {
        height: 100vh;
        overflow-x: hidden;
    }
</style>