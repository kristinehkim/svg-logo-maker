const inquirer = require('inquirer')
const prompts = require('./lib/prompts');
const { writeFile } = require('fs').promises;
const Circle = require('./lib/shapes');
const generateLogo = require('./lib/generateLogo')

const init = async () => {
    try {
        const responses = await inquirer.prompt(prompts);
        console.log(responses)
        let shape 
        if (responses.shape === 'circle') {
            shape = new Circle()
        }
        shape.setColor(responses.shapeColor)
        writeFile('logo.svg', generateLogo(responses));
        console.log('shape',shape);
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