<script lang="ts">
    export let size: string;
    export let margin: boolean = false;
</script>

<div style="--size: var(--{size});" class:margin>
    <slot/>
</div>

<style>
    div {
        font-size: var(--size);
        max-width: 100%;
        max-height: 100%;
        width: max-content;
        height: max-content;
    }

    .margin {
        margin: var(--marg);
    }
</style>