import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import Navigo from "navigo"; 
import HomePage from './page/HomePage';

const router = new Navigo("/");
const render = (content) => {
    const app = document.querySelector("#app");
    app.innerHTML = content();
};

router.on("/", function () {
    render(HomePage);
});
router.resolve();