<template>
  <div class="about page">
    <div class="content">
      <section class="about-section">
        <h1 class="title">About Me</h1>
        <p class="text-muted description">Located in Singapore, I am a full-stack web developer who specializes in React. I am committed to high standards of web design, and I am always learning to expand my ever-growing skillset.</p>

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
        </ul>
        
        <ul class="link-list">
          <li>
            <a class="btn btn-primary" href="./resume.pdf" target="_blank" rel="noopener noreferrer">Download my Resume</a>
          </li>
          <li>
            <router-link to="/contact" class="btn">Get in touch</router-link>
          </li>
        </ul>
      </section>

      <section class="skills-section">
        <transition appear enter-active-class="fadeIn" enter-class="before-fadeIn">
          <div class="skills-container">
            <div class="skills-title">
              <img src="@/assets/images/front-end.svg" width="128px" height="128px"/>
              <h1>Front-End</h1>
            </div>
            <div class="skills-list">
              <p>HTML</p>
              <p>CSS/SCSS</p>
              <p>JavaScript</p>
              <p>Bootstrap</p>
              <p>React</p>
              <p>Vue</p>
            </div>
          </div>
        </transition>

        <transition appear enter-active-class="fadeIn" enter-class="before-fadeIn">
          <div class="skills-container">
            <div class="skills-title">
              <img src="@/assets/images/back-end.svg" width="128px" height="128px"/>
              <h1>Back-End</h1>
            </div>
            <div class="skills-list">
              <p>Node</p>
              <p>Express</p>
              <p>MongoDB</p>
              <p>PostgreSQL</p>
              <p>Flask</p>
            </div>
          </div>
        </transition>

        <transition appear enter-active-class="fadeIn" enter-class="before-fadeIn">
          <div class="skills-container">
            <div class="skills-title">
              <img src="@/assets/images/misc.svg" width="128px" height="128px"/>
              <h1>Miscellaneous</h1>
            </div>
            <div class="skills-list">
              <p>Version Control (Git)</p>
              <p>Photoshop/Figma</p>
              <p>Python</p>
              <p>Heroku</p>
              <p>Agile (Scrum and Kanban)</p>
            </div>
          </div>
        </transition>
      </section>

      <section>
        <router-link to="/projects" class="btn btn-primary">Projects →</router-link>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about {
    height: 100vh;
		display: flex;
		justify-content: center;
		text-align: center;
  }

  .about-section {
    max-width: 700px;

    .description {
      text-align: justify;
      font-size: 1.1em;
    }
  }

  .skills-container {
    font-size: 1.1em;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;

    &:not(:last-child) {
      border-bottom: 1px solid #ddd;
    }

    &:nth-child(2) {
      flex-flow: row-reverse;
    }
  }

  .before-fadeIn {
    opacity: 0;

    &:nth-child(2n + 1) {
      transform: translateX(-50px);
      opacity: 0;
    }
    
    &:nth-child(2) {
      transform: translateX(50px);
      opacity: 0;
    }
  }

  .fadeIn {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.2s ease-out;
    transition-delay: 0.1s;
  }

  @media screen and (max-width:533px) {
    .skills-container {
      display: block;
    }
  }
</style>
