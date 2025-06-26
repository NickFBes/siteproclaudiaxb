<script setup>
import { ref, onMounted, onUnmounted } from 'vue'




const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const handleResize = () => {
  if (window.innerWidth > 768) {
    menuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>



<template>
  <div>
   <!-- Header -->
<header class="header">
  <nav class="nav">
    <div class="site-title">Claudia XATARA BONNET | Traductrice</div>

    <!-- Botão menu burguer (visível apenas no mobile) -->
    <button class="burger" @click="toggleMenu">
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
    </button>

    <!-- Menu normal para desktop -->
    <ul class="nav-links">
      <li><a href="#accueil">Accueil</a></li>
      <li><a href="#apropos">À propos</a></li>
      <li><a href="#le-portugais">Le Portugais</a></li>
      <li><a href="#prestations">Prestations</a></li>
      <li><a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4762383T4">CV</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Lista de links MOBILE flutuante -->
<ul v-if="menuOpen" class="nav-mobile">
  <li><a href="#accueil" @click="toggleMenu">Accueil</a></li>
  <li><a href="#apropos" @click="toggleMenu">À propos</a></li>
  <li><a href="#le-portugais" @click="toggleMenu">Le Portugais</a></li>
  <li><a href="#prestations" @click="toggleMenu">Prestations</a></li>
  <li><a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4762383T4" @click="toggleMenu">CV</a></li>
  <li><a href="#contact" @click="toggleMenu">Contact</a></li>
</ul>
</header>



    <!-- Hero Section -->
<section id="accueil" class="hero no-bg">
  <div class="hero-content" data-aos="fade-up">
    <h2>Traductions<br />& Cours de Langues</h2>
    <p class="subtitle">Portugais ↔ Français</p>

    <p class="intro">
      Claudia Xatara Bonnet est traductrice  
      et professeure expérimentée de langues depuis plus de 30 ans. 
      Elle vous accompagne dans vos démarches officielles et votre apprentissage linguistique.
    </p>

    <ul class="highlights">
      <li>✔ Traductions valables en France et au Brésil</li>
      <li>✔ Cours personnalisés pour tous niveaux</li>
      <li>✔ Services rapides et devis gratuits</li>
    </ul>

    <a href="#contact" class="btn">Demander un devis</a>
  </div>
</section>

<!-- Le Portugais Section -->
<section id="le-portugais" class="section le-portugais">
  <h3 data-aos="fade-up">Le Portugais</h3>
  <div class="langue-description" data-aos="fade-up" data-aos-delay="300">
    <p>
      Le portugais est la langue officielle de plus de <strong>260 millions</strong> de personnes
      à travers le monde. C’est la <strong>5e langue la plus utilisée sur Internet</strong>.
    </p>
    <p>
      Elle est parlée dans <strong>9 pays membres de l’ONU</strong> et dans <strong>1 région administrative spéciale</strong>
      de la République populaire de Chine.
    </p>

    <img src="/portugaisimg2.png" alt="Carte des pays lusophones"
         class="lusophonie-img" loading="lazy" />

    <ul class="liste-pays">
      <li><img
  src="https://flagcdn.com/ao.svg"
  width="25"
  alt="Angola"> Angola</li>
      <li><img
  src="https://flagcdn.com/br.svg"
  width="25"
  alt="Brésil"> Brésil</li>
      <li><img
  src="https://flagcdn.com/cv.svg"
  width="25"
  alt="Cap-Vert"> Cap-Vert</li>
      <li><img
  src="https://flagcdn.com/gq.svg"
  width="25"
  alt="Guinée équatoriale"> Guinée équatoriale</li>
      <li><img
  src="https://flagcdn.com/gw.svg"
  width="25"
  alt="Guinée-Bissau"> Guinée-Bissau</li>
      <li><img
  src="https://flagcdn.com/mo.svg"
  width="25"
  alt="Macao"> Macao</li>
      <li><img
  src="https://flagcdn.com/mz.svg"
  width="25"
  alt="Mozambique"> Mozambique</li>
      <li><img
  src="https://flagcdn.com/pt.svg"
  width="25"
  alt="Portugal"> Portugal</li>
      <li><img
  src="https://flagcdn.com/st.svg"
  width="25"
  alt="São Tomé et Príncipe"> São Tomé et Príncipe</li>
      <li><img
  src="https://flagcdn.com/tl.svg"
  width="25"
  alt="Timor-Leste">Timor-Leste</li>
    </ul>
  </div>
</section>



   <!-- Prestations Section atualizada -->
<section id="prestations" class="section prestations">
  <h3 data-aos="fade-up">Prestations</h3>

  <div class="prestations-grid">

    <!-- Cours de langues -->
    <div class="card" data-aos="fade-up" data-aos-delay="300">
      <h4>Cours de portugais et français</h4>
      <ul class="card-list">
        <li>Tous niveaux et objectifs</li>
        <li>Durée définie par l'élève</li>
        <li><strong>Individuel</strong> : 30 €/h</li>
        <li><strong>Duo</strong> : 20 €/h par élève</li>
        <li><strong>Trio</strong> : 15 €/h par élève</li>
        <li><strong>Semi-intensif</strong> (2h/jour ou 10h/semaine, 22 jours) : 440 €/mois</li>
        <li><strong>Intensif</strong> (3h/jour ou 15h/semaine, 22 jours) : 660 €/mois</li>
        <li>Applications : WhatsApp, E-mail</li>
      </ul>
    </div>

    <!-- Traductions certifiées -->
    <div class="card" data-aos="fade-up" data-aos-delay="400">
      <h4>Traductions certifiées</h4>
      <p><strong>Brésil :</strong> 150–200 R$/lauda (1000 caractères)<br /><span class="card-note">JUCESP – São Paulo</span></p>
      <p><strong>France :</strong> 0,35 €/mot ou 50–60 €/page (250 mots)<br /><span class="card-note">Cour d'appel de Lyon</span></p>
      <p class="subtitle">Types de documents :</p>
      <ul class="card-list">
        <li>Actes de naissance, mariage ou décès</li>
        <li>Passeports, cartes d'identité</li>
        <li>Contrats, jugements, diplômes</li>
        <li>Documents notariés, médicaux, professionnels</li>
        <li>Demandes de carte de séjour, naturalisation, regroupement familial</li>
        <li>Textes juridiques, scientifiques, littéraires</li>
        <li>Échange de permis de conduire</li>
      </ul>
    </div>

    <!-- Services complémentaires -->
    <div class="card" data-aos="fade-up" data-aos-delay="600">
      <h4>Services complémentaires</h4>
      <ul class="card-list">
        <li>Légalisation de signature : 10 €</li>
        <li>Apostille (via notaires – France, dès 01/05/2025)</li>
        <li>Transcription audio : 80 €/h d'enregistrement</li>
        <li>Assistance administrative et linguistique</li>
      </ul>
    </div>
  </div>
</section>





    <!-- Contact Section -->
    <section id="contact" class="section contact">
      <h3>Contact</h3>
      <p>Envoyez votre demande à : <br />
        <a href="mailto:cxatara@gmail.com">cxatara@gmail.com</a>
      </p>
      <p>Adresse : 75 rue Marsye Bastié, 69008 Lyon</p>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 Claudia Xatara Bonnet. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 68px;
  width: 100%;
  z-index: 50;
  background-color: rgba(0, 151, 57, 0.9); /* var(--color-primary) com opacidade */
  color: var(--color-white);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  
}

.site-title {
  font-family: var(--font-cursive);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-white);
  
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.nav-links {
  display: flex;
  gap: 2rem;
  font-size: 1rem;
  font-weight: 600;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  transition: color 0.3s ease;
}



/* Botão hambúrguer */
/* Ícone burger */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 60;
}

