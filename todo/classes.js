class Color {
    red
    green
    blue

    constructor(red, green, blue) {
        this.red = red
        this.green = green
        this.blue = blue

    }


    //creeaza noua culoare aleatorie
static random() {
    return new Color(random(255), random(255), random(255))


}

}


class Task {

    description
    color
    done

constructor(description) {
this.description = description
this.color = Color.random
this.done = false 

}


switchDone() {
this.Done = !this.done 
}

isDone() {
    return this.done }


changeDescription(newDescription) {

    if (newDecription > 100) {
    throw 'Description is too long' }


this.description = newDescription
}

getDescription() {
    return this.description }
}

class ToDoList {

    name
    tasks = []

    constructor(name) {
        this.name = name
    }


rename(newName) {
    this.name = newName
}

add(task) {
    this.tasks.push(task) 
}

remove(index) {
  this.tasks.splice(index, 1)
    
}

// avem nevoie de 2 getteri (nume si taskuri) [pentru incapsulare
getName() {

return this.name }

getTasks() {
 return this.tasks}

}


export {ToDoList, Task}


//let today = new ToDoList(description('Today')
//today.add(new Task('Say good morning'))
//today.add(new Task('Learn OOP'))
//today.remove(1)
