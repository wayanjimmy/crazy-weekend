// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      // return the updated state
      return state.map(function (s, i) {
        if (i == action.index) {
          s.likes++;
          return s;
        }

        return s;
      });
    default:
      return state;
  }
  return state;
}

export default posts;
