<script lang="ts">
    import Separator from '$components/atoms/Separator.svelte';
    import Button from '$components/atoms/Button.svelte';

    export let title: string;
    export let onBackClicked: () => any;
</script>

<div class="header row center-y center-x wrap">
    <div style="margin-top: 0.2em">
        <Button 
            size="sm" on:click={onBackClicked} 
            leftEmoji="◂" 
            label="Go back"
        />
    </div>
    <Separator size="sm"/>
    <div>
        <h4>{title}</h4>
    </div>
</div>
<Separator size="md"/>

<style>
    .header {
        width: 100%;
    }

    .header div {
        margin-bottom: var(--mi);
    }
</style>