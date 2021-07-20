<script lang="ts">
    export let size: string = "md";
    export let label: string = "";
    export let href: string = "";
    export let leftEmoji: string = "";
    export let rightEmoji: string = "";
    export let round: boolean = false;
    export let accent: boolean = false;
    export let relExternal: boolean = false;

    const link = href.length > 0;
    const left = label.length > 0 || rightEmoji.length > 0;
    const right = label.length > 0 || leftEmoji.length > 0;
    const onechar = label.length == 0 || (label.length == 0 && !left) || (label.length == 0 && !right);
</script>

{#if !link}
<button 
    class="button row center-x center-y" 
    style="--size: var(--{size})" 
    class:round class:accent class:onechar
    on:click
>
    {#if leftEmoji.length > 0}
        <p class="emoji" class:left>{leftEmoji}</p>
    {/if}
    {#if label.length > 0}
        <p class="label">{label}</p>
    {/if}
    <slot/>
    {#if rightEmoji.length > 0}
        <p class="emoji" class:right>{rightEmoji}</p>
    {/if}
</button>
{/if}
{#if link}
<a 
    class="button row center-x center-y" 
    style="--size: var(--{size})" 
    class:round class:accent class:onechar 
    href={href}
    rel={relExternal ? "external" : "internal"}
>
    {#if leftEmoji.length > 0}
        <p class="emoji" class:left>{leftEmoji}</p>
    {/if}
    {#if label.length > 0}
        <p class="label">{label}</p>
    {/if}
    <slot/>
    {#if rightEmoji.length > 0}
        <p class="emoji" class:right>{rightEmoji}</p>
    {/if}
</a>
{/if}

<style>
    a {
        text-decoration: none;
    }

    .button {
        --color1: var(--cfaint);
        --color2: var(--ccontrast);
        --colorS: var(--ccontrast-shadow);

        font-size: var(--size);            
        padding: 0em var(--padd);
        border: solid var(--bord) var(--color2);
        background-color: var(--color1);
        cursor: pointer;
        border-radius: var(--brad);
        box-shadow: var(--shad-offx) var(--shad-offy) var(--ssmth) var(--colorS);
        transform: translate(calc(var(--shad-offx) / -2), calc(var(--shad-offy) / -2));
        user-select: none;
        height: 2.1em;
        width: max-content;
        transition: all calc(var(--trans) * 0.2s) ease-in-out;
    }

    .button.accent {
        --color1: var(--caccent-faint);
        --color2: var(--caccent);
        --colorS: var(--caccent-shadow);
    }
    .button.accent p {
        color: var(--color2);
    }

    .button.round {
        border-radius: 3em;
        padding: 0em calc(var(--padd) * 1.5);
    }

    .button.round.onechar {
        width: 2.15em;
        height: 2.1em;
    }
    
    .button:hover, .button:focus {
        transition: all calc(var(--trans) * 0.1s) ease-out;
        box-shadow: var(--shad-offx-large) var(--shad-offy-large) var(--ssmth) var(--colorS);
        transform: translate(calc(var(--shad-offx) / -1), calc(var(--shad-offy) / -1));
        outline: none;
    }

    .button:active {
        transition: all calc(var(--trans) * 0.1s) ease-out;
        box-shadow: none;
        transform: translate(calc(var(--shad-offx-large) / 2), calc(var(--shad-offy-large) / 2));
    }

    .button p {
        color: var(--ctext);
        height: max-content;
        max-height: 100%;
        font-size: var(--size);
    }

    a .label {
        font-style: italic;
    }

    .emoji {
        font-size: 0.8em;
    }

    .emoji.left {
        margin-right: 0.2em;
    }

    .emoji.right {
        margin-left: 0.2em;
    }
</style>
