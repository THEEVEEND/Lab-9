const principalContainer = document.getElementById("principalContainer")
const commentContainer = document.getElementById("commentContainer")
const boton = document.getElementById("button")
const textarea = document.getElementById("addComment")


function show() {
    const modal = document.getElementById("modal")
    modal.classList.remove("hide")
    modal.classList.add("show")
}

function hide() {
    const modal = document.getElementById("modal")
    modal.classList.remove("show")
    modal.classList.add("hide")
}

function mimi() {
    var valuetext = document.getElementById("addComment").value
    var botone = document.getElementById("button")

    if (valuetext.length > 0) {
        botone.style.backgroundColor = "pink"
    } else {
        botone.style.backgroundColor = ""
    }
}

function publish() {
    var text = textarea.value
    var comment = `
    <div class="card-comment">
        <div class="top-comment">
            <img src="img/Cat.png" alt="" id="img">
            <p>Señor Mimitos</p>
        </div>
        <p class="publish">${text}</p>
    </div>
    `
    commentContainer.innerHTML += comment
    hide()
}