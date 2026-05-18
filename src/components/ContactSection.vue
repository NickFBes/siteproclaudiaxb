<template>
  <section id="contact" class="section contact-page">
    <h3 data-aos="fade-up">
      {{ t('contact.title') }}
    </h3>

    <div class="form-card" data-aos="fade-up" data-aos-delay="300">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="fullname">{{ t('contact.form.fullname') }}</label>
          <input type="text" id="fullname" v-model="form.fullname" required />
        </div>

        <div class="form-group">
          <label for="email">{{ t('contact.form.email') }}</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>

        <div class="form-group">
          <label for="phone">{{ t('contact.form.phone') }}</label>
          <input type="tel" id="phone" v-model="form.phone" required />
        </div>

        <div class="form-group">
          <label for="deadline">{{ t('contact.form.deadline') }}</label>
          <input type="date" id="deadline" v-model="form.deadline" required />
        </div>

        <div class="form-group">
          <label for="subject">{{ t('contact.form.subject') }}</label>

          <select id="subject" v-model="form.subject" required>
            <option disabled value="">
              {{ t('contact.form.choose') }}
            </option>

            <option :value="t('contact.form.options.certifiedTranslation')">
              {{ t('contact.form.options.certifiedTranslation') }}
            </option>

            <option :value="t('contact.form.options.courseRequest')">
              {{ t('contact.form.options.courseRequest') }}
            </option>

            <option :value="t('contact.form.options.linguisticAssistance')">
              {{ t('contact.form.options.linguisticAssistance') }}
            </option>

            <option :value="t('contact.form.options.other')">
              {{ t('contact.form.options.other') }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="message">
            {{ t('contact.form.message') }}
          </label>

          <textarea id="message" rows="5" v-model="form.message" required></textarea>
        </div>

        <button type="submit" class="btn" :disabled="isLoading">
          {{ isLoading ? t('contact.form.sending') : t('contact.form.submit') }}
        </button>

        <p v-if="successMessage" class="success-message">
          {{ successMessage }}
        </p>

        <p v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import emailjs from '@emailjs/browser'

const { t } = useI18n()

const form = ref({
  fullname: '',
  email: '',
  phone: '',
  deadline: '',
  subject: '',
  message: ''
})

const isLoading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const handleSubmit = async () => {
  isLoading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const templateParams = {
    fullname: form.value.fullname,
    email: form.value.email,
    phone: form.value.phone,
    deadline: form.value.deadline,
    subject: form.value.subject,
    message: form.value.message
  }

  try {
    await emailjs.send(serviceId, templateId, templateParams, {
      publicKey
    })

    successMessage.value = t('contact.messages.success', {
      name: form.value.fullname
    })

    form.value = {
      fullname: '',
      email: '',
      phone: '',
      deadline: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    console.error('Erreur EmailJS:', error)
    errorMessage.value = t('contact.messages.error')
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
#contact {
  scroll-margin-top: 50px;
}

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
  border-left: 6px solid var(--color-secondary);
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

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  margin-top: 1rem;
  color: #1f8f4d;
  font-weight: 600;
  text-align: center;
}

.error-message {
  margin-top: 1rem;
  color: #c0392b;
  font-weight: 600;
  text-align: center;
}
</style>