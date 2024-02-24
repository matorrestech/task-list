let counter = 0

let input = document.getElementById("inputTask")
let btnAdd = document.getElementById("btnAdd")
let main = document.getElementById("listArea")

function addTask() {
    // Get the value of the input
    let valueInput = input.value

    // Check if the input is empty
    if (
        valueInput !== "" ||
        (valueInput !== null && valueInput !== undefined)
    ) {
        // Increment the counter
        ++counter
        // Create the new item
        let newItem = `
        <div id="${counter}" class="item">
            <div onclick="taskCheck(${counter})" class="itemIcone">
                <i id="icon_${counter}" class="fa-regular fa-circle"></i>
            </div>
            <div onclick="taskCheck(${counter})" class="itemName">${valueInput}</div>
            <div class="itemButton">
                <button onclick="deleteTask(${counter})" class="delete">
                <i class="fa-solid fa-trash"></i> Delete
                </button>
            </div>
        </div>
        `
        // Add the new item to the list
        main.innerHTML += newItem

        // Clear the input
        input.value = ""
        input.focus()
    }
}

function deleteTask(id) {
    // Get the item to delete
    let taskDelete = document.getElementById(id)
    // Remove the item
    taskDelete.remove()
}

function taskCheck(id) {
    let item = document.getElementById(id)
    let classItem = item.getAttribute("class")

    if (classItem === "item") {
        item.classList.add("checked")
        let icon = document.getElementById(`icon_${id}`)
        icon.classList.remove("fa-circle")
        icon.classList.add("fa-check-circle")

        item.parentNode.appendChild(item)
    } else {
        item.classList.remove("checked")
        let icon = document.getElementById(`icon_${id}`)
        icon.classList.remove("fa-check-circle")
        icon.classList.add("fa-circle")
    }
}

input.addEventListener("keyup", function (event) {
    // Check if the user press the enter key
    if (event.keyCode === 13) {
        event.preventDefault()
        btnAdd.click()
    }
})
