// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Define the asynchronous function to fetch user data
    async function fetchUserData() {
        // Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        
        // Select the HTML element where the API data will be displayed
        const dataContainer = document.getElementById('api-data');
        
        try {
            // Fetch data from the API and wait for the response
            const response = await fetch(apiUrl);

            // If the response is not OK, throw an error
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Convert the response to JSON and store in the 'users' constant
            const users = await response.json();

            // Clear the "Loading user data..." message
            dataContainer.innerHTML = '';

            // Create a <ul> element to hold the user list
            const userList = document.createElement('ul');

            // Loop through the users array and create <li> elements for each user
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the <ul> containing user names to the dataContainer
            dataContainer.appendChild(userList);
        } catch (error) {
            // Clear the existing content and display an error message if the fetch fails
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Call fetchUserData when the DOM content has loaded
    fetchUserData();
});
