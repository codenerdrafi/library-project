/*
1. Dom Selection
2. Event Listener
3. Basic Validation
4. Creating Elements
4. Append
*/

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#bookList');

btn.addEventListener('click', function(e){
    e.preventDefault();
    if (title.value == '' && author.value == '' && year.value == ''){
        alert("Fill all the info");
    } else{
        const newRow = document.createElement('tr');
        
        //creating new title
        const newTitle = document.createElement('td')
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        
        //creating new title
        const newAuthor = document.createElement('td')
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        
        //creating new title
        const newYear = document.createElement('td')
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);


        bookList.appendChild(newRow);
    }
}); 