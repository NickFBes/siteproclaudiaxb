<template>
  <section id="contact" class="section contact">
    <h3 data-aos="fade-up">Contact</h3>

    <div class="contact-content" data-aos="fade-up" data-aos-delay="300">
      <p>Envoyez votre demande à :</p>
      <p>
        <a href="mailto:cxatara@gmail.com">cxatara@gmail.com</a>
      </p>
      <p>Adresse : 75 rue Marsye Bastié, 69008 Lyon</p>
    </div>
  </section>
</template>

<style scoped>
.contact {
  text-align: center;
  color: var(--color-text);
}

.contact h3 {
  font-size: 2rem;
  font-family: var(--font-serif);
  color: var(--color-primary);
  margin-bottom: 2rem;
}

.contact-content {
  font-size: 1rem;
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto;
}

.contact a {
  color: var(--color-primary);
  text-decoration: underline;
}
</style>
