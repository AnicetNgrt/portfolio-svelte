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
    }

    .margin {
        margin: var(--marg);
    }
</style>