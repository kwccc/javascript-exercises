const findTheOldest = function(people) {
  const oldest = people.reduce((obj, person) => {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = new Date().getFullYear()
    }
    
    if (person.yearOfDeath - person.yearOfBirth > obj.yearOfDeath - obj.yearOfBirth) {
      obj = person
    }
    return obj
  }, {name: '', yearOfBirth: 0, yearOfDeath: 0})
  return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
