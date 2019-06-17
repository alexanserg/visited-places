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
  return this.name + ' - located in ' + this.location + '.' + ' ' + this.notes +  " " + "<div class='row'>" + "<div class='col-md-6'>" + this.image[0] + "</div>" + "<div class='col-md-6'>" +
  this.image[1] + "</div>" + "</div>";
  };
  var Mexico = new Place ("Coyote Cal's", "Baja, Mexico", ["sea", "sun", "Earth"], ["tacos", "tequila"], "Tis is a hostel with miles of stunning beach to explore during the day, and a courtyard fire next to a bar to make new friends at night. There are few places that are better for a laidback vacation at low cost.", ['<figure><img src="img/beach.jpg"><figcaption>Baja has some of the best beaches you can find in North America</figcaption></figure>','<figure><img src="img/courtyard.jpg"><figcaption>Coyote Cals has a cozy courtyard for creating casual companions</figcaption></figure>']);

var Korea = new Place('Gyeonggi-Do', 'Korea', ['Surisan', 'Anyang', 'Itaewon'], ['samgyupsal', 'kimchi bokkeumbap', 'Maeuntang'], 'Gyeonggi-Do is a province of Korea. There are many excellent things to see and experience here. Half of Korean cuisine consists of various delicious and hearty soups and stews. Start a your day right with a Seafood stew. Continue with an invigorating hike in beautiful Suri moauntian. Relax in one of the numerous spas, known as Jjimjilbang. Finish the day with a delicious meal of Korean BBQ. Make sure to visit Itaewon - known locally as International National Town - before you leave.', ['<figure><img src="img/suri1.jpg"><figcaption>Surisan mountain</figcaption></figure>', '<figure><img src="img/sauna.jpg"><figcaption>Korean saunas are very popular</figcaption></figure>']);

var LookoutTower = new Place('Central Oregon Cascades', 'Oregon', ['Volcanos', 'Lakes', 'Flowers', 'Old Growth Forest'], ['Your own camp made food'], 'The roads are full of potholes and washouts, only passable by high clearence vehicles', ['<figure><img src="img/tower.jpeg"><figcaption>Fire Lookout Cabin at Indian Ridge</figcaption></figure>', '<figure><img src="img/sisters.jpg"><figcaption>View of Broken Top from Soda Creek</figcaption></figure>']);

// front end
$(document).ready(function() {
  $('.formOne').submit(function(event) {
    event.preventDefault();
    $("#display").text("");
    $('#display').addClass("display");
    $('#display').html(Korea.paragraphDisplay());
  });
  $('.formTwo').submit(function(event) {
    event.preventDefault();
    $("#display").text("");
    $('#display').addClass("display");
    $('#display').html(LookoutTower.paragraphDisplay());
  });
    $('.formThree').submit(function(event) {
      event.preventDefault();
    $("#display").text("");
    $('#display').addClass("display");
    $('#display').html(Mexico.paragraphDisplay());
  });

});
