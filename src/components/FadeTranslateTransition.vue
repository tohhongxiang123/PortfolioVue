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
</style>

<script>
export default {
    props: {
        duration: {
            type: String,
            default: '0.3s'
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
            el.style.animationDuration = `${this.duration}`;
        },
        cleanUpDuration(el) {
            el.style.animationDuration = "";
        }
    }
}
</script>