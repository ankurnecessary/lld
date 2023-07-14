export class Student {
    name: string;
    age: number;
    psp: number;
    batch: string;

    login(): void {
        console.log(`${this.name} has logged in`);
    }

    increasePsp(newPsp: number): void {
        this.psp = newPsp;
    }

}