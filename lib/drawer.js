class Drawer {
  surface = null
  width = 0
  height = 0

  constructor(surface, width, height) {
    this.surface = surface
    this.width = width
    this.height = height 
  }

  drawPixel(x, y, red, green, blue) {
    // width * -y * 4 + x * 4
    const offset = this.width * -y * 4 + (x * 4)

    if (x >= 0 && x < this.width && -y >= 0 && y < this.height) {
      this.surface[offset] = red
      this.surface[offset + 1] = green 
      this.surface[offset + 2] = blue
      this.surface[offset + 3] = 255
    }
  }

  clearSurface() {
    const surfaceSize = this.width * this.height * 4
    for (let i = 0; i < surfaceSize; i++) {
        this.surface[i] = 0
    }
  }

  drawLine(x1, y1, x2, y2, red, green, blue) {
    const c1 = y2 - y1
    const c2 = x2 - x1

    const length = Math.sqrt(c1 * c1 + c2 * c2)

    const xOffset = c2 / length
    const yOffset = c1 / length

    for (let i = 0; i < length; i++) {
      this.drawPixel(
        Math.trunc(x1 + xOffset * i), 
        Math.trunc(y1 + yOffset * i), 
        red, green, blue
      )
    }
  }

  drawCube() {
    const vertices = [
      new Vector(-1, 1, 1),
      new Vector(-1, 1, -1),
      new Vector(1, 1, -1),
      new Vector(1, 1, 1),
      new Vector(-1, -1, 1),
      new Vector(-1, -1, -1),
      new Vector(1, -1, -1),
      new Vector(1, -1, 1),
    ]

    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],

      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],

      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
    ]

    const sceneVertices = []
    let matrix = Matrix.getRotationX(20)
    matrix = Matrix.multiply(
      Matrix.getRotationY(20),
      matrix
    )

    matrix = Matrix.multiply(
      Matrix.getScale(100, 100, 100),
      matrix 
    )

    matrix = Matrix.multiply(
      Matrix.getTranslation(this.width / 4, -this.height / 4, 0),
      matrix
    )

    for (let i = 0; i < vertices.length; i++) {
      let vertex = Matrix.multiplyVector(
        matrix,
        vertices[i]
      )

      sceneVertices.push(vertex)
    }

    for (let i = 0; i < edges.length; i++) {
      const e = edges[i]

      this.drawLine(
        sceneVertices[e[0]].x,
        sceneVertices[e[0]].y,
        sceneVertices[e[1]].x,
        sceneVertices[e[1]].y,
        0, 0, 255
      )
    }
  }

  drawRectangle() {
    const vertices = [
      new Vector(-1, 1, 1),
      new Vector(-1, 1, -1),
      new Vector(3, 1, -1),
      new Vector(3, 1, 1),
      new Vector(-1, 0, 1),
      new Vector(-1, 0, -1),
      new Vector(3, 0, -1),
      new Vector(3, 0, 1),
    ]

    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],

      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],

      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
    ]

    const sceneVertices = []

    let matrix = Matrix.getRotationX(15)

    matrix = Matrix.multiply(
      Matrix.getRotationY(-20),
      matrix
    )

    matrix = Matrix.multiply(
      Matrix.getScale(50, 50, 50),
      matrix 
    )

    matrix = Matrix.multiply(
      Matrix.getTranslation(this.width / 2 + (this.width / 4), -this.height / 4, 0),
      matrix
    )

    for (let i = 0; i < vertices.length; i++) {
      let vertex = Matrix.multiplyVector(
        matrix,
        vertices[i]
      )

      sceneVertices.push(vertex)
    }

    for (let i = 0; i < edges.length; i++) {
      const e = edges[i]

      this.drawLine(
        sceneVertices[e[0]].x,
        sceneVertices[e[0]].y,
        sceneVertices[e[1]].x,
        sceneVertices[e[1]].y,
        255, 0, 0
      )
    }
  }

  drawPyramid() {
    const vertices = [
      new Vector(-1, -2, 1),
      new Vector(0, 0, 1),
      new Vector(3, 0, 1),
      new Vector(3, -2, 1),
      new Vector(1, 2, -1),
    ]

    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],

      [0, 4],
      [1, 4],
      [2, 4],
      [3, 4],
    ]

    const sceneVertices = []
    let matrix = Matrix.getRotationX(50)

    matrix = Matrix.multiply(
      Matrix.getRotationY(10),
      matrix
    )

    matrix = Matrix.multiply(
      Matrix.getScale(50, 50, 50),
      matrix 
    )

    matrix = Matrix.multiply(
      Matrix.getTranslation(this.width / 4, -this.height / 2 - (this.height / 4), 0),
      matrix
    )

    for (let i = 0; i < vertices.length; i++) {
      let vertex = Matrix.multiplyVector(
        matrix,
        vertices[i]
      )

      sceneVertices.push(vertex)
    }

    for (let i = 0; i < edges.length; i++) {
      const e = edges[i]

      this.drawLine(
        sceneVertices[e[0]].x,
        sceneVertices[e[0]].y,
        sceneVertices[e[1]].x,
        sceneVertices[e[1]].y,
        255, 0, 0
      )
    }
  }
  drawOctahedron() {
    const vertices = [
      new Vector(-1, -2, 1),
      new Vector(0, 0, 1),
      new Vector(3, 0, 1),
      new Vector(3, -2, 1),
      new Vector(1, 2, -1),
      new Vector(2.5, -9, -1),
    ]

    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],

      [0, 4],
      [1, 4],
      [2, 4],
      [3, 4],

      [0, 5],
      [1, 5],
      [2, 5],
      [3, 5],
    ]

    const sceneVertices = []
    let matrix = Matrix.getRotationX(50)

    matrix = Matrix.multiply(
      Matrix.getRotationY(10),
      matrix
    )

    matrix = Matrix.multiply(
      Matrix.getScale(50, 50, 50),
      matrix 
    )

    matrix = Matrix.multiply(
      Matrix.getTranslation(this.width / 2 + (this.width / 4), -this.height / 2 - (this.height / 4), 0),
      matrix
    )

    for (let i = 0; i < vertices.length; i++) {
      let vertex = Matrix.multiplyVector(
        matrix,
        vertices[i]
      )

      sceneVertices.push(vertex)
    }

    for (let i = 0; i < edges.length; i++) {
      const e = edges[i]

      this.drawLine(
        sceneVertices[e[0]].x,
        sceneVertices[e[0]].y,
        sceneVertices[e[1]].x,
        sceneVertices[e[1]].y,
        255, 0, 0
      )
    }
  }
}
