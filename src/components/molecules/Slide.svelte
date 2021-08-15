<script lang="ts">
    import { initTheme, theme, updateTheme } from '../../logic/theme';

    import { onMount } from 'svelte';
    import Button from '../atoms/Button.svelte';
    import Separator from '../atoms/Separator.svelte';
    import { menu } from '../../logic/menu';

    export let gotoSlide: (slide) => void;
    export let themeOverride: string = 'theme';
    export let url:string = '/';

    let loaded = false;

    onMount(() => {
        initTheme();
        loaded = true;
        window.history.pushState({}, '', url);
    });
</script>

{#if loaded}
<div class="{themeOverride} {themeOverride}-{$theme} theme-compute col" id="root">
    <div id="theme-switch" class="row center-y">
        {#if $theme === 'dark'}
            <Button size="sm" rightEmoji="🌞" round accent on:click={() => updateTheme('light')}/>
        {:else}
            <Button size="sm" rightEmoji="🌑" round accent on:click={() => updateTheme('dark')}/>
        {/if}
        <Separator size="mi"/>
        {#if $menu.open}
            <Button size="sm" label="Contact" leftEmoji="📮" href="mailto:anicet.nougaret@etu.u-paris.fr"/>
            <Separator size="mi"/>
            <Button size="sm" label="Home" leftEmoji="🏠" on:click={() => gotoSlide('main')}/>
            <Separator size="mi"/>
            <Button size="sm" label="Discover" leftEmoji="🌍" on:click={() => gotoSlide('map')}/>
            <Separator size="mi"/>
        {/if}
        <Button size="sm" round accent leftEmoji={$menu.open ? "✖" : "☰"} on:click={() => menu.update(m => ({ ...m, open: !m.open }))}/>
    </div>
    <div class="col center-x" id="frame">
        <div class="col" id="content">
            <slot/>
        </div>
    </div>
</div>
{/if}

<style>
    #theme-switch {
        position: fixed;
        font-weight: normal;
        width: max-content;
        height: max-content;
        font-size: 1vw;
        top: calc(100% - calc(0.8 * var(--mega)));
        left: 50%;
        transform: translateX(-50%);
        transform-origin: 0%;
        background-color: var(--cbg);
        padding: var(--mi) var(--mi);
        border: solid var(--bord) var(--ccontrast);
        border-bottom: 0;
        border-top-right-radius: 2em;
        border-top-left-radius: 2em;
        z-index: 10;
        box-shadow: var(--shad-offx) var(--shad-offy) var(--ssmth) var(--ccontrast-shadow);
    }

    #root {
        position: relative;
        background-color: var(--cbg);
        width: 100vw;
        max-width: 100vw;
        min-height: 100vh;
        height: 100vh;
        overflow: hidden;
    }

    #frame {
        position: relative;
        font-size: var(--md);
        height: calc(100vh - calc(2 * var(--sm)));
        width: calc(100vw - calc(2 * var(--sm)));
        padding: 0 var(--lg);
        margin: var(--sm);
        border: solid var(--bord) var(--ccontrast);
        overflow: auto;
        box-shadow: inset var(--shad-offx) var(--shad-offy) var(--ssmth) var(--ccontrast-shadow);
    }

    #content {
        justify-content: center;
        position: absolute;
        top: 0em;
        width: max-content;
        max-width: 100%;
        height: max-content;
        min-height: 100%;
        padding: var(--mi) var(--md);
        padding-bottom: var(--xl);
    }

    @media (max-width: 700px) {
        #frame {
            justify-content: start;
            border: none;
            box-shadow: none;
            width: 100%;
            height: 100%;
            margin: 0;
        }

        #content {
            justify-content: flex-start;
            padding: var(--sm) var(--md);
            padding-bottom: var(--giga);
        }
    }
</style>