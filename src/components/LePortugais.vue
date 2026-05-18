<template>
  <section id="le-portugais" class="section le-portugais">
    <h3 data-aos="fade-up">
      {{ t('lePortugais.title') }}
    </h3>

    <div class="langue-description" data-aos="fade-up" data-aos-delay="300">
      <p>
        {{ t('lePortugais.paragraphOne.beforeNumber') }}
        <strong>{{ t('lePortugais.paragraphOne.number') }}</strong>
        {{ t('lePortugais.paragraphOne.afterNumber') }}
        <strong>{{ t('lePortugais.paragraphOne.internet') }}</strong>.
      </p>

      <p>
        {{ t('lePortugais.paragraphTwo.beforeCountries') }}
        <strong>{{ t('lePortugais.paragraphTwo.countries') }}</strong>
        {{ t('lePortugais.paragraphTwo.middle') }}
        <strong>{{ t('lePortugais.paragraphTwo.region') }}</strong>
        {{ t('lePortugais.paragraphTwo.afterRegion') }}
      </p>

      <img
        src="/portugaisimg2.png"
        :alt="t('lePortugais.imageAlt')"
        class="lusophonie-img"
        loading="lazy"
      />

      <ul class="liste-pays">
        <li>
          <img src="https://flagcdn.com/ao.svg" width="25" :alt="t('lePortugais.countries.angola')" />
          {{ t('lePortugais.countries.angola') }}
        </li>

        <li>
          <img src="https://flagcdn.com/br.svg" width="25" :alt="t('lePortugais.countries.brazil')" />
          {{ t('lePortugais.countries.brazil') }}
        </li>

        <li>
          <img src="https://flagcdn.com/cv.svg" width="25" :alt="t('lePortugais.countries.capeVerde')" />
          {{ t('lePortugais.countries.capeVerde') }}
        </li>

        <li>
          <img src="https://flagcdn.com/gq.svg" width="25" :alt="t('lePortugais.countries.equatorialGuinea')" />
          {{ t('lePortugais.countries.equatorialGuinea') }}
        </li>

        <li>
          <img src="https://flagcdn.com/gw.svg" width="25" :alt="t('lePortugais.countries.guineaBissau')" />
          {{ t('lePortugais.countries.guineaBissau') }}
        </li>

        <li>
          <img src="https://flagcdn.com/mo.svg" width="25" :alt="t('lePortugais.countries.macao')" />
          {{ t('lePortugais.countries.macao') }}
        </li>

        <li>
          <img src="https://flagcdn.com/mz.svg" width="25" :alt="t('lePortugais.countries.mozambique')" />
          {{ t('lePortugais.countries.mozambique') }}
        </li>

        <li>
          <img src="https://flagcdn.com/pt.svg" width="25" :alt="t('lePortugais.countries.portugal')" />
          {{ t('lePortugais.countries.portugal') }}
        </li>

        <li>
          <img src="https://flagcdn.com/st.svg" width="25" :alt="t('lePortugais.countries.saoTome')" />
          {{ t('lePortugais.countries.saoTome') }}
        </li>

        <li>
          <img src="https://flagcdn.com/tl.svg" width="25" :alt="t('lePortugais.countries.timor')" />
          {{ t('lePortugais.countries.timor') }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.le-portugais {
  scroll-margin-top: 50px;
  padding: 6rem 2rem 4rem;
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

.lusophonie-img {
  border-left: 6px solid var(--color-secondary);
  margin: 2rem auto;
  max-width: 100%;
  width: 300px;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  display: block;
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

.liste-pays li {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
</style>