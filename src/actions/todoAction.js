export function addTodo(text) {
  return { type: "ADD_TODO", text };
}

export function deleteTodo(index) {
  return{ type: "DELETE_TODO", index };
}