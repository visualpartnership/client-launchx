import http from "../http-common";

class ExplorerService {
  getAll() {
    return http.get("/explorers");
  }
  get(id) {
    return http.get(`/explorers/${id}`);
  }
  create(data) {
    return http.post("/explorers", data);
  }
  update(id, data) {
    return http.put(`/explorers/${id}`, data);
  }
  delete(id) {
    return http.delete(`/explorers/${id}`);
  }
  getAllMCommanders() {
    return http.get("/MissionCommanders");
  }
  getMCommanders(id) {
    return http.get(`/MissionCommanders/${id}`);
  }
  createMC(data) {
    return http.post("/MissionCommanders", data);
  }
  updateMC(id, data) {
    return http.put(`/MissionCommanders/${id}`, data);
  }
  deleteMC(id) {
    return http.delete(`/MissionCommanders/${id}`);
  }
}

export default new ExplorerService();
