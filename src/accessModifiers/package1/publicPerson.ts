export class PublicPerson {

    constructor(
        public ssn: string
        , public firstName: string
        , public lastName: string
    ) { }

    public getFullName() { // This is a public member of a class
        return `${this.firstName} ${this.lastName}`;
    }

}