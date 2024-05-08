{
  //
  // polymorphism ===>

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // child
  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }

    getArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }

  // child
  class Rectangle extends Shape {
    constructor(public height: number, public width: number) {
      super();
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const shapeGetArea = (params: Shape): void => {
    return console.log(params.getArea());
  };

  const instanceShape = new Shape()
  const instanceCircle = new Circle(5)
  const instanceRectangle = new Rectangle(3,5)


  shapeGetArea(instanceShape)
  shapeGetArea(instanceCircle)
  shapeGetArea(instanceRectangle)

  //
}
