<script lang="ts">
    import Separator from '$components/atoms/Separator.svelte';
    import Button from '$components/atoms/Button.svelte';
    import { mod } from '../../logic/math';

    export let tabs: any[] = [];
    export let type:string = 'project';
    let current = 0;
    
    let portfolio: HTMLDivElement;

    const onNext = () => {
        current = mod(current + 1, tabs.length);
        setTimeout(() => portfolio.scrollIntoView({ behavior: 'smooth' }), 100);
    }
</script>

<div class="portfolio col center-x" bind:this={portfolio}>
    <div class="sticky">
        <div class="row center-y">
            <div class="col">
                {#each tabs as { title, subtitle }, i}
                    {#if i === current}
                        <h4>{title}</h4>
                        {#if subtitle && subtitle.length > 0}
                            <p>{subtitle}</p>
                        {/if}
                    {/if}
                {/each}
            </div>
            <Button 
                size="sm" 
                on:click={onNext} 
                label="next {type}"
            />
        </div>
    </div>
    <Separator size="sm"/>
    {#each tabs as { info }, i}
        {#if i === current && info && info.length > 0}
            <p class="info">{info}</p>
        {/if}
    {/each}
    {#each tabs as { body }, i}
        {#if i === current}
            <div class="body">
                <svelte:component this={body} />
            </div>
        {/if}
    {/each}
    <Separator size="xl"/>
    <Button 
        size="sm" 
        on:click={onNext} 
        label="next {type}" 
    />
    <Separator size="giga"/>
    <Separator size="giga"/>
    <Separator size="giga"/>
    <Separator size="giga"/>
    <Separator size="giga"/>
    <Separator size="giga"/>
    <div>
        <p>Hi, I'm Mr. Padding. I'm happy to contribute to a subtle CSS trick that sticks the header to the top.</p>
        <p>To everyone whom discovered me I wish an amazing day!</p>
        <Separator size="pi"/>
        <p>\ (●'◡'●) </p>
    </div>
    <Separator size="md"/>
</div>

<style>
    .sticky {
        background-color: var(--caccent-faint);
        width: 100%;
        padding: var(--pi) var(--mi);
        position: sticky;
        top: -1px;
        z-index: 2;
        border: solid var(--bord) var(--ccontrast);
        border-radius: var(--brad);
        box-shadow: var(--shad-offx) var(--shad-offy) var(--ssmth) var(--ccontrast-shadow);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .sticky .row {
        justify-content: space-between;
    }

    .sticky .row .col h4, .sticky .row .col p {
        color: var(--ccontrast);
    }

    .body {
        min-width: 100%;
        max-width: 100%;
        padding: 0 var(--pi);
    }

    .info {
        font-family: "Jetbrains Mono";
        min-width: 100%;
        text-align: left;
        color: var(--ctext);
        padding: var(--pi) var(--mi);
        font-size: var(--sm);
        border-radius: var(--brad);
    }
</style>