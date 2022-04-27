<template>
  <div class="home">
    <a class="switch-version" href="/">French version/Version Française</a>
    <div class="header">
      <img
        class="profile--pic"
        src="../assets/pic.jpeg"
        alt="photo profil cv Stephane Mercier"
      />
      <div class="title--subtitle">
        <h1 class="main--title">Stéphane MERCIER</h1>
        <h2 class="main--title__subtitle">Junior Web Developper</h2>
      </div>
    </div>
    <div class="about-project-container">
      <div class="about">
        <h2 class="about--title">About me :</h2>
        <p class="about--content">
          Passionate about Web Development and Coding, I've decided, in March
          2021, to take matters into hand and start this new career. After a 3
          months introduction to code with the EPFL Lausanne, I am accepted in
          the "Web Developper" promotion via
          <a href="www.openclassrooms.com">OpenClassrooms</a> which allows me to
          be certified after 7 months. Fond of clean and maintainable code in
          order to facilitate the understanding by my colleagues and ensure an
          easy and fluid User's Experience, I am always seeking for ways to
          better myself in order to gain new skills on the languages I am
          working with.
        </p>
      </div>
      <div class="project">
        <h2 class="project--title">Projects :</h2>
        <div class="project--content">
          <ul class="list">
            <li>-Model integration in HTML5 and CSS3,</li>
            <li>-Energize a web page with SASS Animations,</li>
            <li>-Optimization of an existing website (WCAG and SEO),</li>
            <li>
              -Creation of the front-end for an e-commerce site (Javascript),
            </li>
            <li>
              -Creating a Secure API for a Reviews App gourmet (NodeJs, Express,
              MongoDB),
            </li>
            <li>
              -Creation (Front and Back-end) of a corporate social network
              (Vue3, SQL).
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contact-cv-container">
      <div class="contact">
        <h2 class="contact--title">Contact :</h2>
        <ul class="contact-list">
          <li>Tel : <strong>+33 (0)6 42 23 28 02</strong></li>
          <li>
            <a href="mailto:stefane.mercier@gmail.com"
              >stefane.mercier@gmail.com</a
            >
          </li>
          <li>
            <i class="fa-brands fa-linkedin" />
            <a
              class="contact-link"
              href="https://www.linkedin.com/in/stephane-mercier-67419b72/"
              >LinkedIn</a
            >
          </li>
          <li>
            <i class="fa-brands fa-github"></i>
            <a class="contact-link" href="https://github.com/StephaneMercier"
              >GitHub</a
            >
          </li>
        </ul>
      </div>
      <div class="cv">
        <h2 class="cv--title">Resume :</h2>
        <a class="btn btn-primary" href="/resume"
          >Check out what I did before ---></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 18px;
  margin-top: -60px;
}
.switch-version {
  opacity: 0.5;
}
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
}

.about-project-container {
  display: flex;
}
.about {
  margin: 5px 5px;
  width: 50%;
  background-color: rgb(225, 218, 218);
}
.about--content {
  white-space: wrap;
  padding: 10px;
  text-align: left;
}
.icon {
  color: black;
}
.project {
  margin: 5px 5px;
  width: 50%;
}
.project--content {
  display: flex;
  text-align: left;
}
.contact-cv-container {
  display: flex;
}
.contact {
  margin: 5px 5px;
  width: 50%;
}
.cv {
  margin: 5px 5px;
  background-color: #bdc9f0;
  width: 50%;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: inherit;
  &:hover {
    color: black;
    font-weight: bold;
  }
}
.contact-link {
  margin-left: 10px;
}
img {
  width: 200px;
}
li {
  margin-bottom: 10px;
}
.btn {
  line-height: 40px;
  font-size: 23px;
}
</style>