<script lang="ts">
	import Separator from "../atoms/Separator.svelte";
    import SizeBenchmark from "../organisms/SizeBenchmark.svelte";
    import Slider from "../molecules/Slider.svelte";
    import Slide from '$components/molecules/Slide.svelte';
    import SlideHeader from '../molecules/SlideHeader.svelte';
    import { theme } from "../../logic/theme";

    export let gotoSlide: (slide: string) => void;
    export let prevSlide: any;

    const fonts: {[key: string]: string} = {
        'Questrial': "'Questrial', sans-serif",
        'Fira Mono': "'Fira Mono', monospace",
        'Fira Sans': "'Fira Sans', sans-serif",
        'Inter': "'Inter', sans-serif",
        'Jost': "'Jost', sans-serif",
        'Open Sans Condensed': "'Open Sans Condensed', sans-serif",
        'Playfair Display': "'Playfair Display', serif",
        'Roboto': "'Roboto', sans-serif",
        'Rubik': "'Rubik', sans-serif",
        'Jetbrains Mono': "'Jetbrains Mono', monospace"
    }

    let brAmount = 3;
    let bThickness = 0;
    let sBlur = 10;
    let sOpac = 0.1;
    let sOffX = 0;
    let sOffY = 1;
    let font = "'Jost', sans-serif";
</script>

<Slide {gotoSlide}>
    <SlideHeader 
        onBackClicked={() => gotoSlide(prevSlide)}
        title="🎨 Theme editor"
    />
    <div class="editor-body">
        <div class="row wrap">
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
        class="col theme-compute theme-{$theme}"
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
    </div>
    <div class="mobile-disclaimer col center-x">
        <h1>Oopsie 📱</h1>
        <Separator size="md"/>
        <p>
            Sorry, the theme editor is only available on large horizontal screens for now.
        </p>
    </div>
</Slide>

<style>
    #fonts {
        max-height: 12rem;
    }

    .mobile-disclaimer {
        margin-top: 2rem;
        display: none;
    }

    @media (max-width: 720px) {
        .editor-body {
            display: none;
        }

        .mobile-disclaimer {
            display: flex;
        }
    }
</style>