<script lang="ts">
    import Separator from '$components/atoms/Separator.svelte';
    import Button from '$components/atoms/Button.svelte';
    import { mod } from '../../logic/math';

    export let tabs = [];
    let current = 0;

    let portfolio;
</script>

<div class="portfolio col center-x" bind:this={portfolio}>
    <div class="sticky">
        <div class="row center-y">
            <div class="col">
                {#each tabs as { title, subtitle }, i}
                    {#if i === current}
                        <h4>{title}</h4>
                        <p>{subtitle}</p>
                    {/if}
                {/each}
            </div>
            <Separator size="lg"/>
            <Button 
                size="sm" 
                on:click={() => {
                    current = mod(current + 1, tabs.length);
                    portfolio.scrollIntoView({ behavior: 'smooth' });
                }} 
                label="next" 
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
    <Separator size="xl"/>
    <Button 
        size="sm" 
        on:click={() => {
            current = mod(current + 1, tabs.length);
            portfolio.scrollIntoView({ behavior: 'smooth' });
        }} 
        label="See another project" 
    />
</div>

<style>
    .sticky {
        background: var(--cbg);
        width: 100%;
        padding: 0.2em;
        padding-top: 0;
        padding-bottom: var(--padd);
        position: sticky;
        top: 0;
        z-index: 2;
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