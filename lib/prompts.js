module.exports = [
    {
        type: 'input',
        message: 'What text do you want for your logo? Please enter up to 3 characters.',
        name: 'textLogo',
    },
    {
        type: 'input',
        message: 'Enter a color keyword or a hexadecimal number for the color of the text.',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Choose a shape.',
        name: 'shape',
        choices: [
            'circle',
            'triangle',
            'square'
        ]
    },
    {
        type: 'input',
        message: 'Enter a color keyword or a hexadecimal number for the color of the shape.',
        name: 'shapeColor',
    },
]