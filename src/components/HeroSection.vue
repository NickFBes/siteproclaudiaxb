<template>
  <section id="accueil" class="hero-wrapper" data-aos="fade-up" data-aos-delay="500">
    <div class="hero">
      <div class="hero-content">
        <h2>
          {{ t('hero.titleLine1') }}<br />
          {{ t('hero.titleLine2') }}
        </h2>

        <p class="subtitle">
          {{ t('hero.subtitle') }}
        </p>

        <p class="intro">
          {{ t('hero.intro') }}
        </p>

        <ul class="highlights">
          <li>
            <i class="fas fa-file-signature"></i>
            {{ t('hero.highlights.translations') }}
          </li>

          <li>
            <i class="fas fa-chalkboard-user"></i>
            {{ t('hero.highlights.courses') }}
          </li>

          <li>
            <i class="fas fa-stopwatch"></i>
            {{ t('hero.highlights.fast') }}
          </li>
        </ul>

        <a href="#contact" class="btn" @click.prevent="goToContact">
          {{ t('hero.button') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const goToContact = () => {
  const contactSection = document.getElementById('contact')

  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
#accueil {
  scroll-margin-top: 90px;
}

.hero-wrapper {
  --header-height: 80px;

  min-height: 100svh;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: calc(var(--header-height) + 2rem) 2rem 4rem;
  box-sizing: border-box;
}

.hero {
  width: 100%;
  min-height: calc(100svh - var(--header-height));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
}

.hero-content {
  background-color: rgba(255, 255, 255, 0.501);
  padding: clamp(1.5rem, 4vw, 3rem);
  border: 1px solid var(--color-hover);
  border-radius: 1rem;
  max-width: 900px;
  width: 100%;
  box-shadow: var(--shadow);
  text-align: center;
}

h2 {
  font-size: clamp(1.9rem, 6vw, 2.5rem);
  font-family: var(--font-serif);
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.15;
}

.subtitle {
  font-size: clamp(1rem, 4vw, 1.25rem);
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
  display: inline-block;
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

/* Mobile */
@media (max-width: 768px) {
  .hero-wrapper {
    min-height: auto;
    padding: calc(var(--header-height) + 1.5rem) 1rem 3rem;
    align-items: flex-start;
  }

  .hero {
    min-height: auto;
    padding: 0;
  }

  .hero-content {
    padding: 1.5rem 1.2rem;
  }

  h2 {
    font-size: 1.9rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .intro {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  .highlights {
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }

  .highlights li {
    align-items: flex-start;
    text-align: left;
    justify-content: flex-start;
  }

  .highlights i {
    font-size: 1.4rem;
    min-width: 24px;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}

/* Mobile pequeno */
@media (max-width: 420px) {
  .hero-wrapper {
    padding-top: calc(var(--header-height) + 1rem);
  }

  .hero-content {
    padding: 1.2rem 1rem;
  }

  h2 {
    font-size: 1.65rem;
  }
}
</style>