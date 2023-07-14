import { Student } from "./student";

const s1: Student = new Student();
s1.name = "Vikas";
s1.psp = 81;
console.log(s1);

const s2: Student = new Student();
s2.name = "Gayathree";
s2.psp = 74;
console.log(s2);

s1.psp = 61;

s1.login();
s2.login();