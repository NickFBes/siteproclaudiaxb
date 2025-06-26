<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const handleResize = () => {
  if (window.innerWidth > 768) {
    menuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header :class="['header', { scrolled }]">
    <nav class="nav">
      <div class="site-title">Claudia XATARA BONNET | Traductrice</div>

      <!-- Botão menu burger -->
      <button class="burger" @click="toggleMenu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>

      <!-- Links desktop -->
      <ul class="nav-links">
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li><RouterLink to="/portugais">Le Portugais</RouterLink></li>
        <li><RouterLink to="/prestations">Prestations</RouterLink></li>
        <li>
          <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4762383T4" target="_blank">
            CV
          </a>
        </li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>

    <!-- Menu mobile -->
    <ul v-if="menuOpen" class="nav-mobile">
      <li><RouterLink to="/" @click="toggleMenu">Accueil</RouterLink></li>
      <li><RouterLink to="/portugais" @click="toggleMenu">Le Portugais</RouterLink></li>
      <li><RouterLink to="/prestations" @click="toggleMenu">Prestations</RouterLink></li>
      <li>
        <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4762383T4" target="_blank" @click="toggleMenu">
          CV
        </a>
      </li>
      <li><RouterLink to="/contact" @click="toggleMenu">Contact</RouterLink></li>
    </ul>
  </header>
</template>


<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color: rgba(0, 151, 57, 0.9);
  color: var(--color-white);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.header.scrolled {
  background-color: rgba(0, 151, 57, 1);
}

.site-title {
  font-family: var(--font-cursive);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-white);
  padding: 0.4rem 0.8rem;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}


.site-title:hover {
  box-shadow: 0 0 10px var(--color-hover);
  border-color: var(--color-hover);
}


.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}


.nav-links {
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  list-style: none;
  align-items: center;
}

.nav-links li {
  display: flex;
  align-items: center;
}

.nav-links li > * {
  position: relative;
  padding: 0.5rem 0;
  color: var(--color-white);
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap; /* 🔒 evita quebra como "Le ↩ Portugais" */
  display: inline-block;
}

.nav-links li > *::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 3px;
  width: 0%;
  background-color: var(--color-hover);
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-links li > *:hover::after {
  width: 100%;
  left: 0;
}




/* Botão hamburguer */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 60;
  margin-left: auto; /* 👈 alinha para a direita sempre */
}


.burger span {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.burger span.open:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* Menu mobile */
.nav-mobile {
  position: absolute;
  top: 100%;
  right: 1rem;
  background-color: rgba(0, 151, 57, 0.97);
  border-radius: 0.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 1rem 1.5rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  animation: fadeIn 0.3s ease-out;
  z-index: 50;
  width: max-content;
  min-width: 180px;
}

.nav-mobile a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.nav-mobile a:hover {
  color: var(--color-hover);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsividade */
@media (max-width: 1024px) {
  .nav {
    gap: 0.5rem;
    flex-wrap: nowrap;
  }

  .nav-links {
    display: none;
  }

  .burger {
    display: flex;
  }

  .site-title {
    font-size: 1rem;
    max-width: 100%;
    flex-shrink: 1;
  }


 

}




</style>
