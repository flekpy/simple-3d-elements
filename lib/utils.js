function resize(canvas) {
  const displayWidth = canvas.clientWidth
  const displayHeight = canvas.clientHeight

  if (canvas.width != displayWidth || canvas.height != displayHeight) {
    canvas.width = displayWidth
    canvas.height = displayHeight
  }
}

function axisDirection(clientWidth, clientHeight, drawer) {
  const center = new Vector(clientWidth / 2, -clientHeight / 2, 0)
  drawer.drawLine(
    center.x, center.y,
    center.x, center.y + 150,
    155, 155, 155
  )
  drawer.drawLine(
    center.x, center.y,
    center.x + 150, center.y,
    155, 155, 155
  )

  const zVector = new Vector(-1, -1, 0)
  const zCoords = Vector.add(center, zVector.normalize().multiplyByScalar(150))
  drawer.drawLine(
    center.x, center.y,
    zCoords.x, zCoords.y,
    155, 155, 155
  )
}
