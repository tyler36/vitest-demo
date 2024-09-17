export async function fetchTodoList() {
  return (
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
  ).json()
}
