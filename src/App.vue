<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
   <!-- Header -->
<header class="header">
  <nav class="nav">
    <div class="site-title">Claudia XATARA BONNET | Traductrice</div>
    <ul class="nav-links">
      <li><a href="#accueil">Accueil</a></li>
      <li><a href="#apropos">À propos</a></li>
      <li><a href="#le-portugais">Le Portugais</a></li>
      <li><a href="#prestations">Prestations</a></li>
      <li><a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4762383T4">CV</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
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
  <h3>Le Portugais</h3>
  <div class="langue-description" data-aos="fade-up">
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



    <!-- Prestations Section -->
    <section id="prestations" class="section prestations">
      <h3>Prestations</h3>
      <div class="prestations-grid">
        <div class="card" data-aos="fade-up" data-aos-delay="100">
          <h4>Traductions</h4>
          <p>Documents officiels, juridiques, administratifs et médicaux.</p>
        </div>
        <div class="card" data-aos="fade-up" data-aos-delay="200">
          <h4>Cours de portugais</h4>
          <p>Tous niveaux, individuels ou en petits groupes.</p>
        </div>
        <div class="card" data-aos="fade-up" data-aos-delay="300">
          <h4>Services complémentaires</h4>
          <p>Légalisation de signature, transcription audio, etc.</p>
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
  width: 100%;
  z-index: 50;
  background-color: rgba(0, 151, 57, 0.9); /* var(--color-primary) com opacidade */
  color: var(--color-white);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  
}

.site-title {
  font-family: var(--font-cursive);
  font-size: 1.8rem;
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

.logo {
  height: 80px;
  object-fit: contain;
}

.nav-links {
  display: flex;
  gap: 2rem;
  font-size: 1rem;
  font-weight: 600;
  list-style: none;
}

.nav-links a {
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--color-hover);
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
  padding: 4rem 2rem;
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
}

@media (min-width: 640px) {
  .prestations-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .prestations-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.card {
  background: var(--color-white);
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
}

.card h4 {
  color: var(--color-primary);
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 0.9rem;
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
