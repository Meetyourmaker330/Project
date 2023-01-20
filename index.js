import { data } from "./data.js";
import { column } from "./column.js"
import { Card } from "./card.js";
import { modalHtml } from "./modal.js";


const app = () => {
    column(data)
    templateModal()
    addNewTask()
    createTask(data)
    deleteTask()
}
// template modal window
const templateModal = () => {
    const modal = document.createElement('div')
    document.body.append(modal)
    modal.innerHTML = modalHtml(data)
    modal.setAttribute('id', 'modal')
    modal.style.display = 'none'
}
// new task
const addNewTask = () => {
    document.getElementById('new-task').addEventListener('click', () => {
        document.getElementById('modal').style.display = 'block'
    })
}
// create task
const createTask = (arr) => {
    document.getElementById('add-task').addEventListener('click', () => {
        document.getElementById('modal').style.display = 'none'
        const fieldTitle = document.getElementById('field-title')
        const fielDescription = document.getElementById('field-description')
        const statusTask = Number(document.getElementById('status-task').value)
        arr.map((item, ind) => {
            if (item.id === statusTask) {
                item.todos.push(new Card(item.todos.length, fieldTitle.value, fielDescription.value,))
                document.getElementById('col-' + item.id).insertAdjacentHTML('beforeend', new Card(fieldTitle.value, fielDescription.value).templateCard())
                let count = document.getElementById('columnCount' + item.title)
                count.innerHTML = item.todos.length
                console.log(data)
            }
        })
    })

}
//delete task
const deleteTask = () => {

}
app()