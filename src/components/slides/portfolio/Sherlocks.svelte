<script lang="ts">
    import Separator from '../../atoms/Separator.svelte';
    import Button from '../../atoms/Button.svelte';
    import Caroussel from '../../organisms/Caroussel.svelte';
    import Box from '../../atoms/Box.svelte';
</script>

<Caroussel slides={[
    { pictures: [{ src: "/3wsherlocks/image.png" }], label: "3W Sherlocks' main page." },
    { pictures: [{ src: "/3wsherlocks/screen_desktop_2.png" }], label: "Register form, real-time feedback with Phoenix LiveView (websockets under the hood)."  },
    { pictures: [{ src: "/3wsherlocks/screen_desktop_3.png" }] },
    { pictures: [{ src: "/3wsherlocks/screen_desktop_7.png" }] },
    { pictures: [
        { src: "/3wsherlocks/screen_mobile_3.png" },
        { src: "/3wsherlocks/screen_mobile_12.png" },
        { src: "/3wsherlocks/screen_mobile_6.png" }
    ], label: "I always make my UI responsive when I can." }
]}/>
<div class="col">
    <Separator size="sm"/>
    <Button size="md" label="Check out the deployed version" rightEmoji="🚀" href="https://bourse2021-coddity.anicetnougaret.fr"/>
    <Separator size="lg"/>
    <div>
        <h4>About</h4>
        <Separator size="sm"/>
        <p>Web application that fights fake news through user-ruled online debunking sessions.</p>
        <Separator size="mi"/>
        <p>Fullstack project written in <b>Elixir</b> using <b>Phoenix framework</b> for it's real-time capabilities, <b>PostgreSQL</b>, <b>Docker</b> and <b>TailwindCSS</b>.</p>
        <Separator size="mi"/>
        <p>Won me "Bourse Coddity 2021", a yearly hackathon for French students.</p>
    </div>
    <Separator size="lg"/>
    <div>
        <h4>Key features</h4>
        <Separator size="sm"/>
        <ul>
            <li>Take part in collaborative debunking sessions with anyone online using a real-time chat and voting system.</li>
            <Separator size="mi"/>
            <li>Have fun and stay engaged with a role-playing-game-like system that pushes participants to think differently.</li>
            <Separator size="mi"/>
            <li>Discover sessions with full-text search and useful filters.</li>
        </ul>
    </div>
    <Separator size="lg"/>
    <div>
        <h4>Related links</h4>
        <Separator size="sm"/>
        <div class="row wrap">
            <Box size="sm" margin>
                <Button size="md" label="Github Repositories" leftEmoji="🐙" href="https://github.com/AnicetNgrt/3WSherlocks"/>
            </Box>
            <Box size="sm" margin>
                <Button size="md" label="About Bourse Coddity" leftEmoji="🏆" href="https://bourse.coddity.com/"/>
            </Box>
        </div>
    </div>
</div>