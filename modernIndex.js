// Author: Cedric Song
// Date: 2018-04-06

function initRem(deviceSize = 750) {
  var docEl = document.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth
      if (!clientWidth) {
        return
      }
      docEl.style.fontSize = 10 * (clientWidth / deviceSize) + 'px'
    }

  if (!document.addEventListener) return
  window.addEventListener(resizeEvt, recalc, false)
  document.addEventListener('DOMContentLoaded', recalc, false)

  var viewportEl = document.querySelector('meta[name="viewport"]')
  var scale = 1 / window.devicePixelRatio
  var content =
    'width=device-width, initial-scale=' +
    scale +
    ', minimum-scale=' +
    scale +
    ', maximum-scale=' +
    scale +
    ', user-scalable=no'
  if (viewportEl) {
    viewportEl.setAttribute('content', content)
  } else {
    viewportEl = document.createElement('meta')
    viewportEl.setAttribute('name', 'viewport')
    viewportEl.setAttribute('content', content)
    document.head.appendChild(viewportEl)
  }
}

export default initRem
