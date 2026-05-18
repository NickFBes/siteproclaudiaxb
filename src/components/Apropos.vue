<template>
  <section id="apropos" class="section apropos">
    <h3 class="section-title" data-aos="fade-up">
      {{ t('apropos.title') }}
    </h3>

    <div class="apropos-box" data-aos="fade-up" data-aos-delay="200">
      <img
        src="/fotoclaudia.jpg"
        :alt="t('apropos.imageAlt')"
        class="apropos-photo"
      />

      <div class="apropos-text">
        <h4>{{ t('apropos.name') }}</h4>

        <p>
          {{ t('apropos.description.role') }}<br /><br />

          {{ t('apropos.description.professor') }}<br /><br />

          {{ t('apropos.description.swornBrazil') }}<br /><br />

          {{ t('apropos.description.swornFrance') }}<br /><br />

          <em>{{ t('apropos.description.certifiedOne') }}</em><br /><br />

          <em>{{ t('apropos.description.certifiedTwo') }}</em>
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
.apropos {
  --header-height: 20px;

  scroll-margin-top: calc(var(--header-height) + 20px);
  padding: calc(var(--header-height) + 3rem) 2rem 5rem;
  box-sizing: border-box;
}

.section-title {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-family: var(--font-serif);
  color: var(--color-primary);
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 3rem);
  line-height: 1.15;
}

.apropos-box {
  max-width: 1100px;
  margin: 0 auto;
  border: 2px solid var(--color-accent-yellow, #f1c40f);
  border-radius: 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  background: var(--color-background, #fff);
  padding: clamp(1.5rem, 4vw, 2.5rem);

  display: grid;
  grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
  align-items: center;
  gap: clamp(1.5rem, 4vw, 2.5rem);
}

.apropos-photo {
  width: 100%;
  max-width: 320px;
  border-left: 6px solid var(--color-secondary);
  border-radius: 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  justify-self: center;
}

.apropos-text {
  min-width: 0;
}

.apropos-text h4 {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 4vw, 2rem);
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.apropos-text p {
  font-size: clamp(0.95rem, 2.5vw, 1rem);
  line-height: 1.8;
  color: var(--color-text);
}

.apropos-text em {
  font-style: italic;
  color: var(--color-secondary);
}

/* Tablet */
@media (max-width: 900px) {
  .apropos-box {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .apropos-photo {
    max-width: 280px;
  }

  .apropos-text p {
    text-align: left;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .apropos {
    padding: calc(var(--header-height) + 2rem) 1rem 4rem;
  }

  .apropos-box {
    padding: 1.5rem 1.2rem;
    gap: 1.5rem;
  }

  .apropos-photo {
    max-width: 240px;
    border-left: 4px solid var(--color-secondary);
  }

  .apropos-text h4 {
    text-align: center;
    margin-bottom: 1.2rem;
  }

  .apropos-text p {
    line-height: 1.7;
  }
}

/* Mobile pequeno */
@media (max-width: 420px) {
  .apropos {
    padding: calc(var(--header-height) + 1.5rem) 0.8rem 3.5rem;
  }

  .apropos-box {
    padding: 1.2rem 1rem;
    border-radius: 0.8rem;
  }

  .apropos-photo {
    max-width: 210px;
  }

  .apropos-text p {
    font-size: 0.93rem;
  }
}
</style>