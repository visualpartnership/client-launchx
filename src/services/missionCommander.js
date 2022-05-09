import http from "../http-common";

class missionCommander {
  getAll() {
    return http.get("/missioncommander");
  }
  get(id) {
    return http.get(`/missioncommander/${id}`);
  }
  create(data) {
    return http.post("/missioncommander", data);
  }
  update(id, data) {
    return http.put(`/missioncommander/${id}`, data);
  }
  delete(id) {
    return http.delete(`/missioncommander/${id}`);
  }
}

export default new missionCommander();
