/* eslint-disable prettier/prettier */
class Collapse {
  constructor(parent) {
    this.parent = parent;
    this.getCollapse();
  }

  getCollapse() {
    this.parent.addEventListener("click", (event) => {
      const { target } = event;
      if ( !target.classList.contains("collapse__btn") ) return;
      const text = target.nextElementSibling;
      text.classList.toggle("collapse__text_open");
      target.classList.add("collapse__btn_active");

      target.addEventListener("mouseout", () => {
        setTimeout(() => target.classList.remove("collapse__btn_active"), 1000);
      }, {once: true});
    });
  }
}

export default Collapse;