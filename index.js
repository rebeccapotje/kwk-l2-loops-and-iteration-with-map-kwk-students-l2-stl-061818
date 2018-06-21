// Code your solution in this file.



//let lowerCaseStudentNames = ['Adele', 'Beyonce', 'Lady', 'Madonna', 'Rihanna', 'Taylor']

function other (student) {
  return student.toLowerCase();
}

function lowerCaseStudentNames (list) {
return list.map(other)
}

function splitName(name) {
  const studentFirst = name.split(" ")[0];
  const studentLast = name.split(" ")[1];
  
  return { firstName : studentFirst, lastName : studentLast};
}

function nameToAttributes(list) {
  return list.map(splitName);
}

function attributesToPhrase(name) {
  const
}