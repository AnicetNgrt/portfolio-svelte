<script lang="ts">
    export let size: string = "md";
    export let value: string = "";
    export let label: string = "";
</script>

<div class="input-wrapper row center-y" style="--size: var(--{size})">
    {#if label.length > 0}
        <p class="label" class:non-empty-value={value.length > 0}>{label}</p>
    {/if}
    <input bind:value={value}/>
</div>

<style>
    .input-wrapper {
        font-size: var(--size);
        position: relative;
        border: solid var(--bord) var(--ccontrast);
        border-radius: var(--brad);
        box-shadow: var(--shad-offx) var(--shad-offy) var(--ssmth) var(--ccontrast-shadow);
        transform: translate(calc(var(--shad-offx) / -2), calc(var(--shad-offy) / -2));
        padding: 0em 0.4em;
        background-color: var(--cfaint);
        height: 2.1em;
        transition: all calc(var(--trans) * 0.2s) ease-in-out;
    }

    .input-wrapper input {
        font-size: inherit;
        background-color: transparent;
        border: none;
        outline: none;
        height: 1.2em;
        font: var(--font);
    }

    .input-wrapper:focus-within {
        transition: all calc(var(--trans) * 0.2s) ease-in-out;
        box-shadow: var(--shad-offx-large) var(--shad-offy-large) var(--ssmth) var(--ccontrast-shadow);
        transform: translate(calc(var(--shad-offx) / -1), calc(var(--shad-offy) / -1));
        border-color: var(--ccontrast);
        background-color: var(--cfaint);
    }

    .label {
        position: absolute;
        margin-top: 0em;
        font-size: 1em;
        border: solid var(--bord) transparent;
        pointer-events: none;
        color: var(--ccontrast);
        transition: 
            all calc(var(--trans) * 0.2s) ease-in-out, 
            background-color calc(var(--trans) * 0.1s), 
            border calc(var(--trans) * 0.1s);
    }

    .input-wrapper:focus-within .label, .label.non-empty-value {
        opacity: 1;
        transition: all calc(var(--trans) * 0.1s) ease-in-out;
        margin-top: -4.5em;
        font-size: 0.5em;
        background-color: var(--caccent-faint);
        color: var(--caccent);
        padding: 0.1em 0.3em;
        border: solid var(--bord) var(--caccent);
        border-radius: var(--brad);
    }
</style>