let dacia = {

    make: "Dacia",
    model: 1310,
    color: "verde",
    year: 1978,
    mileage: 526737,
    maxSpeed: 180,
    averageConsumption: 11.5,
    batteryCapacity: 150,
    batteryCharge: 150, 
    paint: function(color) {
    this.color = color


    },



    move: function (distance) {
    consumption = this.averageConsumption * distance / 100 
    if (consumption > this.batteryCharge) {
        this.batteryCharge = 0 
        this.mileage +=this.distanceToEmpty ()
} else    {this.batteryCharge -= consumption 
          this.mileage += distance


}



},



    recharge: function () {
    this.batteryCharge = this.batteryCapacity
        
   

},


distanceToEmpty: function () {
 return 100 * this.batteryCharge / this.averageConsmption 
    
}
 }


let ferrari = {
  
    make: "Ferrari",
    model: "DINO",
    color: "rosu",
    year: 1972,
    mileage: 526737,
    maxSpeed: 180,
    paint: function(color) {
    this.color = color }


}



dacia.paint("galben")
dacia.move (100)
console.log(dacia.distanceToEmpty ())
dacia.move (100)
console.log(dacia.distanceToEmpty ())
dacia.move (100)
console.log(ferrari)