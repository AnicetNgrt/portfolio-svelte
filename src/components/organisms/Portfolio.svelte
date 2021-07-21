<script lang="ts">
    import Separator from '$components/atoms/Separator.svelte';
    import Button from '$components/atoms/Button.svelte';
    import { mod } from '../../logic/math';

    export let tabs = [];
    let current = 0;
</script>

<div class="col center-x">
    <div class="sticky">
        <div class="row center-y">
            <div class="col">
                {#each tabs as { title, subtitle }, i}
                    {#if i === current}
                        <h3>{title}</h3>
                        <p>{subtitle}</p>
                    {/if}
                {/each}
            </div>
            <Separator size="lg"/>
            <Button 
                size="md" 
                on:click={() => current = mod(current + 1, tabs.length)} 
                round 
                label="next" 
                rightEmoji="⏭"
            />
        </div>
    </div>
    <Separator size="pi"/>
    {#each tabs as { info }, i}
        {#if i === current}
            <p class="info">{info}</p>
        {/if}
    {/each}
    <Separator size="sm"/>
    {#each tabs as { body }, i}
        {#if i === current}
            <svelte:component this={body} />
        {/if}
    {/each}
</div>

<style>
    .sticky {
        background: var(--cbg);
        width: 100%;
        padding: var(--padd);
        /* position: sticky;
        top: 0;
        z-index: 2; */
    }

    .sticky .row {
        justify-content: space-between;
        padding: 0 var(--sm);
    }

    .info {
        font-family: "Jetbrains Mono";
        background: var(--caccent-faint);
        min-width: 100%;
        text-align: center;
        color: var(--caccent);
        padding: var(--padd);
        font-size: var(--mi);
        border-radius: var(--brad);
    }
</style>