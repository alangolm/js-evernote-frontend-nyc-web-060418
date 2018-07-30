document.addEventListener('DOMContentLoaded', () => {

  const apiUrl = 'http://localhost:3000/api/v1/notes'
  const submitNoteButton = document.getElementById('submit-note-button')

  function index() {
    return fetch(apiUrl).then(response=>response.json()).then(data=>console.log(data))
  }

  submitNoteButton.addEventListener('click', function(event) {
    
  })

































})
