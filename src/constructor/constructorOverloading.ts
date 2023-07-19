/*
https://stackoverflow.com/questions/61154499/typescript-multiple-constructor-implementations-are-not-allowed
We actually don't have the concept of constructor overloading in typescript but we have other way of doing it.
*/

class User {
    username: string;
    password: string;

    // "?" optional parameter helps in implementing [[[constructor overloading]]]
    // The "?" says that its optional parameter
    constructor(username?: string, password?: string) {
        if (username) { // if user exists , you can implement the first constructor
            this.username = username;
        }
        if (password) { // if password exists : you can implement the second one
            this.password = password;
        }
    }

    /*
    static fromJson(item: Object): any {
        return new User(item['username']);
    }
    */

    // This static method will behave like a [[[constructor]]]
    static constructorFromUser(item: { user?: string, password?: string }) {
        return new User(item.user);
    }

    // This static method will behave like a [[[constructor]]]
    static constructorFromPassword(item: { user?: string, password?: string }) {
        return new User(undefined, item.password);
    }

}

const user1: User = User.constructorFromUser({ user: "ankurnecessary" });
const user2: User = User.constructorFromPassword({ password: "dkjfdhs21312" });

console.log(user1);
console.log(user2);