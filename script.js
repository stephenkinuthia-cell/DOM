/**
 * 
 * 
 * DOCUMENT OBJECT MODEL(DOM)
 * use js/ts to interact with html
 * 
 * scenario: you want to create a new movie
 * 
 * locate the <ul>
 * <li>
 * add span
 * span class=name pray
 * span class
 */


document.addEventListener('DOMContentLoaded', function() {

    const list = document.querySelector("movie-list ul")
    const forms = document.forms//add the forms

    //delete movie
    list.addEventListener("click", function (e){
        if (e.target.className = 'delete'){
            const li = e.target.parentElement;
            list.parentNode.removeChild(li)
        }
    })

    //add movie
    const addMovieForm = forms["add-movie"]
    addMovieForm.addEventListener("submit", function(event){
        event.preventDefault()

        //create elements
        addMovieForm.querySelector('input[type="text"]').value
        console.log(value);
        if(!value) {
            alert("Please Enter a Movie Name!")
            console.log("Please Enter a Movie Name!");
            return
        }

        //create element
        const li = document.createElement('li') //<li></li>
        const movieName = document.createElement('span')//<span></span>
        const deleteBtn = document.createElement('span')//<span></span>

        //adding content
        movieName.textContent = value
        deleteBtn.textContent = 'Delete'

        //adding classes
        movieName.classList.add('name')
        deleteBtn.classList.add('delete')

        //apend to DOM
        li.appendChild(movieName)
        li.appendChild(deleteBtn)
        list.appendChild(li)

        //reset the form
        addMovieForm.reset()

    })
})