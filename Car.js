function Car(make, model, year, color, seats, passenger){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
  this.passengers = passenger || [];
}

Car.prototype.sell = function(newOwner){
   this.previousOwners.push(this.owner);
   this.owner = newOwner;

};

Car.prototype.paint = function(newColor){
  this.color = newColor;
};

//------------------------------------------------------

Car.prototype.start = function() {
	this.running = true;
};

Car.prototype.off = function() {
	this.running = false;
};

Car.prototype.driveTo = function(destination) {
	if (this.running == true) {
		console.log("driving to" + destination);
		return true;
	} else {
		return false;
	}  
};

Car.prototype.park = function() {
	if (!this.running == true) {
		console.log("Parked!!") 
	  return true;
	} else {
		return false;
	}
};

//---------------------------------------------------
Car.prototype.pickUp = function(name) {
	if (this.running && this.seats > this.passengers.length+1) {
	    this.passengers.push(name);
		console.log("driving to 'pick up <friend>'");
	 return true;
	} else {
		return false;
	}
};

Car.prototype.dropOff = function(name) {
	if (this.running && this.passengers.indexOf(name) != -1) {
		this.passengers.splice(this.passengers.indexOf(name),1);
		return true;
	} else {
		return false;
	}
};

Car.prototype.passengerCount = function() {
	return this.passengers.length;
}




// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;