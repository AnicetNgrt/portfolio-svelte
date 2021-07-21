<script lang="ts">
    import Separator from '../../atoms/Separator.svelte';
    import Button from '../../atoms/Button.svelte';
    import Caroussel from '../../molecules/Caroussel.svelte';
</script>

<Caroussel slides={[
    [{ src: "/blogc/blogc_desktop_1.PNG" }],
    [{ src: "/blogc/blogc_desktop_2.PNG" }],
    [{ src: "/blogc/blogc_desktop_3.PNG" }],
    [
        { src: "/blogc/blogc_mobile_2.PNG" },
        { src: "/blogc/blogc_mobile_3.PNG" }
    ],
    [
        { src: "/blogc/blogc_mobile_1.PNG" },
        { src: "/blogc/blogc_mobile_4.PNG" },
    ]
]}/>
<div class="col">
    <Separator size="sm"/>
    <Button size="md" label="Check out Coddity's blog" leftEmoji="💾" href="https://blog.coddity.com"/>
    <Separator size="lg"/>
    <div>
        <h4>About</h4>
        <Separator size="sm"/>
        <ul>
            <li>Coddity's blog remake as an intern in this company.</li>
            <Separator size="mi"/>
            <li>Full redesign to stick closer to Coddity's design system, bring more modernity and joy of use.</li>
            <Separator size="mi"/>
            <li>Switched from a Gatsby + GraphQL setup that felt too heavy and flawed for the job to SvelteKit.</li>
            <Separator size="mi"/>
            <li>Made in less than 2 weeks from assignment to deployment.</li>
            <Separator size="mi"/>
            <li>Fast iteration on design and article deployment workflow leveraging Coddity's staff feedback.</li>
        </ul>
    </div>
</div>