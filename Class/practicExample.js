class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  hide() {
    this.$el.style.display = 'none'
  }

  show() {
    this.$el.style.display = 'block'
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector)
    this.$el.style.width = this.$el.style.height =options.size +'px'
    this.$el.style.background = options.color
  }


}

const box1 = new Box({
  selector: '#box1',
  size: 100,
  color: 'red'
})

const box2 = new Box({
  selector: '#box2',
  size: 150,
  color: 'blue'
})


class Circle extends Box {
  constructor(options) {
    super(options)

    this.$el.style.borderRadius = '50%'
  }
}

const c = new Circle({
  selector: '#circle',
  size: 90,
  color: 'green'
})