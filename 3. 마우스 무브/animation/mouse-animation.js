export default class MouseAnimation {
  mousemove(elements, { calcClientX, calcClientY }) {
    const calcCoordinate = (index, coordinate) => -50 + coordinate * (index + 1);

    elements.forEach(
      (elem, index) =>
        (elem.style.transform = `
          translate3d(
            ${calcCoordinate(index, calcClientX)}%, 
            ${calcCoordinate(index, calcClientY)}%,
            0)
          `
        )
    );
  }
}
