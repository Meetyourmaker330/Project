export const column = (data) => {
    let columns = ''
    data.forEach(item => {
        columns += `
        <div class="col col-${item.title} column" id="col-${item.id}">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h6>${item.title}</h6>
            <span class="badge text-bg-warning" id="columnCount${item.title}">0</span>
          </div>
        </div>`
    })
    document.getElementById('board').innerHTML = columns
}

