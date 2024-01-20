class MyElement extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: "open" })
    this.template = document.createElement("template")
    this.template.innerHTML = `
      <style>
        :host { display: block; }
      </style>
      <div part="base">
        <slot></slot>
      </div>
    `

    this.render()
  }

  render () {
    this.shadowRoot.replaceChildren(this.template.content.cloneNode(true))
  }
}

if (!window.customElements.get("my-element")) {
  window.customElements.define("my-element", MyElement)
}
