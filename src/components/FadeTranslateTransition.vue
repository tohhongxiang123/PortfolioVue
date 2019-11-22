<template>
    <transition name="fadeTranslate" v-bind="$attrs" v-on="hooks" enter-active-class="fadeIn" leave-active-class="fadeOut">
        <slot></slot>
    </transition>
</template>

<style lang="scss" scoped>
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }

        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .fadeIn {
        animation: fadeIn;
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }

        to {
            opacity: 0;
            transform: translateX(-50px)
        }
    }

    .fadeOut {
        animation: fadeOut;
    }

    // .fadeTranslate-enter-active, .fadeTranslate-leave-active {
    //     transition: all 0.2s ease-in-out;
    // }

    // .fadeTranslate-enter-to, .fadeTranslate-leave {
    //     opacity: 1;
    //     transform: translateX(0);
    // }

    // .fadeTranslate-enter, .fadeTranslate-leave-to {
    //     opacity: 0;
    //     transform: translateX(50px);
    // }
</style>

<script>
export default {
    props: {
        duration: {
            type: Number,
            default: 0.3
        }
    },
    computed: {
        hooks() {
            return {
                beforeEnter: this.setDuration,
                afterEnter: this.cleanUpDuration,
                beforeLeave: this.setDuration,
                afterLeave: this.cleanUpDuration
            }
        }
    },
    methods: {
        setDuration(el) {
            el.style.animationDuration = `${this.duration}s`;
        },
        cleanUpDuration(el) {
            el.style.animationDuration = "";
        }
    }
}
</script>