import { PublicPerson } from "../package1/publicPerson";

export class PublicPersonSubclass extends PublicPerson {

    constructor(ssn: string, firstName: string, lastName: string) {
        super(ssn, firstName, lastName);
    }

}

const publicPersonSubclass: PublicPersonSubclass = new PublicPersonSubclass("111", "Ankur", "Gupta");

console.log(publicPersonSubclass.ssn);
console.log(publicPersonSubclass.firstName);
console.log(publicPersonSubclass.lastName);
console.log(publicPersonSubclass.getFullName());