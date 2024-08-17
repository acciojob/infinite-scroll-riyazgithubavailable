//your code here!

// script.js

// Initial setup: add 10 list items
document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById('infi-list');
    for (let i = 1; i <= 10; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = `Item ${i}`;
        list.appendChild(listItem);
    }

    // Add scroll event listener to load more items when reaching the end of the list
    list.addEventListener('scroll', function() {
        if (list.scrollTop + list.clientHeight >= document.body.offsetHeight) {
            addMoreItems();
        }
    });
});

let itemCounter = 10;

// Function to add 2 more items
function addMoreItems() {
    const list = document.getElementById('infi-list');
    for (let i = 1; i <= 2; i++) {
        itemCounter++;
        let listItem = document.createElement('li');
        listItem.textContent = `Item ${itemCounter}`;
        list.appendChild(listItem);
    }
}