.burger span {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.burger span.open:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* Menu flutuante abaixo do burguer */
.nav-mobile {
  position: absolute;
  top: 100%;
  right: 1rem;
  background-color: rgba(0, 151, 57, 0.97);
  border-radius: 0.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 1rem 1.5rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  animation: fadeIn 0.3s ease-out;
  z-index: 50;
  width: max-content;
  min-width: 180px;
}

.nav-mobile a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.nav-mobile a:hover {
  color: var(--color-hover);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsividade */
@media (max-width: 1024px) {
   .nav {
    flex-direction: row;
    align-items: flex-start;
  }
  
  .nav-links {
    display: none;
  }

  .burger {
    display: flex;
  }
}


.hero {
  min-height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.592),
      rgba(255, 255, 255, 0.92)
    ),
    url('/herobg.png') center/cover no-repeat;
  color: var(--color-text);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
  text-align: center;
}

.hero-content {
  background-color: rgba(255, 255, 255, 0.501); /* branco translúcido */
  padding: 3rem;
  border: 1px solid var(--color-hover);
  border-radius: 1rem;
  max-width: 900px;
  box-shadow: var(--shadow);
}

.hero-content h2 {
  font-size: 2.5rem;
  font-family: var(--font-serif);
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.subtitle {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
}

.intro {
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.highlights {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.highlights li {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.hero-content a.btn {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 0.75rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;
}

.hero-content a.btn:hover {
  background-color: var(--color-hover);
  color: var(--color-black);
}


.section {
  padding: 5rem 1.5rem;
}

.le-portugais h3 {
  font-size: 2rem;
  font-family: var(--font-serif);
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 2rem;
}

.langue-description {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text);
}

.langue-description strong {
  color: var(--color-primary);
}

.liste-pays {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 2rem;
  margin-top: 2rem;
  padding: 0;
  list-style: none;
  font-weight: 600;
  font-size: 1rem;
}

.lusophonie-img {
  margin: 2rem auto;
  max-width: 100%;
  width: 300px;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  display: block;
}



.prestations h3,
.contact h3 {
  font-size: 2rem;
  font-family: var(--font-serif);
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 3rem;
}

.prestations-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  margin-top: 3rem;
}

@media (min-width: 640px) {
  .prestations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .prestations-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  background-color: var(--color-white);
  border-left: 6px solid var(--color-primary);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card h4 {
  color: var(--color-primary);
  font-size: 1.3rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.5rem;
}

.card p {
  margin: 0.5rem 0 1rem;
  font-size: 0.95rem;
  color: var(--color-text);
}

.card-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text);
}

.card-list li {
  margin-bottom: 0.6rem;
  position: relative;
  padding-left: 1.2rem;
}

.card-list li::before {
  content: '✔';
  color: var(--color-secondary);
  position: absolute;
  left: 0;
}

.card-note {
  font-size: 0.8rem;
  color: var(--color-secondary);
}




.contact a {
  color: var(--color-primary);
  text-decoration: underline;
}


.footer {
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 0.875rem;
  padding: 0.5rem;
  text-align: center;
}
</style>
