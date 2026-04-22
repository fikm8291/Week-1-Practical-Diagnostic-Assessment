// Task 3: Fill in the selection methods
const adviceBtn = document.________('adviceBtn');
const adviceText = document.________('adviceText');

// Task 3: Finish the Event Listener
adviceBtn.addEventListener('click', function() {
    
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            // Task 3: How do we get the advice into the paragraph?
            // Hint: The data path is data.slip.advice
            
        })
        .catch(error => console.log('Error:', error));
});
