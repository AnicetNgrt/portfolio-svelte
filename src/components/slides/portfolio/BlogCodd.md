<script lang="ts">
    import Md from '../../molecules/Md.svelte';
    import Button from '../../atoms/Button.svelte';
    import Caroussel from '../../organisms/Caroussel.svelte';
</script>

<Md>
<Caroussel slides={[
    { pictures: [{ src: "/blogc/blogc_desktop_1.PNG" }] },
    { pictures: [{ src: "/blogc/blogc_desktop_2.PNG" }] },
    { pictures: [{ src: "/blogc/blogc_desktop_3.PNG" }] },
    { pictures: [
        { src: "/blogc/blogc_mobile_2.PNG" },
        { src: "/blogc/blogc_mobile_3.PNG" }
    ] },
    { pictures: [
        { src: "/blogc/blogc_mobile_1.PNG" },
        { src: "/blogc/blogc_mobile_4.PNG" },
    ] }
]}/>

<Button size="md" label="Check out Coddity's blog" leftEmoji="💾" href="https://blog.coddity.com"/>

#### About

During my internship at Coddity I was assigned to improve on Coddity's blog. Which, in the end, lead to actually remaking it entirely from the ground up.

- Full redesign to stick closer to Coddity's design system, bring more modernity and joy of use.
- Switched from a Gatsby + GraphQL setup that felt too heavy and flawed for the job to SvelteKit.
- Less than 2 weeks from assignment to deployment.
- Fast iteration on design and article deployment workflow leveraging Coddity's staff feedback.
- Significant maintenability and ergonomics improvement from the previous version 😊

</Md>