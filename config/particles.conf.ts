export default {
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
};
