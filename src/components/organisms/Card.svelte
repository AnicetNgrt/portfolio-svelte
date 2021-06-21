<script lang="ts">
    import Separator from '$components/atoms/Separator.svelte';
    import Box from '$components/atoms/Box.svelte';

    export let small: boolean = false;
    export let title: string;
    export let abstract: string;
    export let href: string = "";
</script>

<a class="card row center-y" {href} class:small on:click>
    <Box size={small ? "md" : "xl"} margin>
        <div class="col">
            {#if !small}
                <h3>{title}</h3>
                <Separator size="mi"/>
            {:else}
                <h4>{title}</h4>
                <Separator size="pi"/>
            {/if}
            <p class:small>{abstract}</p>
        </div>
    </Box>
    <div class="link col center-y">
        ⇾
    </div>
</a>

<style>
    .card {
        font-size: var(--size);
        text-decoration: none;
        width: 31ch;
        height: 12ch;
        margin: var(--marg);
        padding: 0;
        border: solid var(--bord) var(--ccontrast);
        border-radius: var(--brad);
        box-shadow: var(--shad-offx) var(--shad-offy) var(--ssmth) var(--ccontrast-shadow);
        transform: translate(calc(var(--shad-offx) / -2), calc(var(--shad-offy) / -2));
        text-align: left;
        transition: all calc(var(--trans) * 0.2s) ease-in-out;
    }

    .small.card {
        width: 14.92ch;
        height: 5.35ch;
    }

    p.small {
        font-size: var(--mi);
    }

    .link {
        font-size: var(--lg);
        min-height: 100%;
        background-color: var(--caccent-faint);
        text-decoration: none;
        padding: var(--padd);
        transition: all calc(var(--trans) * 0.1s) ease-out;
    }

    .small .link {
        font-size: var(--sm);
    }

    .card:hover, .card:focus {
        transition: all calc(var(--trans) * 0.1s) ease-out;
        box-shadow: var(--shad-offx-large) var(--shad-offy-large) var(--ssmth) var(--ccontrast);
        transform: translate(calc(var(--shad-offx) / -1), calc(var(--shad-offy) / -1));
        outline: none;
    }

    .card:hover .link, .card:active .link {
        transition: all calc(var(--trans) * 0.1s) ease-out;
        border-left: solid var(--bord) var(--ccontrast);
        background-color: var(--caccent);
        color: var(--caccent-faint);
    }

    .card:active {
        transition: all calc(var(--trans) * 0.1s) ease-out;
        box-shadow: none;
        transform: translate(calc(var(--shad-offx-large) / 2), calc(var(--shad-offy-large) / 2));
    }
</style>