<template>
    <div class="contact page">
        <div class="content">
            <section>
                <h1 class="title">Contact Me!</h1>
                <a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="mailto:tohhongxiang@gmail.com">Email Me</a>
                <a class="btn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/toh-hong-xiang-31551118b/">LinkedIn</a>
            </section>

            <sectioN>
                <h1 class="title">See more of me!</h1>
                <ul class="link-list">
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/tohhongxiang123">
                            <img src="@/assets/images/github.svg" width="64px" height="64px" class="icon"/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/toh-hong-xiang-31551118b/">
                            <img src="@/assets/images/linkedIn.svg" width="64px" height="64px" class="icon"/>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .contact {
        text-align: center;
        min-height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon {
        opacity: 0.8;
        transition: all 0.2s ease;

        &:hover {
            opacity: 1;
            transition: all 0.2s ease;
        }
    }

    .before-intersect {
        opacity: 0;
        transform: translateX(50px);
    }

    .intersect {
        opacity: 1;
        transform: translateX(0);
        transition: all 0.2s ease;
        transition-delay: 0.3s;
    }


</style>