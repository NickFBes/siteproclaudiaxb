<template>
  <section class="section contact-page" id="contact">
    <h3 data-aos="fade-up">Contact & Demande de Devis</h3>

    <div class="form-card" data-aos="fade-up" data-aos-delay="300">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="fullname">Nom et Prénom</label>
          <input type="text" id="fullname" v-model="form.fullname" required />
        </div>

        <div class="form-group">
          <label for="email">Adresse e-mail</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>

        <div class="form-group">
          <label for="phone">Téléphone</label>
          <input type="tel" id="phone" v-model="form.phone" required />
        </div>

        <div class="form-group">
          <label for="deadline">Délai souhaité ou date butoir</label>
          <input type="date" id="deadline" v-model="form.deadline" required />
        </div>

        <div class="form-group">
          <label for="subject">Sujet</label>
          <select id="subject" v-model="form.subject" required>
            <option disabled value="">Choisir...</option>
            <option>Traduction certifiée</option>
            <option>Demande de cours</option>
            <option>Assistance linguistique</option>
            <option>Autre</option>
          </select>
        </div>

        <div class="form-group">
          <label for="message">Message – détaillez votre besoin et les documents à traduire</label>
          <textarea id="message" rows="5" v-model="form.message" required></textarea>
        </div>

        <button type="submit" class="btn">Envoyer la demande</button>
      </form>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  fullname: '',
  email: '',
  phone: '',
  deadline: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  alert(`Merci ${form.value.fullname}, votre demande a été envoyée !`)
  form.value = {
    fullname: '',
    email: '',
    phone: '',
    deadline: '',
    subject: '',
    message: ''
  }
}
</script>


<style scoped>
.contact-page {
  padding: 6rem 2rem 4rem;
}

.contact-page h3 {
  font-size: 2rem;
  font-family: var(--font-serif);
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 2rem;
}

.form-card {
  background-color: var(--color-white);
  border-left: 6px solid var(--color-primary);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto 3rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
}

label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

input,
textarea,
select {
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-secondary);
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
  color: var(--color-text);
  transition: border-color 0.3s;
}

input:focus,
textarea:focus,
select:focus {
  border-color: var(--color-primary);
  outline: none;
}

.btn {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 1rem;
}

.btn:hover {
  background-color: var(--color-hover);
  color: var(--color-black);
}

</style>
