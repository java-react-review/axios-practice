import axios from "axios";

axios
  .get("http://localhost:8080/tasks")
  .then((resp) => {
    console.log(resp.status);
    console.log(resp.data);
  })
  .catch((err) => console.log("something went wrong in our request"));

const newTask = {
  description: "give dog a bath",
  priority: "MEDIUM",
  isComplete: false,
  dueDate: "2022-05-15",
};

axios
  .post("http://localhost:8080/tasks", newTask)
  .then((resp) => {
    console.log(resp.status);
    console.log(resp.data);
  })
  .catch((err) => console.log("failed to create new task"));
