function createWebComponent(tagName, template, props = []) {
  class CustomElement extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    static get observedAttributes() {
      return props;
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this.render();
    }

    render() {
      const html = template.replace(/{{(\w+)}}/g, (match, prop) => {
        return this.getAttribute(prop) || "";
      });
      this.innerHTML = html;
    }
  }

  customElements.define(tagName, CustomElement);
}

window.createWebComponent = createWebComponent;
