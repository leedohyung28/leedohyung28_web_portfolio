new TypeIt("#title", {
  strings: ["Projects"],
  startDelay: 1000,
  speed: 80,
  waitUntilVisible: true,
  afterComplete: function (instance) {
    instance.destroy();
  },
}).go();
