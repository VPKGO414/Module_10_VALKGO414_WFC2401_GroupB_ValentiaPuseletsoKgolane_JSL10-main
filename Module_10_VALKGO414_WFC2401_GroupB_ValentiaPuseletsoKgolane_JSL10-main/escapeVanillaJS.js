document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    // Event listener for solving Room 1
    document.getElementById("solveRoom1").addEventListener("click", () => {
        // Fetch the 'books.json' file
        fetch('books.json') 
            .then(response => response.json()) // Parse the JSON response
            .then(books => {
                // Find the most recent book
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                // Display the most recent book's title in the result element for Room 1
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    // Event listener for solving Room 2
    document.getElementById("solveRoom2").addEventListener("click", () => {
        // Define sets of JavaScript and React concepts
        const jsConcepts = new Set(['closure', 'scope', 'hoisting','async']);
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Pass both jsConcepts and reactConcepts as arguments to findIntersection
        // Find the intersection of JavaScript and React concepts
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        // Display the common concepts in the result element for Room 2
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });
    
    // 🪲 Bug: Asynchronous function ?
    // Event listener for solving Room 3
    document.getElementById("solveRoom3").addEventListener("click", () => {
        // Fetch the 'directions.json' file
        fetch('directions.json') 
            .then(response => response.json()) // Parse the JSON response
            .then(directions => {
                // Navigate the labyrinth described in the JSON
                navigateLabyrinth(directions)
                    .then(message => {
                        // 🪲 Bug: Incorrect method
                        // Display the congratulatory message in the result element for Room 3
                        document.getElementById("room3Result").textContent = message;
                    });
            });
    });
});

// Function to find the most recent book from an array of books
function findMostRecentBook(books) {
    // Reduce the books array to find the most recent one based on publication date
    return books.reduce((mostRecent, book) => {
        const mostRecentDate = new Date(mostRecent.published);
        const currentDate = new Date(book.published);
        return currentDate > mostRecentDate ? book : mostRecent;
    });
}

// Function to find the intersection of two sets
function findIntersection(setA, setB) {
    // Create a new set containing elements that are common to both setA and setB
    return new Set([...setA].filter(item => setB.has(item)));
}

// Asynchronous function to navigate through a labyrinth described by directions
async function navigateLabyrinth(directions) {
    // Iterate through each direction in the directions array
    for (let direction of directions) {
        console.log(`Navigating: ${direction.step}`); // Log the current step
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before proceeding to the next step
    }
    // Return a congratulatory message upon successful navigation
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}