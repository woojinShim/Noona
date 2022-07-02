let initialState = {
  id: "",
  password: "",
};

function authenticateReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
  }
}

export default authenticateReducer;
