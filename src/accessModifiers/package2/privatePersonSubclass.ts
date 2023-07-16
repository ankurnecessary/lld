import { PrivatePerson } from "../package1/privatePerson";

export class PrivatePersonSubclass extends PrivatePerson {

    constructor(ssn: string, firstName: string, lastName: string) {
        super(ssn, firstName, lastName);
    }

}

const privatePersonSubclass: PrivatePersonSubclass = new PrivatePersonSubclass("111", "Ankur", "Gupta");

// console.log(privatePersonSubclass.ssn); // Property 'ssn' is private and only accessible within class 'PrivatePerson'.
// console.log(privatePersonSubclass.firstName); // Property 'firstName' is private and only accessible within class 'PrivatePerson'
// console.log(privatePersonSubclass.lastName); // Property 'lastName' is private and only accessible within class 'PrivatePerson'.
console.log(privatePersonSubclass.getFullName());