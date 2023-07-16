import { ProtectedPerson } from "../package1/protectedPerson";

export class ProtectedPersonSubclass extends ProtectedPerson {

    constructor(ssn: string, firstName: string, lastName: string) {
        super(ssn, firstName, lastName);
    }

}

const protectedPersonSubclass: ProtectedPersonSubclass = new ProtectedPersonSubclass("111", "Ankur", "Gupta");
// console.log(protectedPersonSubclass.ssn); // Property 'ssn' is protected and only accessible within class 'ProtectedPerson' and its subclasses.
// console.log(protectedPersonSubclass.firstName); // Property 'ssn' is protected and only accessible within class 'ProtectedPerson' and its subclasses.
console.log(protectedPersonSubclass.lastName);
console.log(protectedPersonSubclass.getFullName());