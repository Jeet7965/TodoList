var input_text = document.getElementById('input-text')
var text_list = document.getElementById('text-list')


function addText() {
    if (input_text.value === '') {
        alert("you write something here....!")
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input_text.value;
        text_list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input_text.value = '';
    saveData();

}
text_list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem('data', text_list.innerHTML)
}
function showList() {
    text_list.innerHTML = localStorage.getItem('data')
}
showList();