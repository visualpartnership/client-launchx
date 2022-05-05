import http from "../http-common";

class MCService {
  getAll() {
    return http.get("/mcproject");
  }
  get(id) {
    return http.get(`/mcproject/${id}`);
  }
  create(data) {
    return http.post("/mcproject", data);
  }
  update(id, data) {
    return http.put(`/mcproject/${id}`, data);
  }
  delete(id) {
    return http.delete(`/mcproject/${id}`);
  }
}

export default new MCService();
