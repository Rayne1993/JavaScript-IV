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

class Student extends Person {
    constructor(stuAttr) {
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
        this.grade = stuAttr.grade;
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
    graduate() {
        if(this.grade >= 70) {
            return `${this.name} graduates!`;
        }else {
            return `${this.name} must retake the course`;
        }
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
        return `${student.name} recieves a perfect score on ${subject}.`
    }
    gradeGiven(student, grade) {
        let min = Math.ceil(student.grade - 100);
        let max = Math.floor(100 - student.grade);
        return student.grade + Math.floor(Math.random() * (max - min)) + min;
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
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
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
    grade: 80,
})

const ann = new Student({
    name: 'Ann',
    age: 28,
    location: 'New York',
    previousBackground: 'Retail',
    className: 'WEBPT 9',
    favSubjects: ['HTML', 'CSS'],
    grade: 90,
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
console.log(jen.grade(jes, "JavaSecript"));
console.log(jes.speak());
console.log(jes.listsSubjects());
console.log(jes.PRAssignments("JS3"));
console.log(jes.sprintChallenge("CSS"));
console.log(ray.speak());
console.log(ray.standUp("main_channel"));
console.log(ray.debugsCode(ann, "HTML"));
console.log(ray.demo("React"));
console.log(ray.grade(ann, "CSS 3"));

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

console.log(jen.gradeGiven(ann))
console.log(ann.graduate());
console.log(jen.gradeGiven(jes));
console.log(jes.graduate())
console.log(ray.gradeGiven(jes))

