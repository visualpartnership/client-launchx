import http from "../http-common";

class missionCommander {
  getAll() {
    return http.get("/missionCommander");
  }
  get(id) {
    return http.get(`/missionCommander/${id}`);
  }
  create(data) {
    return http.post("/missionCommander", data);
  }
  update(id, data) {
    return http.put(`/missionCommander/${id}`, data);
  }
  delete(id) {
    return http.delete(`/missionCommander/${id}`);
  }
}

export default new missionCommander();
