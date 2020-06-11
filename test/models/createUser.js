var person = new Object();

function CreateUser(name, job) {
    person.name = name;
    person.job = job;
    return JSON.stringify(person);
}

module.exports = { CreateUser }