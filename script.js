document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#movie-list ul");
  const forms = document.forms;

  // delete + edit with event delegation
  list.addEventListener("click", function (e) {
    const li = e.target.closest("li");
    if (!li) return;

    // delete button
    if (e.target.closest(".delete")) {
      const movieName = li.querySelector(".name").textContent;
      const modal = document.getElementById("confirm-modal");
      const confirmMessage = document.getElementById("confirm-message");
      const yesBtn = document.getElementById("confirm-yes");
      const noBtn = document.getElementById("confirm-no");

      confirmMessage.textContent = `Are you sure you want to delete "${movieName}"?`;
      modal.style.display = "flex";

      yesBtn.onclick = function () {
        li.remove();
        modal.style.display = "none";
      };

      noBtn.onclick = function () {
        modal.style.display = "none";
      };
    }

    // edit button
    if (e.target.closest(".edit")) {
    const editBtn = li.querySelector(".edit i");
    const currentName = li.querySelector(".name") || li.querySelector(".edit-input");

    if (currentName.tagName === "SPAN") {
        // switch to input
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentName.textContent;
        input.classList.add("edit-input");

        li.replaceChild(input, currentName);
        editBtn.className = "fas fa-save"; // change icon to save
    } else if (currentName.tagName === "INPUT") {
        // save changes
        const span = document.createElement("span");
        span.classList.add("name");
        span.textContent = currentName.value.trim() || "Untitled";

        li.replaceChild(span, currentName);
        editBtn.className = "fas fa-edit"; // back to edit icon
    }
    }

  });

  // add movie
  const addMovieForm = forms["add-movie"];
  addMovieForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const value = addMovieForm.querySelector('input[type="text"]').value;
    if (!value) {
      alert("Please enter a movie name!");
      return;
    }

    const li = document.createElement("li");
    const movieName = document.createElement("span");
    movieName.textContent = value;
    movieName.classList.add("name");

    const btns = document.createElement("span");
    btns.classList.add("btns");

    // edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

    btns.appendChild(editBtn);
    btns.appendChild(deleteBtn);

    li.appendChild(movieName);
    li.appendChild(btns);
    list.appendChild(li);

    addMovieForm.reset();
  });
});
