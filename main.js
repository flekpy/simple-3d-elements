function main() {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  const clientWidth = canvas.clientWidth
  const clientHeight = canvas.clientHeight

  const imageData = ctx.createImageData(clientWidth, clientHeight)

  const drawer = new Drawer(imageData.data, imageData.width, imageData.height)

  resize(canvas)
  axisDirection(clientWidth, clientHeight, drawer)
  drawer.drawCube()
  drawer.drawRectangle()
  drawer.drawPyramid()
  drawer.drawOctahedron()
  ctx.putImageData(imageData, 0, 0)
}

window.addEventListener('resize', () => main())
