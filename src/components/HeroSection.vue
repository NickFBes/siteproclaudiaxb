<template>
  <section id="accueil" class="hero-wrapper" data-aos="fade-up" data-aos-delay="500">
    <div class="hero">
      <div class="hero-content">
        <h2>Traductions<br />& Cours de Langues</h2>
        <p class="subtitle">Portugais ↔ Français</p>

        <p class="intro">
          Claudia Xatara Bonnet est traductrice  
          et professeure expérimentée de langues depuis plus de 30 ans. 
          Elle vous accompagne dans vos démarches officielles et votre apprentissage linguistique.
        </p>

        <ul class="highlights">
          <li><i class="fas fa-file-signature"></i> Traductions valables en France et au Brésil</li>
          <li><i class="fas fa-chalkboard-user"></i> Cours personnalisés pour tous niveaux</li>
          <li><i class="fas fa-stopwatch"></i> Services rapides et devis gratuits</li>
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
  color: var(--color-text);
}

.highlights {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
}

.highlights li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: center;
}

.highlights i {
  color: var(--color-black);
  font-size: 1.8rem;
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
