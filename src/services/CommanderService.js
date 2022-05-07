import http from "../http-common";

class CommanderService {
  getAll() {
    return http.get("/commanders");
  }
  get(id) {
    return http.get(`/commanders/${id}`);
  }
  create(data) {
    return http.post("/commanders", data);
  }
  update(id, data) {
    return http.put(`/commanders/${id}`, data);
  }
  delete(id) {
    return http.delete(`/commanders/${id}`);
  }
}

export default new CommanderService();
