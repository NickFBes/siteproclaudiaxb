<template>
  <section id="le-portugais" class="section le-portugais">
    <h3 data-aos="fade-up">Le Portugais</h3>

    <div class="langue-description" data-aos="fade-up" data-aos-delay="300">
      <p>
        Le portugais est la langue officielle de plus de <strong>260 millions</strong> de personnes
        à travers le monde. C’est la <strong>5e langue la plus utilisée sur Internet</strong>.
      </p>
      <p>
        Elle est parlée dans <strong>9 pays membres de l’ONU</strong> et dans <strong>1 région administrative spéciale</strong>
        de la République populaire de Chine.
      </p>

      <img
        src="/portugaisimg2.png"
        alt="Carte des pays lusophones"
        class="lusophonie-img"
        loading="lazy"
      />

      <ul class="liste-pays">
        <li><img src="https://flagcdn.com/ao.svg" width="25" alt="Angola" /> Angola</li>
        <li><img src="https://flagcdn.com/br.svg" width="25" alt="Brésil" /> Brésil</li>
        <li><img src="https://flagcdn.com/cv.svg" width="25" alt="Cap-Vert" /> Cap-Vert</li>
        <li><img src="https://flagcdn.com/gq.svg" width="25" alt="Guinée équatoriale" /> Guinée équatoriale</li>
        <li><img src="https://flagcdn.com/gw.svg" width="25" alt="Guinée-Bissau" /> Guinée-Bissau</li>
        <li><img src="https://flagcdn.com/mo.svg" width="25" alt="Macao" /> Macao</li>
        <li><img src="https://flagcdn.com/mz.svg" width="25" alt="Mozambique" /> Mozambique</li>
        <li><img src="https://flagcdn.com/pt.svg" width="25" alt="Portugal" /> Portugal</li>
        <li><img src="https://flagcdn.com/st.svg" width="25" alt="São Tomé et Príncipe" /> São Tomé et Príncipe</li>
        <li><img src="https://flagcdn.com/tl.svg" width="25" alt="Timor-Leste" /> Timor-Leste</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.le-portugais {
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
</style>
