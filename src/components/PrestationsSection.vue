<template>
  <section id="prestations" class="section prestations">
    <h3 data-aos="fade-up">Prestations</h3>

    <div class="prestations-grid" data-aos="fade-up">
      <!-- Cours -->
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

      <!-- Traductions -->
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

      <!-- Services -->
      <div class="card" data-aos="fade-up" data-aos-delay="500">
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
</template>

<style scoped>

.prestations {
  padding: 6rem 2rem 4rem;
}

.prestations h3 {
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
</style>
