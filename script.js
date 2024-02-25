class Complex {
  constructor(real, imaginary) {
    this.real = real
    this.imaginary = imaginary
  }
  add(num) {
    this.real = this.real + num.real
    this.imaginary = this.imaginary + num.imaginary

  }

  get real() {
    return this._real
  }

  get imaginary() {
    return this._imaginary
  }

  set imaginary(newImaginary) {
    this._imaginary = newImaginary
  }

  set real(newReal) {
    this._real = newReal
  }
}

let a = new Complex(4, 10)
console.log(a.real, a.imaginary)
a.real = 20
a.imaginary = 20
let b = new Complex(8, 4)
a.add(b)
console.log(`${a.real}+${a.imaginary}i`)