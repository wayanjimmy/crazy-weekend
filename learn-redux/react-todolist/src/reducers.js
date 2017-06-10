import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from './actions'

const initialState = {
  visibilityFilters: VisibilityFilters.SHOW_ALL,
  todos: [],
}

function todos(state = [], action) {
  if (action.type === ADD_TODO) {
    return [
      ...state,
      {
        text: action.text,
        completed: false,
      },
    ]
  }

  if (action.type === TOGGLE_TODO) {
    return state.map((todo, index) => {
      if (index === action.index) {
        return Object.assign({}, todo, {
          completed: !todo.completed,
        })
      }
      return todo
    })
  }

  return state
}

function visibilityFilter(state = SHOW_ALL, action) {
  if (action.type === SET_VISIBILITY_FILTER) {
    return action.filter
  }
  return state
}

function todoApp(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action),
  }
}
