import tw from "twin.macro";
import { useState } from "react";

import Layout from "../components/Layout";
import { Todo, CompletedTodo, Place } from "../interfaces";

const originTodos: Todo[] = [
	{ id: 1, text: "Buy egg", done: false, place: "work" },
	{ id: 2, text: "Buy milk", done: false, place: "home" },
	{
		id: 2,
		text: "Learn typescript",
		done: false,
		place: { custom: "learn" },
	},
];

const IndexPage: React.SFC = () => {
	const [todos, setTodos] = useState<Todo[]>(originTodos);

	function toggleTodo(todo: Todo): Todo {
		return {
			id: todo.id,
			text: todo.text,
			done: !todo.done,
		};
	}

	function completeAll(todos: Todo[]): CompletedTodo[] {
		return todos.map((todo) => ({
			...todo,
			done: true,
		}));
	}

	function placeToString(place: Place): string {
		if (place == "home") {
			return "Home";
		} else if (place == "work") {
			return "Work";
		} else {
			return place.custom;
		}
	}

	return (
		<Layout title="Home | Next.js + TypeScript Example">
			<div css={[tw`block`]}>
				<h1 css={[tw`text-gray-700 text-xl`]}>Todos</h1>
				{todos.map((todo) => (
					<div css={[tw`mt-2`]} key={todo.id}>
						<div css={[tw`flex-row`]}>
							<label css={[tw`inline-flex items-center`]}>
								<input
									type="checkbox"
									checked={todo.done}
									onClick={() => {
										const toggledTodos = todos.map((t) => {
											if (t.id == todo.id) {
												return toggleTodo(t);
											}
											return t;
										});

										setTodos(toggledTodos);
									}}
								/>
								<span css={[tw`ml-2`]}>{todo.text}</span>
								{' -- '}
								<span>
									{todo.place
										? placeToString(todo.place)
										: null}
								</span>
							</label>
						</div>
					</div>
				))}
				<div css={[tw`pt-5`]}>
					<button
						type="button"
						onClick={() => {
							setTodos(completeAll(todos));
						}}
					>
						Complete All
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
