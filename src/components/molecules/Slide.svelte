<script lang="ts">
    import Separator from "$components/atoms/Separator.svelte";
    import Button from "$components/atoms/Button.svelte";
    export let themeOverride: string = "";
</script>

<div class="{themeOverride} theme-compute row" id="root">
    <div id="controls">
        <Button size="sm" rightEmoji="↑" round/>
        <Separator size="mi"/>
        <Button size="sm" rightEmoji="↓" round/>
    </div>
    <div class="col center-y center-x" id="frame">
        <div class="col center-y" id="content">
            <slot/>
        </div>
    </div>
</div>

<style>
    #root {
        background-color: var(--cbg);
        width: 100vw;
        max-width: 100vw;
        min-height: 100vh;
        height: max-content;
    }

    #controls {
        display: none;
        margin: var(--mi);
        margin-right: 0;
    }

    #frame {
        font-size: var(--md);
        min-height: calc(100vh - calc(2 * var(--sm)));
        height: max-content;
        width: calc(100vw - calc(2 * var(--sm)));
        max-width: 100%;
        padding: var(--sm);
        margin: var(--sm);
        border: solid var(--bord) var(--ccontrast);
        border-radius: var(--brad);
    }

    #content {
        width: max-content;
        max-width: 100%;
    }

    @media (max-width: 700px) {
        #content {
            justify-content: start;
            align-items: center;
            text-align: center;
        }
    }
</style>