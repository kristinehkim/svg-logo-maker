const inquirer = require('inquirer')
const prompts = require('./lib/prompts');
const { writeFile } = require('fs').promises;
const { Circle, Triangle, Square } = require('./lib/shapes');

const init = async () => {
    try {
        const responses = await inquirer.prompt(prompts);
        // console.log(responses) // to see the responses as an object
        let shape;
        if (responses.shape === 'circle') {
            shape = new Circle();// creating a shape that is a new Circle, it has all the functions that circle has
        } else if (responses.shape === 'triangle') {
            shape = new Triangle();
        } else {
            shape = new Square();
        }
        shape.setColor(responses.shapeColor);// calling setColor for that shape and it gets passed the color
        shape.setText(responses.textLogo);
        shape.setTextColor(responses.textColor);

        // console.log('shape', shape);// 'shape' to see shape chosen by user, shape to see user choices as an object
        console.log('Generated logo.svg')
        writeFile(`./examples/${responses.shape}.svg`, shape.render()); // render belongs to shape which is why it is shape.render, we're calling shape's render function
    }
    catch (err) {
        console.error(err)
    }
};

init();

// "echo \"Error: no test specified\" && exit 1"
