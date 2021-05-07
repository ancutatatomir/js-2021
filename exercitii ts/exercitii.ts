interface Masina {
    greutate: Number
    kilometraj: Number
    start() : void

}
interface Conduce {
    merge (km: Number) 
}


class BMW implements Masina,Conduce {
    greutate: Number
    kilometraj: Number
    start() : void {

    }
    merge (km: Number){
            
    }
}
class Dacia implements Masina {
    greutate: Number
    kilometraj: Number
    start() : void {

    }
    constructor(){
        this.greutate = 0
        this.kilometraj = 0
    }
}



