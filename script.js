
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (i in names) {

  if (names[i][0] == 'j' || names[i][0] == 'J') {
    byeSpeaker.speak(names[i]);
  }
  else {
    helloSpeaker.speak(names[i]);
  }

}
