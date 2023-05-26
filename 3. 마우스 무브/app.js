import MouseEffect from "./animation/mouse-effect.js";
import MouseAnimation from "./animation/mouse-animation.js";
import MouseRender from "./animation/mouse-render.js";

new MouseEffect(
  new MouseRender(document.querySelector(".move-zone"), 20),
  new MouseAnimation()
);