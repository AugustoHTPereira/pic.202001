const INITIAL_STATE = {
  name: "AUGUSTO",
  id: "4532165-6516-5165-51651681"
};

export default function user(state = INITIAL_STATE, action) {
  console.log("Action called", action);

  switch (action.type) {
    case "GET_USER":
      return { state };
    default:
      return state;
  }
}
