<script lang="ts">
import { mod } from "$logic/math";

    import Button from "../atoms/Button.svelte";
    import Separator from "../atoms/Separator.svelte";

    export let slides:{ src: string, label?: string, widthPerc?: number }[][] = [];
    
    let shown = 0;
    let modal = false;
</script>

<div class="row controls center-y">
    <Button size="mi" leftEmoji="⋖" label="previous" on:click={() => shown = mod(shown-1, slides.length)}/>
    <Separator size="pi"/>
    <Button size="mi" rightEmoji="⋗" label="next" on:click={() => shown = mod(shown+1, slides.length)}/>
    <Separator size="lg"/>
    <Button size="mi" leftEmoji="🔎" label="click to enlarge" on:click={() => modal = true}/>
</div>

<div class="row center-y caroussel">
    {#each slides as pictures, i}
        <div class="row center-x pictures" class:modal-open={modal} class:shown={shown === i}>
            {#each pictures as { src, label, widthPerc }, j}
                <img on:click={() => modal = true} class="illustration" {src} alt={label} style="max-width: {widthPerc ?? (97/pictures.length)}%">
                {#if j < pictures.length-1}
                    <Separator size="pi"/>
                {/if}
            {/each}
        </div>
    {/each}
</div>

{#if modal}
    <div class="col center-x modal">
        <div class="row controls center-y">
            <Button size="mi" leftEmoji="⋖" label="previous" on:click={() => shown = mod(shown-1, slides.length)}/>
            <Separator size="pi"/>
            <Button size="mi" rightEmoji="⋗" label="next" on:click={() => shown = mod(shown+1, slides.length)}/>
            <Separator size="lg"/>
            <Button size="mi" leftEmoji="❌" label="click to close" on:click={() => modal = false}/>
        </div>
        <div class="row center-x pictures shown">
            {#each slides[shown] as { src, label, widthPerc }, j}
                <img class="illustration" {src} alt={label} style="max-width: {widthPerc ?? (100/slides[shown].length)}%">
                {#if j < slides[shown].length-1}
                    <Separator size="pi"/>
                {/if}
            {/each}
        </div>
    </div>
{/if}

<style>

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(122, 123, 133, 0.705);
        width: 100vw;
        height: 100vh;
        z-index: 10;
        padding: var(--sm);
    }

    .caroussel {
        width: calc(inherit - 5em);
        height: max-content;
        overflow: hidden;
    }

    .pictures {
        width: inherit;
        max-height: 70ch;
    }

    .pictures.modal-open {
        filter: blur(5px);
    }

    .pictures:not(.shown) {
        width: 0px;
        opacity: 0;
    }

    .modal .pictures {
        max-width: calc(100% - var(--sm));
        max-height: 85vh;
    }

    .modal .controls {
        width: 80vw;
        background-color: transparent;
    }

    img {
        align-self: flex-start;
        margin-bottom: 0.3em;
        max-height: 100%;
        max-width: 100%;
        cursor: pointer;
        object-fit: contain;
    }

    .modal .pictures img {
        cursor: default;
    }

    .controls {
        border-bottom-left-radius: var(--brad);
        border-bottom-right-radius: var(--brad);
        width: 100%;
        justify-content: center;
        margin-bottom: 0.3em;
    }
</style>