import axios from "axios";

const apiService = axios.create({
  /*   baseURL: "http://localhost:3000", */
  baseURL: "https://task-page-reti.onrender.com",
});

export const authUser = async (dates) => {
  const { data } = await apiService.post("/login", dates, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const registerUser = async (user) => {
  const { data } = await apiService.post("/register", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const checkUser = async (user) => {
  const { data } = await apiService.get("/users/profile", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const getTasks = async (id) => {
  const { data } = await apiService.get(`/users/${id}/tasks`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const createTask = async (task) => {
  const { data } = await apiService.post("/tasks", task, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};
export const deleteTask = async (id) => {
  const { data } = await apiService.delete(`/tasks/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const createCategory = async (data) => {
  const { response } = await apiService.post("/createCategory", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
export const deleteCategory = async (category) => {
  const { data } = await apiService.delete(
    `/deleteCategory?userId=${category.userId}&categoryName=${category.categoryName}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};

export const updateTask = async (id, task) => {
  const { data } = await apiService.patch(`/tasks/${id}`, task, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};
