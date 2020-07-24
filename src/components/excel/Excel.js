import {$} from '@core/Dom';

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')
    $root.classList.add('excel')
    this.components.forEach(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      $el.innerHTML = component.toHTML()
      $root.append($el)
    })
    return $root
  }

  render() {
    // console.log(this.$el)
    // this.$el.insertAdjacentHTML('afterbegin', `<h1>Test</h1>`)
    this.$el.append(this.getRoot())
  }
}

