<template>
  <section id="accueil" class="hero-wrapper" data-aos="fade-up" data-aos-delay="500">
    <div class="hero" >
      <div class="hero-content">
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
    </div>
  </section>


</template>

<style scoped>
.hero-wrapper {
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero {
  width: 100%;
  height: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.592),
      rgba(255, 255, 255, 0.92)
    ),
    url('/herobg.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

.hero-content {
  background-color: rgba(255, 255, 255, 0.501);
  padding: 3rem;
  border: 1px solid var(--color-hover);
  border-radius: 1rem;
  max-width: 900px;
  box-shadow: var(--shadow);
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  font-family: var(--font-serif);
  color: var(--color-text);
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
}

.intro {
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.highlights {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.highlights li {
  margin: 0.5rem 0;
}

.btn {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 0.75rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;
}

.btn:hover {
  background-color: var(--color-hover);
  color: var(--color-black);
}
</style>
