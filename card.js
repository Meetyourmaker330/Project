export function Card(id, title, description) {
  this.id = id
  this.title = title
  this.description = description

  this.templateCard = function () {
    return `
    <div class="card text-bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header d-flex justify-content-between">
      <h5>${this.title}</h5>
      <button class="btn btn-dark delete-card">x</button>
    </div>
    <div class="card-body">
      <p class="card-text">${this.description}</p>
    </div>
  </div>
    `
  }

}