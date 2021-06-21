<script lang="ts">
    import Separator from '../atoms/Separator.svelte';

    export let min: number = 0;
    export let max: number = 100;
    export let step: number = 1;
    export let value: number = 50;
    export let label: string = "";

    const steps = Math.sqrt(Math.sqrt((max - min) / step)) * 20; 
</script>

<div class="row" style="--steps: {steps};">
    <p id="label">{label}</p>
    <Separator size="md"/>
    <input type="range" {min} {max} {step} bind:value={value}>
    <Separator size="md"/>
    <p>({value})</p>
</div>

<style>
    input {
        width: calc(var(--steps) * 0.5em);
    }

    #label {
        width: 9em;
    }
</style>