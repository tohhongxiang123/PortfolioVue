<template>
    <nav>
        <div class="logo">
            <h3 @click="hideDisplay"><router-link to="/" exact>Toh Hong Xiang</router-link></h3>
        </div>
        <div class="burger" @click="toggleDisplay" :class="{onScreen: onScreen}">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links" :class="{onScreen: onScreen}">
            <li @click="hideDisplay"><router-link to="/about" class="nav-item">About Me</router-link></li>
            <li @click="hideDisplay"><router-link to="/projects" class="nav-item">Projects</router-link></li>
            <li @click="hideDisplay"><router-link to="/contact" class="nav-item">Contact Me</router-link></li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
nav {
    width: 100%;
    z-index: 1;
    padding: 15px 30px 5px 30px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    min-height: 8vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255,255,255,0.8);

    a {
        color: #131313;
        text-decoration: none;
    }
}

.logo {
    letter-spacing: 0.05em;
    font-size: 25px;

    h3 {
        margin-bottom: 0;
    }
}

.nav-links {
    display: flex;
    justify-content: space-around;
    width: 400px;
    list-style-type: none;
    letter-spacing: 1px;
    z-index: 1;
}

.router-link-active {
    font-weight: bold;
}

.burger div {
    width: 25px;
    height: 2px;
    background-color: #131313;

    &:not(:last-child) {
        margin-bottom: 4px;
    }
}

.burger {
    display: none;
    transition: all 0.2s ease;

    &:hover {
        cursor: pointer;
    }

    .line1 {
        transition: all 0.2s ease;
    }

    .line2 {
        transition: all 0.2s ease;
    }

    .line3 {
        transition: all 0.2s ease;
    }

    &.onScreen {
        .line1 {
            transform: rotate(45deg) translate(4px, 4px);
            transition: all 0.2s ease;
        }

        .line2 {
            opacity: 0;
            transition: all 0.2s ease;
        }

        .line3 {
            transform: rotate(-45deg) translate(4px, -4px);
            transition: all 0.2s ease;
        }
    }
}

@media screen and (max-width:768px) {
    .burger {
        display: inline-block;
    }

    .nav-links {
        position: absolute;
        right: 0;
        height: 92vh;
        top: 8vh;
        flex-direction: column;
        align-items: center;
        background: #eee;
        transform: translateX(100%);
        opacity: 0;
        transition: all 0.3s ease-in;

        &.onScreen {
            transform: translateX(0);
            opacity: 1;
            transition: all 0.3s ease-out;
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            onScreen: false
        }
    },
    methods: {
        toggleDisplay() {
            this.onScreen = !this.onScreen;
        },
        hideDisplay() {
            this.onScreen = false;
        }
    }
}
</script>
