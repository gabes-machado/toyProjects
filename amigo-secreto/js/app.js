// Array to store the names of friends
let friendList = [];

// Function to add a friend to the list
function addFriend() {
    // Get the input field where the friend name is entered
    let friendInputField = document.getElementById('nome-amigo');
    
    // Get the trimmed value of the input field
    let friendName = friendInputField.value.trim();

    // Validate that the input is not empty after trimming
    if (friendName == '') {
        alert('Informe o nome do amigo!');
        return;
    }
    
    // Check if the friend is already in the list
    if (friendList.includes(friendName)) {
        alert('Nome já adicionado!');
        return;
    }

    // Add the friend to the array
    friendList.push(friendName);

    // Clear the input field
    friendInputField.value = '';

    // Update the displayed friend list and clear the draw results
    updateFriendList();
    clearDrawResults();
}

// Function to perform the draw (assign each friend to another)
function drawNames() {
    // Check if there are at least 4 friends to proceed
    if (friendList.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    // Shuffle the list of friends using Fisher-Yates algorithm
    shuffleArray(friendList);

    // Get the DOM element to display the draw results
    let drawResultElement = document.getElementById('lista-sorteio');

    // Clear previous results
    drawResultElement.innerHTML = '';

    // Assign each friend to another and display the results
    let results = [];
    for (let i = 0; i < friendList.length; i++) {
        // Assign the next friend in the list, wrapping around at the end
        let assignedFriend = friendList[(i + 1) % friendList.length];
        results.push(`${friendList[i]} --> ${assignedFriend}`);
    }
    // Set the innerHTML once
    drawResultElement.innerHTML = results.join('<br/>');
}

// Function to remove a friend from the list
function removeFriend(index) {
    // Remove the friend at the given index from the array
    friendList.splice(index, 1);
    // Update the displayed list and clear the draw results
    updateFriendList();
    clearDrawResults();
}

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm shuffles the array in place
    // Start from the last element and swap with a randomly selected element
    for (let i = array.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i inclusive
        const randomIndex = Math.floor(Math.random() * (i + 1));
        // Swap elements at i and randomIndex
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
}

// Function to clear the draw results
function clearDrawResults() {
    let drawResultElement = document.getElementById('lista-sorteio');
    drawResultElement.innerHTML = '';
}

// Function to update the displayed list of friends
function updateFriendList() {
    // Get the DOM element to display the list of friends
    let friendListElement = document.getElementById('lista-amigos');
    // Clear the current content
    friendListElement.innerHTML = '';

    // Rebuild the list with updated friends
    for (let i = 0; i < friendList.length; i++) {
        // Create a paragraph element for each friend
        let paragraph = document.createElement('p');
        paragraph.textContent = friendList[i];
       
        // Add a click event to remove the friend when clicked
        paragraph.addEventListener('click', function() {
            removeFriend(i);
        });

        // Append the paragraph to the list element
        friendListElement.appendChild(paragraph);
    }
}

// Function to reset the application
function resetApp() {
    // Clear the friend list array
    friendList = [];
    // Clear the displayed friend list and draw results
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
