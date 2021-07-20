<script lang="ts">
    import { onMount } from 'svelte';

    export let themeOverride: string = '';
    export let url:string = '/';

    onMount(() => {
        window.history.pushState({}, '', url);
    });
</script>

<div class="{themeOverride} theme-compute col" id="root">
    <h1 id="siteName">anicetnougaret.fr</h1>
    <div class="col center-x" id="frame">
        <div class="col" id="content">
            <slot/>
        </div>
    </div>
</div>

<style>

    #siteName {
        position: absolute;
        font-weight: normal;
        width: max-content;
        height: max-content;
        font-size: 1vw;
        top: calc(100% - 2.5vw);
        left: calc(100% - 9.5vw);
        padding: 0.5vw 0.7vw;
        padding-bottom: 0.7vw;
        padding-right: 1.2vw;
        z-index: 1;
        transform-origin: 0%;
        color: var(--ccontrast);
        background-color: var(--cbg);
        border: solid var(--bord) var(--ccontrast);
        border-bottom: none;
        border-right: none;
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
        padding-bottom: var(--xxl);
    }

    @media (max-width: 700px) {
        #frame {
            justify-content: start; 
        }

        #content {
            justify-content: flex-start;
            padding: var(--xl) var(--sm);
        }

        #siteName {
            font-size: 0.5em;
            top: calc(100% - 2.5em);
            left: calc(100% - 9.5em);
            padding: 0.5em 0.7em;
            padding-bottom: 0.7em;
            padding-right: 1.2em;
        }
    }
</style>