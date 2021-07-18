<script lang="ts">
    import Separator from '$components/atoms/Separator.svelte';
    import Box from '$components/atoms/Box.svelte';

    export let small: boolean = false;
    export let title: string;
    export let abstract: string = "";
    export let href: string = "";

    let slim = abstract.length <= 0;
</script>

<a class="card row" {href} class:small class:slim on:click>
    <Box size={small || slim ? "sm" : "xl"} margin>
        <div class="col">
            {#if !small}
                <h3>{title}</h3>
                {#if abstract.length > 0}
                    <Separator size="mi"/>
                {/if}
            {:else}
                <h4>{title}</h4>
            {/if}
            {#if abstract.length > 0}
                <p class:small>{abstract}</p>
            {/if}
        </div>
    </Box>
    <div class="link col center-y">
        ⇾
    </div>
</a>

<style>
    .card {
        text-decoration: none;
        justify-content: space-between;
        width: 33ch;
        height: max-content;
        margin: var(--pi);
        padding: 0;
        background-color: var(--cfaint);
        border: solid var(--bord) var(--ccontrast);
        border-radius: var(--brad);
        box-shadow: var(--shad-offx) var(--shad-offy) var(--ssmth) var(--ccontrast-shadow);
        transform: translate(calc(var(--shad-offx) / -2), calc(var(--shad-offy) / -2));
        text-align: left;
        transition: all calc(var(--trans) * 0.2s) ease-in-out;
    }

    .slim.card {
        font-size: var(--md);
        width: 33ch;
    }

    .slim.card h3, .slim.card h4 {
        font-weight: normal;
        font-size: var(--md);
    }

    .small.card {
        font-size: var(--md);
        width: 15.9ch;
    }

    p.small {
        font-size: var(--mi);
    }

    .link {
        font-size: var(--md);
        min-height: 100%;
        background-color: var(--caccent-faint);
        text-decoration: none;
        padding: 0 var(--padd);
        transition: all calc(var(--trans) * 0.1s) ease-out;
        border-left: solid var(--bord) transparent;
        border-top-right-radius: calc(var(--brad) * 0.8);
        border-bottom-right-radius: calc(var(--brad) * 0.8);
    }

    .small .link, .slim .link {
        font-size: var(--sm);
    }

    .card:hover, .card:focus {
        transition: all calc(var(--trans) * 0.1s) ease-out;
        box-shadow: var(--shad-offx-large) var(--shad-offy-large) var(--ssmth) var(--ccontrast-shadow);
        transform: translate(calc(var(--shad-offx) / -1), calc(var(--shad-offy) / -1));
        outline: none;
    }

    .card:hover .link, .card:focus .link, .card:active .link {
        transition: all calc(var(--trans) * 0.1s) ease-out;
        border-left: solid var(--bord) var(--ccontrast);
        background-color: var(--caccent);
        color: var(--ctext);
    }

    .card:active {
        transition: all calc(var(--trans) * 0.1s) ease-out;
        box-shadow: none;
        transform: translate(calc(var(--shad-offx-large) / 2), calc(var(--shad-offy-large) / 2));
    }
</style>