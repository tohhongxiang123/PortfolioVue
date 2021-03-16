<template>
	<div class="home page">
		<div class="content">
			<transition name="fadeIn" appear>
				<img src="@/assets/images/headerImage.svg" width="300px"/>
			</transition>
			<h1 class="title">
				<strong>Toh Hong Xiang</strong>
			</h1>
			<p class="text-muted description"><i>Self-motivated web developer with a specialization in React</i></p>
			<ul class="link-list">
				<li>
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/tohhongxiang123">
						<img src="@/assets/images/github.svg" width="64px" height="64px" class="icon" alt="Github Link"/>
						<p><small class="text-muted">Github</small></p>
					</a>
				</li>
				<li>
					<a target="_blank" rel="noopener noreferrer" href="mailto:tohhongxiang@gmail.com">
						<img src="@/assets/images/email.svg" width="64px" height="64px" class="icon" alt="Email Link"/>
						<p><small class="text-muted">Gmail</small></p>
					</a>
				</li>
				<li>
					<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/toh-hong-xiang-31551118b/">
						<img src="@/assets/images/linkedIn.svg" width="64px" height="64px" class="icon" alt="LinkedIn Link"/>
						<p><small class="text-muted">LinkedIn</small></p>
					</a>
				</li>
				<li>
					<a target="_blank" rel="noopener noreferrer" href="./resume.pdf">
						<img src="@/assets/images/resume.svg" width="64px" height="64px" class="icon" alt="Resume Link"/>
						<p><small class="text-muted">Resume</small></p>
					</a>
				</li>
			</ul>
			<hr />
			<ul class="link-list">
				<li><router-link to="/about" class="btn btn-primary">About Me</router-link></li>
				<li><router-link to="/projects" class="btn">Projects</router-link></li>
				<li><router-link to="/contact" class="btn">Contact Me</router-link></li>
			</ul>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.home {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.title > * {
		font-family: Pacifico;
	}
	
	.description {
		font-size: 1.1em;
	}

	.fadeIn-enter-active, .fadeIn-leave {
		opacity: 1;
		transform: translateX(0);
		transition: all 0.3s;
	}

	.fadeIn-leave-active, .fadeIn-enter  {
		opacity: 0;
		transform: translateX(-50px);
		transition: all 0.3s;
	}

	@keyframes going {
		from {
			opacity: 1;
		}

		to {
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
