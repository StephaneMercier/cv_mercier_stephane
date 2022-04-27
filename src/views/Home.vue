<template>
  <div class="home">
    <a class="switch-version" href="/english-version"
      >Version Anglaise/English version</a
    >
    <div class="header">
      <img
        class="profile--pic"
        src="../assets/pic.jpeg"
        alt="photo profil cv Stephane Mercier"
      />
      <div class="title--subtitle">
        <h1 class="main--title">Stéphane MERCIER</h1>
        <h2 class="main--title__subtitle">Développeur Web Junior</h2>
      </div>
    </div>
    <div class="about-project-container">
      <div class="about">
        <h2 class="about--title">À propos :</h2>
        <p class="about--content">
          Passionné de Développement Web, je décide en Mars 2021 de sauter le
          pas et d'entamer ma reconversion professionnelle dans ce domaine.
          Après avoir suivi une introduction au code avec l'EPFL de Lausanne
          durant 3 mois, j'obtiens ensuite une place dans la promotion
          "Développeur Web" chez
          <a href="www.openclassrooms.com">OpenClassrooms</a> qui me permettra
          d'obtenir mon diplôme après 7 mois de formation. Aimant le code simple
          et maintenable afin d'en faciliter la compréhension par mes
          collaborateurs et d'assurer une expérience utilisateur fluide et
          agréable, je suis constamment en recherche d'amélioration afin de
          monter toujours plus en compétence dans les technologies et langages
          avec lesquels je travaille.
        </p>
      </div>
      <div class="project">
        <h2 class="project--title">Réalisations :</h2>
        <div class="project--content">
          <ul class="list">
            <li>-Intégration d'une maquette en HTML5 et CSS3,</li>
            <li>-Dynamiser une page web avec des Animations SASS,</li>
            <li>-Optimisation d'un site web existant (WCAG et SEO),</li>
            <li>
              -Création du front-end pour un site e-commerce (Javascript),
            </li>
            <li>
              -Création d'une API sécurisée pour une application d'avis
              gastronomiques (NodeJs, Express, MongoDB),
            </li>
            <li>
              -Création (Front et Back-end) d'un réseau social d'entreprise
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
        <h2 class="cv--title">Curriculum Vitae :</h2>
        <a class="btn btn-primary" href="/resume"
          >Voir mes expériences professionnelles ---></a
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
  @media only screen and(max-width:768px) {
    display: flex;
    flex-direction: column;
  }
}
.about {
  word-wrap: break-word;
  margin: 5px 5px;
  width: 50%;
  background-color: rgb(225, 218, 218);
  @media only screen and(max-width:768px) {
    width: 100%;
    margin: 0;
  }
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
  @media only screen and(max-width:768px) {
    width: 100%;
    margin: 0;
  }
}
.project--content {
  display: flex;
  text-align: left;
}
.contact-cv-container {
  display: flex;
  @media only screen and(max-width:768px) {
    display: flex;
    flex-direction: column;
  }
}
.contact {
  margin: 5px 5px;
  width: 50%;
  @media only screen and(max-width:768px) {
    width: 100%;
    margin: 0 0 10px 0;
    border: 1px solid rgb(225, 218, 218);
  }
}
.cv {
  margin: 5px 5px;
  background-color: #bdc9f0;
  width: 50%;
  @media only screen and(max-width:768px) {
    width: 100%;
    margin: 0;
  }
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
