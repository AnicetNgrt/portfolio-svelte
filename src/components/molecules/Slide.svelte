<script lang="ts">
    export let themeOverride: string = "";
</script>

<div class="{themeOverride} theme-compute col" id="root">
    <div class="col center-y center-x" id="frame">
        <div class="row" id="header">
            <p>This is a header text</p>
        </div>
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

    #header {
        display: none;
        position: absolute;
        top: 0em;
        left: 0em;
        width: 100%;
        background-color: var(--caccent-faint);
        border-bottom: solid var(--bord) var(--ccontrast);
        padding: var(--padd) var(--mi);
    }

    #frame {
        position: relative;
        font-size: var(--md);
        min-height: calc(100vh - calc(2 * var(--sm)));
        height: max-content;
        width: calc(100vw - calc(2 * var(--sm)));
        max-width: 100%;
        padding: var(--sm) var(--lg);
        margin: var(--sm);
        border: solid var(--bord) var(--ccontrast);
    }

    #content {
        width: max-content;
        max-width: 100%;
    }

    @media (max-width: 700px) {
        #frame {
            justify-content: start; 
        }

        #content {
            justify-content: start;
            align-items: center;
            text-align: center;
        }
    }
</style>