<div class="md">
    <slot/>
</div>

<style>
    :global(.md p) {
        margin: var(--mi) 0;
    }

    :global(.md h1, .md h2, .md h3, .md h4, .md h5) {
        margin-top: var(--md);
        margin-bottom: var(--mi);
    }

    :global(.md li) {
        margin: var(--mi) 0;
        margin-left: var(--mi);
    }
</style>