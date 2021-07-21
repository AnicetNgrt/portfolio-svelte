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
<Separator size="sm"/>
<div class="col">
    <Separator size="sm"/>
    <Button size="md" label="Check out Coddity's blog" leftEmoji="💾" href="https://blog.coddity.com"/>
    <Separator size="lg"/>
    <div>
        <h4>About</h4>
        <Separator size="sm"/>
        <p>Coddity's blog remake as an intern in this company.</p>
        <Separator size="mi"/>
        <p>Full redesign to stick closer to Coddity's design system, bring more modernity and joy of use.</p>
        <Separator size="mi"/>
        <p>Switched from a Gatsby + GraphQL setup that felt too heavy and flawed for the job to SvelteKit.</p>
        <Separator size="mi"/>
        <p>Made in less than 2 weeks from assignment to deployment.</p>
        <Separator size="mi"/>
        <p>Fast iteration on design and article deployment workflow leveraging Coddity's staff feedback.</p>
        <Separator size="mi"/>
        <p>Coddity's staff was very satisfied with the result.</p>
    </div>
</div>