export const modalHtml = (data) => {
  let statusOptions = ''
  data.map((item, ind) => {
    statusOptions += `<option value='${item.id}'>${item.title}</option>`
  })
  return `
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="field-title" class="col-form-label">Title:</label>
            <input type="text" class="form-control" id="field-title">
          </div>
          <div class="mb-3">
          <label for="status-task" class="col-form-label">Status</label>
          <select class="form-select" id="status-task" aria-label="Default select example">
              ${statusOptions}
          </select>
          </div>
          <div class="mb-3">
            <label for="field-description" class="col-form-label">Description:</label>
            <textarea class="form-control" id="field-description"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close-modal" data-bs-dismiss="modal" id="add-task">Add</button>
        <button type="button" class="btn btn-primary close-modal">Close</button>
      </div>
    </div>
    `
}