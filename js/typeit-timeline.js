new TypeIt("#title", {
  strings: ["Develop Timeline"],
  startDelay: 1000,
  speed: 80,
  waitUntilVisible: true,
  afterComplete: function (instance) {
    instance.destroy();
  },
}).go();
