<template>
  <div>
    <Particles
      id="tsparticles"
      class="absolute -z-10"
      :options="{
        background: {
          color: {
            value: '#ffffff',
          },
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
          opacity: 0,
        },
        backgroundMask: {
          cover: {
            opacity: 0,
          },
        },
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        interactivity: {
          events: {
            onClick: {
              mode: 'push',
            },
            onDiv: {
              selectors: '#repulse-div',
              mode: 'repulse',
            },
            onHover: {
              mode: 'connect',
              parallax: {
                force: 60,
              },
            },
            resize: false,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            grab: {
              distance: 400,
            },
          },
        },
        particles: {
          color: {
            value: 'random',
          },
          links: {
            blink: true,
            color: {
              value: '#ffffff',
            },
            distance: 150,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            enable: true,
            path: {},
            outModes: {
              bottom: 'out',
              left: 'out',
              right: 'out',
              top: 'out',
            },
            speed: 0.5,
            spin: {},
          },
          number: {
            density: {
              enable: true,
            },
            limit: 100,
            value: 50,
          },
          opacity: {
            random: {
              enable: true,
            },
            value: {
              min: 0.1,
              max: 0.5,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
            },
          },
          size: {
            random: {
              enable: true,
            },
            value: {
              min: 1,
              max: 5,
            },
            animation: {
              speed: 40,
              minimumValue: 0.1,
            },
          },
        },
      }"
    />

    <div class="h-screen">
      <Menu />
      <div
        class="flex items-center xl:mx-22rem md:mx-10rem sm:mx-8 mx-4 home-body"
      >
        <h1
          class="
            xl:text-7xl
            md:text-6xl
            sm:text-5xl
            text-5xl
            xl:font-900 xl:leading-snug
            leading-tight
            font-700
          "
        >
          Hi! I'm Arthur.
          <br />
          I'm a <span class="typed"></span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted } from '@nuxtjs/composition-api';
import Typed from 'typed.js';

export default defineComponent({
  name: 'Home',
  setup() {
    onMounted(async () => {
      await nextTick();

      const options = {
        strings: ['Developer.', 'Artist?', 'Player!'],
        typeSpeed: 66,
        backSpeed: 50,
        backDelay: 1500,
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = new Typed('.typed', options);
    });
  },
});
</script>

<style scoped lang="scss">
.home-body {
  height: calc(100vh - (3rem + 50px));
}
</style>
