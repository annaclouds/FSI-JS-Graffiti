// Select some elements...

// 1. Select an element.
let header = document.querySelector('#page-header');        // header is defined as a DOM element.

// 2. Modify the styling of an element. 
header.style.textAlign = "left";                            // changing how the header text is aligned.

// 3. Select multiple elements.
let dogImages = document.querySelectorAll('.dog-image');    // selecting all the dog images; defined as an array of DOM elements.

// 4. Modify the styling of all elements.
for (let i = 0; i < dogImages.length; i++) {                // using a loop to change the styling of each element in the array.
    dogImages[i].style.borderRadius = '50px';
};

// 5. Research New Ways of Styling with JavaScript