import axios from "axios";

export class HttpHelper {
    private host : string;
    constructor(host) {
        this.host = host;
    }
    get(path, headers) {
        return this.init(path, "GET", null, headers);
    }
    post(path, body, headers) {
        return this.init(path, "POST", body, headers);
    }
    put(path, body, headers) {
        return this.init(path, "PUT", body, headers);
    }
    delete(path, headers) {
        return this.init(path, "DELETE", null, headers);
    }
    init(path, method, body, headers = {}) {
        return new Promise((resolve, reject) => {
            axios({
                url: `${this.host}/${path}`,
                method,
                headers: headers,
                data: body || null
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}