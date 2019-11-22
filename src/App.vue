<template>
	<div id="app">
		<NavigationBar />
		<transition 
		name="page-transitions"
		mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<style lang="scss">
@import 'assets/main.scss';

.page {
	width: 100%;
	min-height: 80vh;
	margin-top: 8vh;
}

.page-transitions-enter-active {
	animation: coming 0.3s;
	opacity: 0;
}

.page-transitions-leave-active  {
	animation: going 0.3s;
}

@keyframes going {
	from {
		transform: translateX(0);
		opacity: 1;
	}

	to {
		transform: translateX(-50px);
		opacity: 0;
	}
}

@keyframes coming {
	from {
		transform: translateX(-50px);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
}
</style>

<script>
import NavigationBar from '@/components/NavigationBar.vue'

export default {
	components: {
		NavigationBar
	}
}
</script>
