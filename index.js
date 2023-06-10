const inquirer = require('inquirer')
const prompts = require('./lib/prompts');
const { writeFile } = require('fs').promises;
const { Circle, Triangle, Square } = require('./lib/shapes');
// const generateLogo = require('./lib/generateLogo')

const init = async () => {
    try {
        const responses = await inquirer.prompt(prompts);
        console.log(responses)
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

        console.log('shape', shape);
        console.log('Generated logo.svg')
        writeFile('logo.svg', shape.render()); // render belongs to shape which is why it is shape.render, we're calling shape's render function
    }
    catch (err) {
        console.error(err)
    }
};

init();

{/* <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */}

// "echo \"Error: no test specified\" && exit 1"
