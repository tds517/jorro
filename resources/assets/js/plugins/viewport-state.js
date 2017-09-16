const ViewportState = {
  install: function(Vue, options = { 0: 'sub-mobile', 320: 'mobile', 768: 'tablet', 1024: 'desktop', 1920: 'hd-desktop', 2560: 'qhd-desktop', 3840: 'uhd-desktop' }) {
    let that = this
    let state = this._state

    document.addEventListener('scroll', function() {
      that._onScroll()
    })
    // ウィンドウのサイズを取得
    window.addEventListener('resize', function() {
      that._onResize(Vue, options)
    })
    // 初期値を更新
    window.addEventListener('load', function() {
      that._onScroll()
      that._onResize(Vue, options)
    })
    // プロパティ $window を定義
    Vue.util.defineReactive(Vue.prototype, '$viewportState', state)
  },
  _state: {
    scrollX: 0,
    scrollY: 0,
    width: 0,
    height: 0,
    label: "",
    value: 0
  },
  _onResize(Vue, options) {
    this._state.width = document.documentElement.clientWidth
    this._state.height = document.documentElement.clientHeight
    this._updateCurrentViewport(Vue, options)
  },
  _onScroll() {
    this._state.scrollX = window.pageXOffset
    this._state.scrollY = window.pageYOffset
  },
  _updateCurrentViewport (Vue, options) {
    let viewportState = ViewportState._getCurrentViewport(options)
    this._state.label = viewportState.label
    this._state.value = viewportState.value
  },
  _getCurrentViewport (options) {
    // array-like keys, sorted
    let arrayOptions = ViewportState._sortOptions(options)

    // get window width
    let windowWidth = this._state.width

    // get compatible value 1024
    let compatibleValue = arrayOptions.reverse().find(value => { return windowWidth >= value })

    return {
      label: options[compatibleValue],
      value: compatibleValue,
    }
  },
  _sortOptions (options) {
    return Object.keys(options).map(Number).sort((a, b) => { return a - b })
  }
}

export default ViewportState
