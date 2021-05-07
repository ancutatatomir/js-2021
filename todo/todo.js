import "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"
import { ToDoList, Task} from "./classes.js"


Vue.component('task', {
props: ['task'], 
template: ` <li class="task">
    <span class="desc"> {{ task.getDescription() }} </span> 


</li> `


})

Vue.component('todo-list', {
data() {
    return {
        list: new ToDoList('Today'),
        newTaskDescription: ''
    }
},

template: `
<div>

<h2>{{ list.getName() }}</h2>
<ul>

<task v-for="(task, index) in list.getTasks()"   
:key="index"
:task="task"



></task>

</ul>   
<input

type = text
v-model="newTaskDescription" 
placeholder="Something to do" 
@keyup.enter="addTask"

>


</div>`,

methods: { addTask() { 
    this.list.add(new Task(this.newTaskDescription))
}},




} )

new Vue({
    el: "#app", 
    template: `<todo-list></todo-list>`
    
    

})