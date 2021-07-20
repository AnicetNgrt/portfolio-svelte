<script lang="ts">
    import { mod } from "../../logic/math";

    import Button from "../atoms/Button.svelte";
    import Separator from "../atoms/Separator.svelte";

    export let slides:{ src: string, label?: string, widthPerc?: number }[][] = [];
    
    let shown = 0;
    let modal = false;
</script>

<div class="row center-x caroussel">
    <div 
        class="row controls center-y"
    >
        <Button size="mi" leftEmoji="⋖" label="previous" on:click={() => shown = mod(shown-1, slides.length)}/>
        <Separator size="pi"/>
        <Button size="mi" rightEmoji="⋗" label="next" on:click={() => shown = mod(shown+1, slides.length)}/>
        <Separator size="lg"/>
        <Button size="mi" leftEmoji="🔎" label="click to enlarge" on:click={() => modal = true}/>
    </div>
    {#each slides as pictures, i}
        <div
            class="row center-x pictures" class:modal-open={modal} class:shown={shown === i}>
            {#each pictures as { src, label, widthPerc }, j}
                <img
                    on:click={() => modal = true}
                    class="illustration" {src}
                    alt={label}
                    style="max-width: {widthPerc ?? (97/pictures.length)}%"
                >
                {#if j < pictures.length-1}
                    <Separator size="pi"/>
                {/if}
            {/each}
        </div>
    {/each}
</div>

{#if modal}
    <div class="col center-x modal">
        <div class="row controls center-y show">
            <Button size="mi" leftEmoji="⋖" label="previous" on:click={() => shown = mod(shown-1, slides.length)}/>
            <Separator size="pi"/>
            <Button size="mi" rightEmoji="⋗" label="next" on:click={() => shown = mod(shown+1, slides.length)}/>
            <Separator size="lg"/>
            <Button size="mi" leftEmoji="❌" label="click to close" on:click={() => modal = false}/>
        </div>
        <div class="row center-x pictures shown">
            {#each slides[shown] as { src, label, widthPerc }, j}
                <img class="illustration" {src} alt={label} style="width: {widthPerc ?? (100/slides[shown].length)}%">
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
        background-color: rgba(122, 123, 133, 0.938);
        width: 100vw;
        height: 100vh;
        z-index: 10;
        padding: var(--sm) 0;
    }

    .caroussel {
        position: relative;
        height: max-content;
        overflow: hidden;
        height: calc(calc(30vw + 10vh) + 2.5em);
        padding-top: 0.4em;
        border-radius: var(--brad);
        border: dotted 2px var(--ccontrast);
    }

    .pictures {
        height: calc(30vw + 10vh);
        width: 60ch;
        max-width: 90vw;
    }

    .pictures.modal-open {
        filter: blur(5px);
    }

    .pictures:not(.shown) {
        width: 0px;
        opacity: 0;
    }

    .modal .pictures {
        min-width: 100vw;
    }

    .modal .controls {
        position: unset;
        width: 80vw;
        background: transparent;
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
        max-height: 80vh;
        border: none;
        border-radius: 0;
    }

    .controls {
        position: absolute;
        top: calc(calc(30vw + 10vh) + 0.64em);
        border-radius: var(--brad);
        width: max-content;
        justify-content: center;
        margin-bottom: 0.3em;
        padding: 0.2em 0.28em;
        border: dotted 2px var(--ccontrast);
        border-bottom: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        transition: opacity 0.2s;
    }
</style>