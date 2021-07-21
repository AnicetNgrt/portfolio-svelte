<script lang="ts">
    import Separator from '../../atoms/Separator.svelte';
    import Button from '../../atoms/Button.svelte';
    import Caroussel from '../../molecules/Caroussel.svelte';
    import Box from '../../atoms/Box.svelte';
</script>

<Caroussel slides={[
    [{ src: "/homesynck/homesynck_desktop_1.PNG" }],
]}/>
<div class="col">
    <Separator size="sm"/>
    <Button size="md" label="Check out the deployed version" rightEmoji="🚀" href="https://homesynck.anicetnougaret.fr"/>
    <Separator size="lg"/>
    <div>
        <h4>About</h4>
        <Separator size="sm"/>
        <p>Synchronized message queues system written in Elixir. (It's a developper tool)</p>
        <Separator size="mi"/>
        <p>Worked on architecture, devOps with Docker & docker-compose, Elixir+Phoenix backend code, documentation, static website and ES6 client SDK over the course of 9 weeks part time.</p>
    </div>
    <Separator size="lg"/>
    <div>
        <h4>Key features</h4>
        <Separator size="sm"/>
        <ul>
            <li>Javascript & Java SDKs to bring real-time synchronization to your frontends.</li>
            <Separator size="mi"/>
            <li>"Getway" an Android app to showcase Homesynck's real-time synchronization capabilities.</li>
            <Separator size="mi"/>
            <li>Open-source and fully self-hostable.</li>
        </ul>
    </div>
    <Separator size="lg"/>
    <h4>Related links</h4>
    <Separator size="sm"/>
    <div class="row wrap">
        <Box size="sm" margin>
            <Button size="md" label="Github Repositories" leftEmoji="🐙" href="https://github.com/Homesynck"/>
        </Box>
        <Box size="sm" margin>
            <Button size="md" label="Documentation" leftEmoji="📚" href="https://homesynck.github.io/homesynck-server/"/>
        </Box>
        <Box size="sm" margin>
            <Button size="md" label="Report PDF" leftEmoji="📃" href="/homesynck/report.pdf" relExternal/>
        </Box>
    </div>
</div>