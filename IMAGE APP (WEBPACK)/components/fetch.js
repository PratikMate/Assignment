let search_Images = async (val) => {
    try {
        let res = await fetch(`https://api.unsplash.com/search/photos?query=${val}&per_page=20&client_id=mEzKUQAtzwqV-fY7nY3VwlS9Z8YAAyZ2JB_4XLItkQQ`);

        let data = await res.json();
        console.log(data)

        return data;

    } catch (err) {
        console.log(err);
    }
}

let append = (data, cont) => {
    data.forEach(({alt_description, urls:{small}}) => {

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = small;

        let h3 = document.createElement('h3');
        h3.innerText = alt_description;

        div.append(img,h3);
        cont.append(div);
    })

}
export { search_Images, append }