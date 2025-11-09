const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "arjun@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: []
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "sneha@example.com",
    password: "123",
    taskCounts: { active: 1, newTask: 0, completed: 1, failed: 0 },
    tasks: []
  },
  {
    id: 3,
    firstName: "Ravi",
    email: "ravi@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: []
  },
  {
    id: 4,
    firstName: "Priya",
    email: "priya@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 0, failed: 0 },
    tasks: []
  },
  {
    id: 5,
    firstName: "Karan",
    email: "karan@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: []
  }
];

const admin = [{ id: 1, email: "admin@example.com", password: "123" }];

export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
