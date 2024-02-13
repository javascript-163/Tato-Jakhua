class Shape {
  constructor(name) {
    this.name = name;
  }

  area() {
    return "Area calculation not implemented for generic shape.";
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  area() {
    return `${Math.PI * this.radius * this.radius} ${this.name}`;
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  area() {
    return `${this.width * this.height} ${this.name}`;
  }
}

class Triangle extends Shape {
  constructor(name, base, height) {
    super(name);
    this.base = base;
    this.height = height;
  }

  area() {
    return `${(this.base * this.height) / 2} ${this.name}`;
  }
}

const Parent = new Shape("");
const CircleChilde = new Circle("Circle", 5);
const RectangleChild = new Rectangle("Rectangle", 5, 10);
const TriangleChild = new Triangle("Triangle", 3, 7);

Parent.area();
CircleChilde.area();
RectangleChild.area();
TriangleChild.area();
