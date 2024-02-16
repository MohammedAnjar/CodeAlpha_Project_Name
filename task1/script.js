function calculateAge() {
    
    const dobInput = document.getElementById('dob').value;

    
    const dobDate = new Date(dobInput);

    
    const currentDate = new Date();

    
    const age = currentDate.getFullYear() - dobDate.getFullYear();

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your age is: ${age} years`;
}
