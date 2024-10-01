new TypeIt("#korean-index-main", {
  speed: 150,
  waitUntilVisible: true,
  startDelay: 1000,
  afterComplete: function (instance) {
    instance.destroy();
  },
})
  .type("이도형", { delay: 500 })
  .type(" 입니다.")
  .move(null, { to: "START" })
  .break({ delay: 300 })
  .move(null, { to: "START" })
  .type("마음과 귀가 열린 개발자,")
  .move(null, { to: "END" })
  .delete(8)
  .type("<h5 style='display:inline; font-weight:bold;'>이</h5>", { delay: 150 })
  .type("<h5 style='display:inline; font-weight:bold;'>도</h5>", { delay: 150 })
  .type("<h5 style='display:inline; font-weight:bold;'>형</h5>", { delay: 400 })
  .type(" 입니다.")
  .go();
