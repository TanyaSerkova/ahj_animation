export default class Collapse {
  constructor(button, time = 0.5) {
    if (typeof time !== "number") {
      throw new Error("time is not number!");
    }

    this.button = button;
    this.slider = "";
    this.time = time;
    this.hiddenClass = "collapse__slider--hidden";
    this.lock = false;

    this.init();
  }

  onClickButton() {
    if (!this.lock) {
      const hiddenClass = this.slider.classList.contains(this.hiddenClass);
      const childHeight = this.slider.firstElementChild.clientHeight;
      const height = childHeight + this.slider.offsetHeight;

      this.slider.classList.toggle(this.hiddenClass);
      this.slider.style.opacity = 1;
      this.slider.style.maxHeight = `${height}px`;

      if (!hiddenClass) this.slider.style.maxHeight = "0px";

      setTimeout(() => {
        if (!hiddenClass) this.slider.style.opacity = 0;
        this.lock = false;
      }, this.time * 950);
    }
    this.lock = true;
  }

  init() {
    this.button = document.querySelector(this.button);

    this.button.addEventListener("click", this.onClickButton.bind(this));
  }

  slide(slider) {
    if (typeof slider !== "string") {
      throw new Error("slider is not number!!!");
    } else {
      this.slider = document.querySelector(slider);
      this.slider.style.transition = `max-height ${this.time}s ease 0s`;
      this.slider.style.maxHeight = `${this.slider.offsetHeight}px`;
    }
  }
}
