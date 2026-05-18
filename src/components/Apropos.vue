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
  scroll-margin-top: 50px;
  padding: 6rem 2rem 4rem;
  margin-top: 2.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-family: var(--font-serif);
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 3rem;
}

.apropos-box {
  max-width: 1100px;
  margin: 0 auto;
  border: 2px solid var(--color-accent-yellow, #f1c40f);
  border-radius: 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  background: var(--color-background, #fff);
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}

.apropos-photo {
  border-left: 6px solid var(--color-secondary);
  flex: 1 1 250px;
  max-width: 300px;
  border-radius: 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  width: 100%;
}

.apropos-text {
  flex: 2 1 500px;
}

.apropos-text h4 {
  font-family: var(--font-serif);
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}

.apropos-text p {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text);
}

.apropos-text em {
  font-style: italic;
  color: var(--color-secondary);
}

@media (max-width: 768px) {
  .apropos-box {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
}
</style>