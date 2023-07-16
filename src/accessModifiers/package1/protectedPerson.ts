export class ProtectedPerson {
    // We can define access modifiers in constructor too
    constructor(
        protected ssn: string // Protected member
        , private firstName: string
        , public lastName: string
    ) { }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const p1: ProtectedPerson = new ProtectedPerson('153-07-3130', 'John', 'Doe');
// console.log(p1.ssn); // Property 'ssn' is protected and only accessible within class 'ProtectedPerson' and its subclasses.
// console.log(p1.firstName); // Property 'firstName' is private and only accessible within class 'ProtectedPerson'.
console.log(p1.lastName);
console.log(p1.getFullName());