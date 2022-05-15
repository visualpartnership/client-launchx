import http from "../http-common";

class fizzinfo {
  getAll() {
    return http.get("/fizzinfo");
  }
  get(id) {
    return http.get(`/fizzinfo/${id}`);
  }
}
export default new fizzinfo();
