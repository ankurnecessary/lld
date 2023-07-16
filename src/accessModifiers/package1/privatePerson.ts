export class PrivatePerson {

    private ssn: string; // This is private member
    private firstName: string; // This is private member
    private lastName: string; // This is private member

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() { // If no access modifier is defined then by default it is public
        return `${this.firstName} ${this.lastName}`;
    }

}


let person = new PrivatePerson('153-07-3130', 'John', 'Doe');
// console.log(person.ssn); // Property 'ssn' is private and only accessible within class 'PrivatePerson'.

console.log(person.getFullName());