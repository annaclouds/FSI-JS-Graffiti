// Select some elements...

// 1. Select an element.
let header = document.querySelector('#page-header');        // header is defined as a DOM element.

// 2. Modify the styling of an element. 
header.style.textAlign = "left";                            // changing how the header text is aligned.
header.style.color = 'brown';                               // changed the color of the header.

// 3. Select multiple elements.
let dogImages = document.querySelectorAll('.dog-image');    // selecting all the dog images; defined as an array of DOM elements.

// 4. Modify the styling of all elements.
for (let i = 0; i < dogImages.length; i++) {                // using a loop to change the styling of each element in the array.
    dogImages[i].style.borderRadius = '50px';
    dogImages[i].style.transform = 'scaleY(-1)';            // flipped all the dog images upside down.
};

// 5. Research New Ways of Styling with JavaScript

// making dogs' names align to the left.
let dogNames = document.querySelectorAll('.dog-name');      // selecting all dog names.

for (let i = 0; i < dogNames.length; i++) {                // using a loop to change each dogNames text aligned to the left.
    dogNames[i].style.textAlign = 'left';
};

// changing the color of the footer text.
let footerText = document.querySelector('.footer');
footerText.style.color = 'blue';

// changing the font and color of the dog descriptions.
let dogDescription = document.querySelectorAll('.dog-description'); // selecting all the dog descriptions.
for (let i = 0; i < dogDescription.length; i++) { 
    dogDescription[i].style.fontFamily = 'cursive';                 // changed the dog descriptions font.
    dogDescription[0].style.color = 'green';                        // changed the first description color to green.
    dogDescription[1].style.color = 'purple';                       // changed the second description color to purple.
    dogDescription[2].style.color = 'skyblue';                      // changed the third description color to skyblue.
};
