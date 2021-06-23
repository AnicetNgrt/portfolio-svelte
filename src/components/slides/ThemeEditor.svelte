<script lang="ts">
	import Separator from "../atoms/Separator.svelte";
    import SizeBenchmark from "../organisms/SizeBenchmark.svelte";
    import Slider from "../molecules/Slider.svelte";
    import Slide from '$components/molecules/Slide.svelte';
    import Button from "$components/atoms/Button.svelte";

    export let gotoSlide: (slide) => void;
    export let prevSlide;

    const fonts = {
        'Questrial': "'Questrial', sans-serif",
        'Fira Mono': "'Fira Mono', monospace",
        'Fira Sans': "'Fira Sans', sans-serif",
        'Inter': "'Inter', sans-serif",
        'Jost': "'Jost', sans-serif",
        'Open Sans Condensed': "'Open Sans Condensed', sans-serif",
        'Playfair Display': "'Playfair Display', serif",
        'Roboto': "'Roboto', sans-serif"
    }

    let brAmount = 3;
    let bThickness = 0;
    let sBlur = 10;
    let sOpac = 0.1;
    let sOffX = 0;
    let sOffY = 1;
    let font = "'Jost', sans-serif";
</script>

<Slide themeOverride="editor-theme">
    <Button size="mi" on:click={() => gotoSlide(prevSlide)} leftEmoji="←" label="Previous" round/>
    <Separator size="sm"/>
    <h3>Theme Editor</h3>
    <Separator size="mi"/>

    <div class="row">
        <div class="col">
            <Slider label="Border Radius" min={0} max={5} step={0.1} bind:value={brAmount}/>
            <Slider label="Border Thickness" min={0} max={10} step={0.1} bind:value={bThickness}/>
            <Slider label="Shadow Blur" min={0} max={20} step={1} bind:value={sBlur}/>
            <Slider label="Shadow Opacity" min={0} max={1} step={0.05} bind:value={sOpac}/>
            <Slider label="Shadow Offset Y" min={-8} max={8} step={0.1} bind:value={sOffY}/>
            <Slider label="Shadow Offset X" min={-8} max={8} step={0.1} bind:value={sOffX}/>
        </div>
        <Separator size="md"/>
        <div class="col wrap" id="fonts">
            {#each Object.keys(fonts) as key}
            <div class="row">
                <Separator size="sm"/>
                <input type=radio bind:group={font} value={fonts[key]}>
                <Separator size="sm"/>
                <p style="font-family: {fonts[key]}">{key}</p>
            </div>
            {/each}
        </div>
    </div>

    <div style="
    --br: {brAmount};
    --ssmth: {sBlur}px;
    --bthic: {bThickness};
    --soffx: {sOffX};
    --soffy: {sOffY};
    --font: {font};
    --sopac: {sOpac};
    "
    class="col light-theme theme-compute"
    >
        <Separator size="md"/>
        <SizeBenchmark size="mi"/>
        <Separator size="mi"/>
        <SizeBenchmark size="sm"/>
        <Separator size="sm"/>
        <SizeBenchmark size="md"/>
        <Separator size="md"/>
        <SizeBenchmark size="lg"/>
    </div>
</Slide>

<style>
    #fonts {
        max-height: 12rem;
    }
</style>