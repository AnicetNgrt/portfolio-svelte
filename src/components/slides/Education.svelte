<script lang="ts">
    import Box from '../atoms/Box.svelte';
    import Button from '$components/atoms/Button.svelte';
    import Slide from '$components/molecules/Slide.svelte';
    import Separator from '$components/atoms/Separator.svelte';
    import SlideHeader from '../molecules/SlideHeader.svelte';

    export let gotoSlide: (slide) => void;
    export const prevSlide = {};
</script>

<Slide url="education">
    <SlideHeader
        onBackClicked={() => gotoSlide('map')}
        title="📚 Education"
    />
    <Separator size="mi"/>
    <Box size="sm" margin>
        <div class="col">
            <div class="col">
                <div class="col">
                    <p><i>Currently attending</i></p>
                    <Separator size="pi"/>
                    <h3 class="highlighted">🏹 Engineering degree in Computer Science</h3>
                </div>
                <Separator size="sm"/>
                <div class="job-description">
                    <h4>INSA Lyon</h4>
                    <Separator size="pi"/>
                    <p>Expecting graduation in 2024 ∙ started september 2021 ∙ Lyon, France</p>
                </div>
            </div>
            <Separator size="xxl"/>
            <div class="col">
                <div class="row">
                    <h3 class="highlighted">🎓 DUT Informatique (Two years CS degree)</h3>
                </div>
                <Separator size="sm"/>
                <div class="job-description">
                    <h4>Université de Paris ∙ IUT de Paris rives de Seine</h4>
                    <Separator size="pi"/>
                    <p>Graduated july 2021 ∙ Ranked in top 10 ∙ started september 2019 ∙ Paris, France</p>
                    <Separator size="md"/>
                    <div class="body">
                        <p>Generalist Computer Science degree with a 3 months final internship in the industry.</p>
                        <p>Teachings such as DB management, architecture, low-level programming, web development and project management.</p>
                        <Separator size="md"/>
                        <h5 class="highlighted">Final project: </h5>
                        <Separator size="pi"/>
                        <Box size="sm" margin>
                            <p><b>Synchronized message queues system written in Elixir.</b> Teamed up with 6 other students over the course of 9 weeks part time.
                                Worked on architecture, devOps with Docker & docker-compose, Elixir+Phoenix backend code, documentation, static website and ES6 client SDK.
                            </p>
                            <Separator size="sm"/>
                            <div class="row">
                                <Button size="sm" label="About page" leftEmoji="🔎" round href="https://homesynck.anicetnougaret.fr/" relExternal/>
                                <Separator size="sm"/>
                                <Button size="sm" label="Git repository" leftEmoji="🐙" round href="https://github.com/Homesynck" relExternal/>
                            </div>
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

    .job-description {
        margin-left: var(--mi);
    }
</style>