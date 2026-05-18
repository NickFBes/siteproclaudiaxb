<template>
  <section id="prestations" class="section prestations">
    <h3 data-aos="fade-up">
      {{ t('prestations.title') }}
    </h3>

    <div class="prestations-grid" data-aos="fade-up">
      <!-- Cours -->
      <div class="card" data-aos="fade-up" data-aos-delay="300">
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
      <div class="card" data-aos="fade-up" data-aos-delay="400">
        <h4>{{ t('prestations.translations.title') }}</h4>

        <p>
          <strong>{{ t('prestations.translations.brazil.label') }}</strong>
          {{ t('prestations.translations.brazil.price') }}
          <br />
          <span class="card-note">
            {{ t('prestations.translations.brazil.note') }}
          </span>
        </p>

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
      <div class="card" data-aos="fade-up" data-aos-delay="500">
        <h4>{{ t('prestations.services.title') }}</h4>

        <ul class="card-list">
          <li>{{ t('prestations.services.signature') }}</li>
          <li>{{ t('prestations.services.apostille') }}</li>
          <li>{{ t('prestations.services.audio') }}</li>
          <li>{{ t('prestations.services.assistance') }}</li>
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
  scroll-margin-top: 50px;
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
  border-left: 6px solid var(--color-secondary);
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

.subtitle {
  font-weight: 700;
  color: var(--color-primary);
}

.price-note {
  margin-top: 1.5rem;
  font-size: 0.9rem;
}
</style>