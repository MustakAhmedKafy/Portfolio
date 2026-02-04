<template>
  <section id="services"
    class="bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-900 py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">

    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed">
      </div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20" data-aos="fade-up">
        <div
          class="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 bg-purple-100 dark:bg-purple-900/30 rounded-full">
          <Icon icon="ph:gear-six-duotone" class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2" />
          <span
            class="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide">My Services</span>
        </div>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
          Services I <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">Offer</span>
        </h2>
        <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
          Crafting pixel-perfect, accessible interfaces with modern tools and frameworks
        </p>
      </div>

      <!-- Services/Skills Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16">
        <div v-for="(skill, index) in skills" :key="skill.name"
          class="group"
          data-aos="fade-up" :data-aos-delay="index * 80">

          <!-- Animated Gradient Border Card -->
          <div class="gradient-border-card relative p-[2px] rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            :style="`--gradient-from: ${skill.gradientFrom}; --gradient-to: ${skill.gradientTo}`">

            <!-- Inner Card -->
            <div class="relative h-full p-5 md:p-6 rounded-2xl bg-white dark:bg-slate-900">
              <div class="flex flex-col h-full">
                <!-- Icon -->
                <div class="mb-4">
                  <div :class="[
                    'w-11 h-11 rounded-lg flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110',
                    skill.iconBg
                  ]">
                    <Icon :icon="skill.icon" class="w-5 h-5" />
                  </div>
                </div>

                <!-- Title -->
                <h3 class="text-base md:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {{ skill.name }}
                </h3>

                <!-- Description -->
                <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {{ skill.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Competencies - Glass Cards -->
      <div class="mb-16" data-aos="fade-up" data-aos-delay="100">
        <!-- Section Title -->
        <div class="text-center mb-10">
          <h3 class="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold">
            <span class="w-12 h-[2px] bg-gradient-to-r from-transparent to-purple-500"></span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">Core Competencies</span>
            <span class="w-12 h-[2px] bg-gradient-to-l from-transparent to-purple-500"></span>
          </h3>
        </div>

        <!-- Glass Cards Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          <div v-for="(competency, index) in competencies" :key="competency.name"
            class="group relative"
            :style="{ animationDelay: `${index * 100}ms` }">

            <!-- Glass Card -->
            <div class="relative h-full p-4 md:p-5 rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-slate-800/50 border border-white/60 dark:border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">

              <!-- Gradient Border Glow -->
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <!-- Shine Effect -->
              <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>

              <div class="relative z-10 flex flex-col items-center">
                <!-- Circular Progress -->
                <div class="relative w-20 h-20 md:w-24 md:h-24 mb-3">
                  <svg class="w-full h-full -rotate-90" viewBox="0 0 100 100" fill="none">
                    <!-- Background Circle -->
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke-width="6"
                      class="stroke-slate-200 dark:stroke-slate-700"
                    />
                    <!-- Progress Circle -->
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      :stroke="`url(#grad-${index})`"
                      stroke-width="6"
                      stroke-linecap="round"
                      class="transition-all duration-1000 ease-out"
                      :stroke-dasharray="264"
                      :stroke-dashoffset="isVisible ? 264 - (264 * competency.level) / 100 : 264"
                    />
                    <defs>
                      <linearGradient :id="`grad-${index}`" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#8B5CF6" />
                        <stop offset="50%" stop-color="#D946EF" />
                        <stop offset="100%" stop-color="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <!-- Percentage -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-lg md:text-xl font-bold text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {{ competency.level }}<span class="text-sm">%</span>
                    </span>
                  </div>
                </div>

                <!-- Label -->
                <span class="text-[10px] md:text-xs font-semibold text-slate-600 dark:text-slate-300 text-center leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {{ competency.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools Section -->
      <div class="text-center" data-aos="fade-up" data-aos-delay="200">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 dark:bg-purple-500/20 rounded-full mb-8 border border-purple-500/20">
          <Icon icon="mdi:tools" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">Tools & Workflow</h3>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <div v-for="(tool, index) in tools" :key="tool"
            class="group px-6 py-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-purple-50 dark:hover:bg-purple-950/30 hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden"
            :style="{ animationDelay: `${index * 50}ms` }">
            <span class="relative z-10">{{ tool }}</span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const hoveredSkill = ref(null)
const isVisible = ref(false)

const skills = [
  {
    name: 'Web Design',
    icon: 'mdi:palette-outline',
    description: 'Designing smart, engaging websites that connect people with your brand.',
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
    gradientFrom: '#a855f7',
    gradientTo: '#ec4899'
  },
  {
    name: 'Frontend Development',
    icon: 'mdi:code-braces',
    description: 'Building interactive, high-performance web applications with React, Vue, and modern JavaScript.',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    gradientFrom: '#3b82f6',
    gradientTo: '#06b6d4'
  },
  {
    name: 'SEO Optimization',
    icon: 'mdi:chart-line',
    description: 'Optimizing your website to dominate search results and attract the right audience.',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
    gradientFrom: '#10b981',
    gradientTo: '#14b8a6'
  },
  {
    name: 'Responsive Design',
    icon: 'mdi:responsive',
    description: 'Building fluid, adaptive layouts that look stunning on every device and screen size.',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
    gradientFrom: '#f97316',
    gradientTo: '#ef4444'
  },
  {
    name: 'UI/UX Design',
    icon: 'mdi:vector-square',
    description: 'Crafting intuitive, beautiful interfaces that users love to interact with.',
    iconBg: 'bg-gradient-to-br from-violet-500 to-purple-500',
    gradientFrom: '#8b5cf6',
    gradientTo: '#a855f7'
  },
  {
    name: 'Performance Optimization',
    icon: 'mdi:speedometer',
    description: 'Optimizing load times, bundle sizes, and runtime performance for blazing fast experiences.',
    iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-500',
    gradientFrom: '#f59e0b',
    gradientTo: '#eab308'
  }
]

const competencies = [
  { name: 'UI/UX Implementation', level: 95 },
  { name: 'Component Architecture', level: 92 },
  { name: 'State Management', level: 90 },
  { name: 'Cross-Browser Compatibility', level: 88 },
  { name: 'API Integration', level: 85 }
]

const tools = [
  'VS Code',
  'Git & GitHub',
  'Figma',
  'Chrome DevTools',
  'Webpack',
  'Vite',
  'npm/yarn',
  'ESLint',
  'Prettier',
  'Postman'
]

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})
</script>

<style scoped>
/* Animated Gradient Border */
@keyframes borderRotate {
  0% {
    --angle: 0deg;
  }
  100% {
    --angle: 360deg;
  }
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.gradient-border-card {
  background: conic-gradient(
    from var(--angle),
    var(--gradient-from),
    var(--gradient-to),
    transparent,
    var(--gradient-from)
  );
  animation: borderRotate 4s linear infinite;
  box-shadow: 0 0 15px color-mix(in srgb, var(--gradient-from) 25%, transparent);
}

.gradient-border-card:hover {
  animation: borderRotate 2s linear infinite;
  box-shadow: 0 0 30px color-mix(in srgb, var(--gradient-from) 50%, transparent);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.1;
  }

  50% {
    opacity: 0.2;
  }
}

.animate-fade-in {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 25s ease-in-out infinite;
  animation-delay: 5s;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.group {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Smooth number counting would require additional JS, but the transition effect works well */
</style>