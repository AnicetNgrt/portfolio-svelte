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
        {#if slides.length > 1}
            <Button size="sm" leftEmoji="⏮" label="" round on:click={() => shown = mod(shown-1, slides.length)}/>
            <Separator size="pi"/>
            <Button size="sm" rightEmoji="⏭" label="" round on:click={() => shown = mod(shown+1, slides.length)}/>
            <Separator size="lg"/>
        {/if}
        <Button size="sm" leftEmoji="🔎" label="enlarge" round on:click={() => modal = true}/>
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
        <div class="protip">
            <p>💡 Look at this with landscape screen orientation to enlarge the picture even more! 📱🔄</p>
        </div>
        <Separator size="mi"/>
        <div class="row controls center-y show">
            {#if slides.length > 1}
                <Button size="sm" leftEmoji="⏮" label="previous" round on:click={() => shown = mod(shown-1, slides.length)}/>
                <Separator size="pi"/>
                <Button size="sm" rightEmoji="⏭" label="next" round on:click={() => shown = mod(shown+1, slides.length)}/>
                <Separator size="lg"/>
            {/if}
            <Button size="sm" leftEmoji="❌" label="close" round on:click={() => modal = false}/>
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
    .protip {
        display: none;
    }

    @media (max-width: 700px) and (max-aspect-ratio: 1/1) {
        .protip {
            display: block;
            padding: var(--sm) var(--md);
            background-color: var(--cbg);
            width: 100%;
        }
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(122, 123, 133, 0.938);
        width: 100vw;
        height: 100vh;
        z-index: 10;
    }

    .caroussel {
        position: relative;
        height: calc(calc(30vw + 10vh) + 1em);
        width: max-content;
        max-width: 100%;
        padding-top: 0.6em;
        border-radius: var(--brad);
        border: solid var(--bord) var(--ccontrast);
        box-shadow: inset var(--shad-offx) var(--shad-offy) var(--ssmth) var(--ccontrast-shadow);
        overflow: hidden;
    }

    .pictures {
        height: calc(30vw + 10vh);
        width: 60ch;
        max-width: 100%;
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
        border: none;
        box-shadow: none;
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
        top: calc(calc(30vw + 10vh) - 1.4em);
        background-color: var(--cbg);
        border-radius: 1em;
        width: max-content;
        justify-content: center;
        margin-bottom: 0.3em;
        padding: 0.3em 0.35em;
        padding-bottom: 0.2em;
        border-bottom: 0;
        transition: opacity 0.2s;
        border: solid var(--bord) var(--ccontrast);
        box-shadow: var(--shad-offx) var(--shad-offy) var(--ssmth) var(--ccontrast-shadow);
    }
</style>