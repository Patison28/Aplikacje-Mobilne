import axios from 'axios'
//Zadeklarowanie endpointów
const createTaskEndpoint = 'http://localhost:8090/createTask'
const getClientTasksEndpoint = 'http://localhost:8090/getClientTasks/'
const updateTaskEndpoint = 'http://localhost:8090/updateTask'


//Pobieranie danych o kliencie z id

const getClientTasks = async (id) => {
  let result
  await axios.get(getClientTasksEndpoint + id)
    .then((response) => {
      result = response.data
    })
    .catch((errors) => {
      result = errors.message
    })
  console.log(result)
  return result
}

// newClient
// {
//   ClientId: 1,
//   Name: 'testAxios',
//   Priority: 'testAxios'
// }
const createTask = async (newTas) => {
  let result
  await axios
    .put(createTaskEndpoint, newTas)
    .then((response) => {
      result = response.data
    })
    .catch((errors) => {
      result = errors.message
    })
  console.log(result)
  return result
}

// newClient
// {
//   Id: 1,
//   Name: 'testAxios',
//   Priority: 'testAxios'
//   Done: true
// }
const updateTask = async (task) => {
  let result
  await axios
    .post(updateTaskEndpoint, task)
    .then((response) => {
      result = response.data
    })
    .catch((errors) => {
      result = errors.message
    })
  console.log(result)
  return result
}

export {
  getClientTasks, createTask, updateTask,
}
