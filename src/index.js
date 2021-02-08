let addToy = false;
let toyCollection = document.querySelector('#toy-collection')

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function getToyObjects() {
  const url = "http://localhost:3000/toys";
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    // data = JSON.parse(data)

    // var data = JSON.stringify([{"model": "app.mdl", "pk": 1, "fields": {"name": "test", "rank": 1}}]);
    // data.forEach(function(element){
    //     console.log(element);
    // });



  }).then(response => { return response.json()
  }).then(response => allToys(response))

}

// getToyObjects()
// console.log(getToyObjects())
const newToyBtn = document.querySelector('#new-toy-btn')
newToyBtn.addEventListener('click', allToys)

function allToys(response){
  console.log(response)
  console.log(JSON.stringify(response));

  response.forEach((item, index) => {
    // 1 create tags 
    // 2 append in order we want them 
    // 3 fill them with what we want to fill them with 
    const newDiv = document.createElement('div');
    // const id = document.createElement('h2');
    const name = document.createElement('h2');
    // name.className = 'name'
    // name.className = 'name'
    const image = document.createElement('img');
    img.className = 'toy-avatar'
    const likes = document.createElement('p');
    // likes.className = 'likes'
    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn'

    newDiv.appendChild(id)
    newDiv.appendChild(name)
    newDiv.appendChild(image)
    newDiv.appendChild(likes)

    toyCollection.appendChild(newDiv)

    // name.innerHTML = item.name 
    // image.innerHTML = item.image
    // likes.innerHTML = `${item.likes} + " likes"`
    // likeBtn.innerHTML = "like"

    // likes.textContent = contentArray[index].likes 
    // if (contentArray[index].likes > 1 || contentArray[index].likes === 0) {
    //     likes.textContent += ' likes.'
    // } else {
    //     likes.textContent += ' like.'
    // }
  })
}