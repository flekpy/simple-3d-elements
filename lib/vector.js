class Vector {
  x = 0
  y = 0
  z = 0
  w = 1

  constructor(x, y, z, w = 1) {
    this.x = x
    this.y = y
    this.z = z
    this.w = w
  }

  static add(vector1, vector2) {
    return new Vector(
      vector1.x + vector2.x,
      vector1.y + vector2.y,
      vector1.z + vector2.z,
    )
  }

  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  }

  normalize() {
    const length = this.getLength()

    this.x /= length
    this.y /= length
    this.z /= length

    return this
  }

  multiplyByScalar(s) {
    this.x *= s
    this.y *= s
    this.z *= s

    return this
  }
}
