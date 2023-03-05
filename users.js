import dogs from "./data.js"

class Dog {
    constructor(data){
        Object.assign(this,data)
    }
    sayWoof(){
        console.log(`${this.name} says woof!`)
    }
    renderDog(){
        return `
        <div class="profile-image">
            <p class="profile-details">${this.name}, ${this.age}</p>
            <p class="profile-bio">${this.bio}</p>
        </div>
        `
    }
}
const dogsData = dogs.map(dog => new Dog(dog))


export default dogsData
