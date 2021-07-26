<script lang="ts">
    import { mod } from "../../logic/math";
import Box from "../atoms/Box.svelte";

    import Button from "../atoms/Button.svelte";
    import Separator from "../atoms/Separator.svelte";

    export let slides:{ pictures:{ src: string, widthPerc?: number }[], label?: string }[] = [];
    export let link: { label: string, href: string } = null;
    
    let shown = 0;
    let modal = false;
</script>

<div class="row center-x caroussel">
    <div 
        class="row controls center-y"
    >
        {#if slides.length > 1}
            <Button size="sm" leftEmoji=" " rightEmoji=" " label="⏮" on:click={() => shown = mod(shown-1, slides.length)}/>
            <Separator size="pi"/>
            <Button size="sm" rightEmoji=" " leftEmoji=" " label="⏭" on:click={() => shown = mod(shown+1, slides.length)}/>
            <Separator size="lg"/>
        {/if}
        <Button size="sm" leftEmoji="🔎" label="enlarge" on:click={() => modal = true}/>
        {#if link}
            <Separator size="lg"/>
            <Button round size="sm" label={link.label} href={link.href}/>
        {/if}
    </div>
    {#each slides as { pictures, label }, i}
        {#if label && label.length > 0 && shown === i}
            <div class="label">
                <p>{label}</p>
            </div>
        {/if}
        <div
            class="row center-x pictures" class:modal-open={modal} class:shown={shown === i}>
            {#each pictures as { src, widthPerc }, j}
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
        <div class="row center-x pictures shown">
            {#each slides[shown].pictures as { src, widthPerc }, j}
                <img class="illustration" {src} alt={slides[shown].label} style="width: {widthPerc ?? (100/slides[shown].pictures.length)}%">
                {#if j < slides[shown].pictures.length-1}
                    <Separator size="pi"/>
                {/if}
            {/each}
        </div>
        <div class="row controls center-y show">
            {#if slides.length > 1}
                <Button size="sm" rightEmoji=" " leftEmoji=" " label="⏮" on:click={() => shown = mod(shown-1, slides.length)}/>
                <Separator size="pi"/>
                <Button size="sm" rightEmoji=" " leftEmoji=" " label="⏭" on:click={() => shown = mod(shown+1, slides.length)}/>
                <Separator size="md"/>
            {/if}
            <Button size="sm" leftEmoji="❌" label="close" on:click={() => modal = false}/>
            {#if link}
                <Separator size="md"/>
                <Button round size="sm" label={link.label} href={link.href}/>
            {/if}
        </div>
        {#if slides[shown].label && slides[shown].label.length > 0}
            <div class="label">
                <p>{slides[shown].label}</p>
            </div>
        {/if}
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
        background-color: var(--cbg);
        width: 100vw;
        height: 100vh;
        z-index: 10;
        overflow: auto;
    }

    .caroussel {
        position: relative;
        height: calc(calc(30vw + 10vh) + 3em);
        width: max-content;
        max-width: 100%;
        padding-top: 0.6em;
        border-radius: var(--brad);
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
        height: min-content;
    }

    .modal .controls {
        width: 80vw;
        flex-wrap: wrap;
        position: unset;
        background: transparent;
        border: none;
        box-shadow: none;
    }

    .modal .label {
        position: unset;
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
        top: calc(calc(30vw + 10vh) + 0.5em);
        border-radius: var(--brad);
        width: max-content;
        justify-content: center;
        margin-bottom: 0.3em;
        padding: 0.3em 0.35em;
        padding-bottom: 0.2em;
        border-bottom: 0;
        transition: opacity 0.2s;
    }

    .label {
        position: absolute;
        top: calc(calc(30vw + 10vh) - 0.85em);
        border-radius: var(--brad);
        background-color: var(--caccent-faint);
        padding: 0.1em 0.2em;
    }

    .label p {
        font-size: var(--mi);
        color: var(--ccontrast);
    }
</style>