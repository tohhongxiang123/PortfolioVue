<template>
    
    <div class="project-tile">
                <div v-scrollanimation=0.8>
                    <div class="header">
                        <h1>{{ project.title }}</h1>
                        <p class="text-muted">{{ project.description }}</p>
                        <img v-if="project.thumbnail" :src="require(`@/assets/projectThumbnails/${project.thumbnail}`)" :alt="project.thumbnail" key="loadedImage"/>
                        <img v-else src="@/assets/loading.png" alt="Loading" />
                    </div>
                    
                    <!-- <ul class="link-list">
                        <li>
                            <a class="btn btn-primary" :href="project.demoLink" target="_blank" rel="noopener noreferrer">Demo</a>
                        </li>
                        <li>
                            <a :href="project.codeLink" class="btn" target="_blank" rel="noopener noreferrer">Code</a>
                        </li>
                    </ul> -->

                    <ul class="link-list">
                        <li v-for="(value, key, index) in project.data" :key="key">
                            <a class="btn" :class="{'btn-primary': index === 0}" :href="value" target="_blank" rel="noopener noreferrer" :key="index">{{ key }}</a>
                        </li>
                    </ul>
                </div>
    </div>
</template>

<style lang="scss" scoped>
    .project-tile {
        margin: 0 auto;
        margin-bottom: 5em;
        padding: 2em 4em;
        text-align: center;
        max-width: 700px;
        min-height: 400px;
        border-radius: 0;
        transition: all 0.2s ease;
        display: flex;
        flex-flow: column;
        justify-content: space-between;

        &:hover {
            border: 1px solid #eee;
            box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.1);
            background: #fcfcfc;
            border-radius: 0.7em;
            transition: all 0.2s ease;
        }

        img {
            max-width: 100%;
            border: 5px solid #222;
            border-radius: 0.4em;
            margin-top: 1em;
        }
    }

    .transition-container {
        min-height: 300px;
    }

    .before-intersect {
        opacity: 0;
        transform: translateX(-50px);
    }

    .intersect {
        opacity: 1;
        transform: translateX(0);
        transition: all 0.2s ease-in;
    }
</style>

<script>
export default {
    props: {
        project: Object
    }
}
</script>