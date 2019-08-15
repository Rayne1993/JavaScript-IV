class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instrAttr) {
        super(instrAttr);
        this.specialty = instrAttr.specialty;
        this.favLanguage = instrAttr.favLanguage;
        this.catchPhrase = instrAttr.catchPhrase;
    }
    demo(subect) {
        return `Today we are learning about ${subect}.`;
    }
    grade(student, subject) {
        return `${student} recieves a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(stuAttr) {
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignments(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManagers extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstuctor = pmAttr.favInstuctor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel study times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}.`;
    }
}

const jen = new Instructor({
    name: 'Jennifer',
    age: 30,
    location: 'Ohio',
    specialty: 'UI',
    favLanguage: 'CSS',
    catchPhrase: 'filler',
});

const jes = new Student({
    name: 'Jessica',
    age: 25,
    location: 'Texas',
    previousBackground: 'Customer Service',
    className: 'WEBPT 9',
    favSubjects: ['JavaScript', 'CSS'],
})

const ray = new ProjectManagers({
    name: 'Ray',
    age: 34,
    location: 'California',
    gradClassName: 'WEB1',
    favInstuctor: 'Josh',
    specialty: 'JavaScript',
    favLanguage: 'JS',
    catchPhrase: 'filler',
});

console.log(jen.speak());
console.log(jen.demo("JavaScript"));  
console.log(jen.grade("Meg", "JavaSecript"));
console.log(jes.speak());
console.log(jes.listsSubjects());
console.log(jes.PRAssignments("JS3"));
console.log(jes.sprintChallenge("CSS"));
console.log(ray.speak());
console.log(ray.standUp("main_channel"));
console.log(ray.debugsCode("Mike", "HTML"));
console.log(ray.demo("React"));
console.log(ray.grade("Jay", "CSS"));