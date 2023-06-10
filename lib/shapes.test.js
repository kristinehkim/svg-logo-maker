const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    describe('Correct Shape String', () => {
        it('render method should return circle SVG string', () => {
        const shape = new Circle();
        shape.setColor("blue");
        shape.setText("SVG");
        shape.setTextColor("white");
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>');
    });
    });
});

describe('Triangle', () => {
    describe('Correct Shape String', () => {
        it('render method should return triangle SVG string', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        shape.setText("SVG");
        shape.setTextColor("white");
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="125" font-size="50" text-anchor="middle" fill="white">SVG</text></svg>');
    });
    });
});

describe('Square', () => {
    describe('Correct Shape String', () => {
        it('render method should return square SVG string', () => {
        const shape = new Square();
        shape.setColor("blue");
        shape.setText("SVG");
        shape.setTextColor("white");
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="150" height="150" style="fill:blue" /><text x="125" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>');
    });
    });
});