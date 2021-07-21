<script lang="ts">
    import { initTheme, theme, updateTheme } from '../../logic/theme';

    import { onMount } from 'svelte';
    import Button from '../atoms/Button.svelte';
    import Separator from '../atoms/Separator.svelte';

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
    <div id="siteName" class="row center-y">
        {#if $theme === 'dark'}
            <Button size="sm" rightEmoji="🌞" round accent on:click={() => updateTheme('light')}/>
        {:else}
            <Button size="sm" rightEmoji="🌚" round accent on:click={() => updateTheme('dark')}/>
        {/if}
        <Separator size="xl"/>
    </div>
    <div class="col center-x" id="frame">
        <div class="col" id="content">
            <slot/>
        </div>
    </div>
</div>
{/if}

<style>
    #siteName {
        position: fixed;
        font-weight: normal;
        width: max-content;
        height: max-content;
        font-size: 1vw;
        top: 0;
        left: calc(100% - calc(0.9 * var(--mega)));
        z-index: 1;
        transform-origin: 0%;
        background-color: var(--cbg);
        padding: var(--pi) var(--mi);
        border: solid var(--bord) var(--ccontrast);
        border-top: 0;
        border-right: 0;
        border-bottom-left-radius: var(--brad);
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
        min-height: calc(100vh - calc(2 * var(--sm)));
        height: 100%;
        width: calc(100vw - calc(2 * var(--sm)));
        max-width: 100%;
        padding: 0 var(--lg);
        margin: var(--sm);
        border: solid var(--bord) var(--ccontrast);
        overflow: auto;
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
        }

        #content {
            justify-content: flex-start;
            padding: var(--xl) var(--sm);
        }
    }
</style>