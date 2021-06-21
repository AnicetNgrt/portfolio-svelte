<script lang="ts">
	import Button from "../atoms/Button.svelte";
    import Input from "../atoms/Input.svelte";
	import Box from "../atoms/Box.svelte";

    export let size: string = "md";
</script>

<div class="row">
    <Box {size} margin>
        <Input value="" label="Username" {size}/>
    </Box>
    <Box {size} margin>
        <Button leftEmoji="🧪" label="test" accent {size} on:click={()=>{}}/>
    </Box>
    <Box {size} margin>
        <Button label="Open file" round {size} on:click={()=>{}}/>
    </Box>
    <Box {size} margin>
        <Button label="Lock" rightEmoji="🔑" round {size} on:click={()=>{}}/>
    </Box>
    <Box {size} margin>
        <Button rightEmoji="🎲" {size} on:click={()=>{}}/>
    </Box>
</div>