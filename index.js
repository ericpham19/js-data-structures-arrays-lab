// Write your solution here!

const pets = ["Milo", "Otis", "Garfield"];

function append() {
   pets.append("Odie")
}
function prepend(){
    pets.prepend("Odie");
}

function removeLast(){
    pets.slice(0, pets.length-1);   
}

function removeFirst(){
    pets.slice(1);
}