<template>
  <section id="accueil" class="hero">
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
</template>

<style scoped>
.hero {
  min-height: 100vh;
  padding: 6rem 2rem 4rem; /* espaçamento no topo para o header fixo */
  background: linear-gradient(
      rgba(255, 255, 255, 0.592),
      rgba(255, 255, 255, 0.92)
    ),
    url('/herobg.png') center/cover no-repeat;
  color: var(--color-text);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-content {
  background-color: rgba(255, 255, 255, 0.501);
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
