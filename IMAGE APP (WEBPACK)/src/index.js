// links --> https://api.unsplash.com/search/photos?query=${value}&per_page=20&client_id=mEzKUQAtzwqV-fY7nY3VwlS9Z8YAAyZ2JB_4XLItkQQ

import { navbar } from "../components/navbar.js";

let nav = document.getElementById('navbar');
nav.innerHTML = navbar();

import { search_Images, append } from "../components/fetch.js";

let search = (e) => {
    if (e.key === "Enter") {
        let val = document.getElementById('query').value;
        search_Images(val).then((res) => {
            let cont = document.getElementById('container');
            cont.innerHTML = null;
            append(res.results,cont);
        })
    }
}

document.getElementById('query').addEventListener("keydown", search);

let categories = document.getElementById('categories').children

// arrow function cannot read "this.id" thus using normal function
function c_search() {
    //console.log(this.id)
    search_Images(this.id).then((res) => {
        let cont = document.getElementById('container');
        cont.innerHTML = null;
        append(res.results, cont);
    })
}

for (let el of categories) {
    el.addEventListener("click", c_search)
}

// h3 = {
//     id: "nature",
//     c_search()
// }

// let search_Images = async () => {
//     let val = document.getElementById('query').value;
//     try {
//         let res = await fetch(`https://api.unsplash.com/search/photos?query=${val}&per_page=20&client_id=mEzKUQAtzwqV-fY7nY3VwlS9Z8YAAyZ2JB_4XLItkQQ`);

//         let data = await res.json();
//         console.log(data)
//     } catch (err) {
//         console.log(err);
//     }
// }

//sort

let sort = document.getElementById("select")
sort.addEventListener("change", c_sort)

function c_sort() {
    console.log(this.value)
    search_Images(this.value).then((data) => {
        console.log(data)
        let container = document.getElementById("container")
        container.innerHTML = null
        append(data.results, container)
    })
}

// filter

let filter = document.getElementById("filter")
filter.addEventListener("change", cfilter)

function cfilter() {
    console.log(this.value)
    search_Images(this.value).then((data) => {
        console.log(data)
        let container = document.getElementById("container")
        container.innerHTML = null
        append(data.results, container)
    })
}