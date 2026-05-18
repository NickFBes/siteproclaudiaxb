<template>
  <section id="contact" class="section contact-page">
    <h3
      data-aos="fade-up"
      data-aos-offset="80"
      data-aos-duration="700"
    >
      {{ t('contact.title') }}
    </h3>

    <div
      class="form-card"
      data-aos="fade-up"
      data-aos-delay="120"
      data-aos-offset="80"
      data-aos-duration="700"
    >
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

        <div class="form-group form-group-full">
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

        <div class="form-group form-group-full">
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
  --header-height: 20px;

  scroll-margin-top: calc(var(--header-height) + 20px);
}

.contact-page {
  padding: calc(var(--header-height) + 3rem) 2rem 5rem;
  box-sizing: border-box;
}

.contact-page h3 {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-family: var(--font-serif);
  text-align: center;
  color: var(--color-primary);
  margin-bottom: clamp(2rem, 5vw, 3rem);
  line-height: 1.15;
}

.form-card {
  background-color: var(--color-white);
  border-left: 6px solid var(--color-secondary);
  border-radius: 1rem;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  max-width: 760px;
  margin: 0 auto;
}

form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group-full {
  grid-column: 1 / -1;
}

label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

input,
textarea,
select {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-secondary);
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
  color: var(--color-text);
  background-color: var(--color-white);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;
}

textarea {
  min-height: 140px;
  resize: vertical;
}

input:focus,
textarea:focus,
select:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.06);
  outline: none;
}

.btn {
  grid-column: 1 / -1;
  justify-self: center;

  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 0.8rem 2.5rem;
  border-radius: 6px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.3s ease;
  margin-top: 0.5rem;
}

.btn:hover {
  background-color: var(--color-hover);
  color: var(--color-black);
  transform: translateY(-2px);
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.success-message,
.error-message {
  grid-column: 1 / -1;
  margin-top: 0.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
}

.success-message {
  color: #1f8f4d;
}

.error-message {
  color: #c0392b;
}

/* Mobile */
@media (max-width: 768px) {
  .contact-page {
    padding: calc(var(--header-height) + 2rem) 1rem 4rem;
  }

  .form-card {
    padding: 1.5rem 1.2rem;
    border-left: 4px solid var(--color-secondary);
  }

  form {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .form-group-full {
    grid-column: auto;
  }

  input,
  textarea,
  select {
    font-size: 0.95rem;
    padding: 0.75rem 0.9rem;
  }

  textarea {
    min-height: 130px;
  }

  .btn {
    width: 100%;
    justify-self: stretch;
    padding: 0.8rem 1.5rem;
  }

  .btn:hover {
    transform: none;
  }
}

/* Mobile pequeno */
@media (max-width: 420px) {
  .contact-page {
    padding: calc(var(--header-height) + 1.5rem) 0.8rem 3.5rem;
  }

  .form-card {
    padding: 1.2rem 1rem;
    border-radius: 0.8rem;
  }

  label {
    font-size: 0.92rem;
  }

  input,
  textarea,
  select {
    font-size: 0.92rem;
  }
}
</style>