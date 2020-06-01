// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
	id: number;
	name: string;
};

/*
export type Todo = {
	readonly id: number;
	readonly text: string;
	readonly done: boolean;
};
*/

export type Place = "home" | "work" | { custom: string };

export type Todo = Readonly<{
	id: number;
	text: string;
	done: boolean;
	place?: Place;
}>;

export type CompletedTodo = Todo & {
	readonly done: true;
};
