import $el from "./createElem.js";
const root = document.querySelector("#root");

async function fetches(page = 1) {
    const API = fetch(
        `https://jordan.ashton.fashion/api/goods/30/comments?page=${page}`
    );
    return API.then((item) => item.json()).then((data) => {
        return data.data.map((item) => {
            const api = $el("div", item.text, { className: "api" });
            root.append(api);
        });
    });
}
fetches(1);
