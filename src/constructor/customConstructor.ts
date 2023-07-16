class Student {

    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const student: Student = new Student("John");
console.log(student); // Student { name: 'John' }