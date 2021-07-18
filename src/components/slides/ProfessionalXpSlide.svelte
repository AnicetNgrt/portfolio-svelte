<script lang="ts">
    import Box from '../atoms/Box.svelte';
    import Button from '$components/atoms/Button.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import Separator from '$components/atoms/Separator.svelte';

    export let gotoSlide: (slide) => void;
    export let prevSlide;
</script>

<Slide url="professional-xp">
    <Box size="sm" margin>
        <div class="col">
            <Button 
                size="mi" on:click={() => gotoSlide(prevSlide)} 
                leftEmoji="←" 
                label="Back to La Carte"
                round
            />
            <Separator size="sm"/>
            <h4>👔 Professional experience</h4>
        </div>
    </Box>
    <Separator size="lg"/>
    <Box size="sm" margin>
        <div class="col">
            <div class="col">
                <h3 class="hightlighted">Fullstack web development</h3>
                <Separator size="sm"/>
                <div class="job-description">
                    <h4>Coddity</h4>
                    <Separator size="pi"/>
                    <p>Paid ∙ internship ∙ april to june 2021 ∙ 10 weeks ∙ Paris, France</p>
                    <Separator size="md"/>
                    <div class="body">
                        <p>Worked with the product development team at Coddity, a human-sized tech services company located in Paris.</p>
                        <Separator size="mi"/>
                        <ul>
                            <li><b>Developed a web dashboard</b> with <b>React.js</b>, <b>Node.js</b> and <b>MySQL</b> to empower both the commercial team with product data, as well as the maintenance team with security insights and a GUI for their <b>Ansible</b> workflows.</li>
                            <Separator size="mi"/>
                            <li><b>Remade</b> Coddity's <b>blog from scratch</b> using <b>SvelteKit</b> and Atomic Design. Went from UI/UX redesign to full production deployment in only 1 week.</li>
                            <Separator size="mi"/>
                            <li><b>Audited</b> Coddity's <b>React.js website</b> codebase</li>
                            <Separator size="mi"/>
                            <li><b>Wrote a technical article</b> about parsers and functional programming for Coddity's blog.</li>
                            <Separator size="mi"/>
                            <li><b>Gave a talk</b> about Elixir and the BEAM ecosystem to Coddity's engineering staff.</li>
                        </ul>
                    </div>
                    <Separator size="lg"/>
                    <h5>Related links : </h5>
                    <Separator size="pi"/>
                    <div class="row wrap">
                        <Box size="sm" margin>
                            <Button size="sm" label="Coddity's Blog" leftEmoji="📰" round accent href="https://blog.coddity.com/"/>
                        </Box>
                        <Box size="sm" margin>
                            <Button size="sm" label="Internship report" leftEmoji="🔍" round accent href="/documents/coddity_2021_rapport_stage.pdf" relExternal/>
                        </Box>
                    </div>
                </div>
            </div>
            <Separator size="xxl"/>
            <div class="col">
                <div class="row">
                    <h3 class="hightlighted">CS students mentoring</h3>
                </div>
                <Separator size="sm"/>
                <div class="job-description">
                    <h4>Université de Paris</h4>
                    <Separator size="pi"/>
                    <p>Paid ∙ part time ∙ april to june 2021 ∙ 3 months ∙ Paris, France</p>
                    <Separator size="md"/>
                    <div class="body">
                        <p>Was part of a nation-wide program to help struggling student amid COVID-19 pandemic. Helped a small group of first year Computer Science students.</p>
                        <Separator size="mi"/>
                        <ul>
                            <li><b>Prepared and gave remedial courses</b> on various topics such as object oriented programming, algorithms, data structures and web development.</li>
                            <Separator size="mi"/>
                            <li><b>Produced useful weekly reports</b> for the university's staff.</li>
                            <Separator size="mi"/>
                            <li><b>Worked out solutions</b> with struggling students.</li>
                        </ul>
                    </div>
                    <Separator size="lg"/>
                    <h5>Related links : </h5>
                    <Separator size="pi"/>
                    <div class="row wrap">
                        <Box size="sm" margin>
                            <Button size="sm" label="About COVID-19 students mentoring" leftEmoji="🎓" round accent href="https://u-paris.fr/tuteurs-covid-conseils/"/>
                        </Box>
                    </div>
                </div>
            </div>
            <Separator size="xl"/>
        </div>
    </Box>
</Slide>

<style>
    .body {
        max-width: 70ch;
    }

    .body ul {
        margin-left: var(--sm);
    }

    .job-description {
        margin-left: var(--mi);
    }
</style>