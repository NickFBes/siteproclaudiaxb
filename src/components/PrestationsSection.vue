<template>
  <section id="prestations" class="section prestations">
    <h3 
      data-aos="fade-up"
      data-aos-offset="80"
      data-aos-duration="700"
    >
      {{ t('prestations.title') }}
    </h3>

    <div class="prestations-grid">
      <!-- Cours -->
      <div 
        class="card" 
        data-aos="fade-up" 
        data-aos-delay="100"
        data-aos-offset="80"
        data-aos-duration="700"
      >
        <h4>{{ t('prestations.courses.title') }}</h4>

        <ul class="card-list">
          <li>{{ t('prestations.courses.levels') }}</li>
          <li>{{ t('prestations.courses.duration') }}</li>

          <li>
            <strong>{{ t('prestations.courses.individual.label') }}</strong>
            {{ t('prestations.courses.individual.price') }}
          </li>

          <li>
            <strong>{{ t('prestations.courses.duo.label') }}</strong>
            {{ t('prestations.courses.duo.price') }}
          </li>

          <li>
            <strong>{{ t('prestations.courses.trio.label') }}</strong>
            {{ t('prestations.courses.trio.price') }}
          </li>

          <li>
            <strong>{{ t('prestations.courses.semiIntensive.label') }}</strong>
            {{ t('prestations.courses.semiIntensive.price') }}
          </li>

          <li>
            <strong>{{ t('prestations.courses.intensive.label') }}</strong>
            {{ t('prestations.courses.intensive.price') }}
          </li>
        </ul>

        <p class="price-note">
          <strong>{{ t('prestations.priceNote') }}</strong>
        </p>
      </div>

      <!-- Traductions -->
      <div 
        class="card" 
        data-aos="fade-up" 
        data-aos-delay="200"
        data-aos-offset="80"
        data-aos-duration="700"
      >
        <h4>{{ t('prestations.translations.title') }}</h4>

       
        <p>
          <strong>{{ t('prestations.translations.france.label') }}</strong>
          {{ t('prestations.translations.france.price') }}
          <br />
          <span class="card-note">
            {{ t('prestations.translations.france.note') }}
          </span>
        </p>

        <p class="subtitle">
          {{ t('prestations.translations.documentTypesTitle') }}
        </p>

        <ul class="card-list">
          <li>{{ t('prestations.translations.documents.birth') }}</li>
          <li>{{ t('prestations.translations.documents.identity') }}</li>
          <li>{{ t('prestations.translations.documents.contracts') }}</li>
          <li>{{ t('prestations.translations.documents.notary') }}</li>
          <li>{{ t('prestations.translations.documents.residence') }}</li>
          <li>{{ t('prestations.translations.documents.legal') }}</li>
          <li>{{ t('prestations.translations.documents.driving') }}</li>
        </ul>

        <p class="price-note">
          <strong>{{ t('prestations.priceNote') }}</strong>
        </p>
      </div>

      <!-- Services -->
      <div 
        class="card" 
        data-aos="fade-up" 
        data-aos-delay="300"
        data-aos-offset="80"
        data-aos-duration="700"
      >
        <h4>{{ t('prestations.services.title') }}</h4>

        <ul class="card-list">
          <li>{{ t('prestations.services.signature') }}</li>
          <li>{{ t('prestations.services.audio') }}</li>
        </ul>

        <p class="price-note">
          <strong>{{ t('prestations.priceNote') }}</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.prestations {
  --header-height: 20px;

  scroll-margin-top: calc(var(--header-height) + 20px);
  padding: calc(var(--header-height) + 3rem) 2rem 5rem;
  box-sizing: border-box;
}

.prestations h3 {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-family: var(--font-serif);
  text-align: center;
  color: var(--color-primary);
  margin-bottom: clamp(2rem, 5vw, 3rem);
  line-height: 1.15;
}

.prestations-grid {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
  align-items: stretch;
}

.card {
  background-color: var(--color-white);
  border-left: 6px solid var(--color-secondary);
  border-radius: 1rem;
  padding: clamp(1.5rem, 3vw, 2rem);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.14);
}

.card h4 {
  color: var(--color-primary);
  font-size: clamp(1.15rem, 3vw, 1.35rem);
  margin-bottom: 1.2rem;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.6rem;
  line-height: 1.3;
}

.card p {
  margin: 0.5rem 0 1rem;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-text);
}

.card-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text);
}

.card-list li {
  margin-bottom: 0.7rem;
  position: relative;
  padding-left: 1.35rem;
}

.card-list li::before {
  content: '✔';
  color: var(--color-secondary);
  position: absolute;
  left: 0;
  top: 0;
}

.card-note {
  display: inline-block;
  margin-top: 0.3rem;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--color-secondary);
}

.subtitle {
  font-weight: 700;
  color: var(--color-primary);
  margin-top: 1.3rem;
}

.price-note {
  margin-top: auto;
  padding-top: 1.5rem;
  font-size: 0.9rem;
  color: var(--color-secondary);
}

/* Tablet */
@media (max-width: 1024px) {
  .prestations-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .card:nth-child(3) {
    grid-column: 1 / -1;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .prestations {
    padding: calc(var(--header-height) + 2rem) 1rem 4rem;
  }

  .prestations-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card:nth-child(3) {
    grid-column: auto;
  }

  .card {
    padding: 1.5rem 1.2rem;
    border-left: 4px solid var(--color-secondary);
  }

  .card:hover {
    transform: none;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }

  .card h4 {
    text-align: center;
    margin-bottom: 1rem;
  }

  .card p,
  .card-list {
    font-size: 0.94rem;
  }

  .card-list li {
    padding-left: 1.25rem;
  }
}

/* Mobile pequeno */
@media (max-width: 420px) {
  .prestations {
    padding: calc(var(--header-height) + 1.5rem) 0.8rem 3.5rem;
  }

  .card {
    padding: 1.2rem 1rem;
    border-radius: 0.8rem;
  }

  .card h4 {
    font-size: 1.15rem;
  }

  .card p,
  .card-list {
    font-size: 0.9rem;
  }

  .price-note {
    font-size: 0.85rem;
  }
}
</style>