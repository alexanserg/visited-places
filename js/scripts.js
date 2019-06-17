function Place(name, location, landmarks, food, notes, image) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.food = food;
  this.notes = notes;
  this.image = image;
}

Place.prototype.addPlace = function (place) {
  this.place.push(place);
};

Place.prototype.paragraphDisplay = function () {
  return this.name + ' is located in ' + this.location + '.' + ' ' + this.notes +  " " +
  this.image;
  };


var Korea = new Place('Gyeonggi-Do', 'Korea', ['Surisan', 'Anyang', 'Itaewon'], ['samgyupsal', 'kimchi bokkeumbap', 'Maeuntang'], 'Gyeonggi-Do is a province of Korea. There are many excellent things to see and experience here. Half of Korean cuisine consists of various delicious and hearty soups and stews. Start a your day right with a Seafood stew. Continue with an invigorating hike in beautiful Suri moauntian. Relax in one of the numerous spas, known as Jjimjilbang. Finish the day with a delicious meal of Korean BBQ. Make sure to visit Itaewon - known locally as International National Town - before you leave.',  ['<img src="img/suri1.jpg">','<img src="img/suri2.jpg">','<img src="img/suri3.jpg">']);

var LookoutTower = new Place('Indian Ridge Lookout Tower', 'Oregon', ['Volcanos', 'Lakes', 'Flowers', 'Old Growth Forest'], ['Your own camp made food'], 'The roads are full of potholes and washouts, only passable by high clearence vehicles', ['<img src="img/tower.jpeg">']);

// front end
$(document).ready(function() {
  $('.formOne').submit(function(event) {
    event.preventDefault();
    console.log("here");
    $('#display').html(Korea.paragraphDisplay());
  });
});
$(document).ready(function() {
  $('.formTwo').submit(function(event) {
    event.preventDefault();
    console.log("here");
    $('#display').html(LookoutTower.paragraphDisplay());

  });
});
