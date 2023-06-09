// Shape is the parent class
class Shape {
    constructor() {
        this.color = '';
    }
// setColor is our shape function and it's getting passed color
    setColor(color) {
        this.color = color;
    }
}
// Circle is extending Shape which means it is inherting Shape's values
class Circle extends Shape {
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" /></svg>`
    }
}

class Triangle extends Shape {
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /></svg>`
    }
}

class Square extends Shape {
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        width="400" height="180">
        <rect x="50" y="20" width="150" height="150"style="fill:${this.color}" /></svg>`
    }
}

class Svg extends Shape {
    constructor (color) {
    super (color, text, textColor);
    this.text = '';
    this.textColor = '';
    }
}

module.exports = {Circle, Triangle, Square}