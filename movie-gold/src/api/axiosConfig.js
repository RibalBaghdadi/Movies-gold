import axios from "axios";

export default axios.create({
    baseURL: "https://0c832fa37822.ngrok-free.app",
    headers: {"ngrok-skip-browser-warning": "true"}
});
