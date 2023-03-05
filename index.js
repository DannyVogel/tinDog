import dogs from "./users.js"

let newDog = {}

startApp()

function startApp(){
    let notSwipedDogs = dogs.filter(dog => dog.hasBeenSwiped == false)
    newDog = notSwipedDogs.shift()
    document.querySelector(".dog-container").innerHTML = newDog.renderDog()
    document.querySelector('.profile-image').style.backgroundImage = `url(${newDog.avatar})`
}


document.addEventListener('click', (e)=> {
    if(e.target.id == 'choice-btn'){
        const badgeHtml = `<img class="badge" src="./badges/badge-${e.target.dataset.choice}.png">`
        document.querySelector('.profile-image').innerHTML += badgeHtml
        newDog.hasBeenSwiped = true;
        newDog.hasBeenLiked = e.target.dataset.choice == 'like' && true
        setTimeout(startApp, 1000)
    }
    
})


