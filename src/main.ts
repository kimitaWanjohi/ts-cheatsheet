// // Variables 

// let hello: string = "world";


// // functions 

// const getFullName = (name: string, surname: string): string => {
//     return name + " " + surname
// };

// console.log(getFullName('master', 'classs'));

// // objects and interfaces

// interface User {
//     name: string;
//     age: number;
//     gender?: string;
//     getMessage(): string;
// };

// const user: User = {
//     name: "monster",
//     age: 23,
//     gender: "male",
//     getMessage() {
//         return "hello" + name;
//     }
// };

// const user2: User = {
//     name: "Jake",
//     age: 32,
//     getMessage() {
//         return "hello" + name
//     }
// }

// console.log(user.age);

// // union

// let pageName: string | number = "2";

// let errMsg: string | null = null;

// interface ResponceInterface {
//     name: string | null;
//     age: string | null;
// }

// // aliases 

// type ID = string;
// type Tag = string;
// type MaybePopularTag = Tag | null;

// interface UserInterface {
//     id: ID;
//     name: string;
// }

// const popularTags: Tag[] = ["dragon", "monster"];

// const mpt: MaybePopularTag[] = null;


// // Void , any, unknown

// const doSomething = (): void => { // void in arrow
//     console.log('void');
// };

// function doSomething2 (): void {
//     console.log('void');
// };


// // any HINT avoid any

// let foo: any = "name";

// // never for function that never ends : )

// function doSomething3(): never {
//     throw 'some error';
// }

// // unknown

// let vUnknown: unknown = 10;


// // ts type assertion

// let s1: string = vUnknown as string;

// let pageNum: string = "1";

// // let numPage: number = pageNum as number; this throws an error
// // we need to convert it to unknown first

// let numPage: number = (pageNum as unknown) as number;

 
// DOM STUFF

// say input element
// const someElement = document.querySelector(".foo") as HTMLInputElement;

// console.log("someElement", someElement.value);

// adding listener
// use as to define element in ts
// const someElement = document.querySelector(".foo");

// someElement.addEventListener("click", (event) => {
//     const target = event.target as HTMLInputElement;
//     console.log("event",target.value);
// });

/// Classes

//not private public and private is only avalaible in ts

// interface UserInterface {
//     getFullname(): string;
// }

// class User implements UserInterface{
//     private firstName: string // can only be used inside the class
//     protected lastName: string // can be used in class and its children
//     readonly sirname: string // can not be changed works as const

//     constructor(firstName: string, lastName: string, sirname: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.sirname = sirname;
//     }
//     getFullname(): string {
//         return this.firstName + " " + " lastName" + " " + this.sirname;
//     }
// };

// class Admin extends User {
//     private editor: string;

//     setEditor(editor: string): void {
//         this.editor = editor;
//     }
//     getEditor(): string {
//         return this.editor
//     }
// }

// const user = new User("Monster", "Animal", "Danger");
// console.log(user.getFullname());

// const admin = new Admin("foo", "bar", "new");

// admin.setEditor("true");

// console.log(admin.getEditor);


/// Generics


// const addId = <T extends object>(obj: T) => {
//     const id = Math.random().toString(16);
//     return {
//         ...obj,
//         id,
//     };
// };

// interface UserInterface <T>{
//     name: string;
//     data: T;
// };

// const user: UserInterface <{meta: string}> = {
//     name: "Monster",
//     data: {
//         meta: "foo",
//     }
// };

// const user2: UserInterface<string[]> = {
//     name: "Monsterest",
//     data: ["foo", "bar"]
// };


// Enums

// enum Status {
//     NotStarted, 
//     InProgress,
//     Done,
// }

// console.log(Status.Done) // return 2

// let notStartedStatus: Status = Status.NotStarted; // 0

// notStartedStatus = Status.Done;// 2

// console.log(notStartedStatus);

//using string in enums 

// use enums for constants 

// enums can also be used in interfaces
// enum Status2 {
//     NotStarted = "NotStarted", 
//     InProgress = "InProgress",
//     Done = "Done",
// }


// let notStartedStatus: Status2 = Status2.NotStarted; // 'Notstarted'

// notStartedStatus = Status2.Done;// 'Done'

// console.log(notStartedStatus);

