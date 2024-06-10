const scroll = {
  disable() {
    window.onscroll = function () {
      window.scrollTo(window.scrollX, window.scrollY)
    }
  },
  enable() {
    window.onscroll = function () {}
  },
}

export default scroll
