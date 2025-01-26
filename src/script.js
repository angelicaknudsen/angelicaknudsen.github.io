function comparator(a, b) {
    if (a.dataset.projectindex < b.dataset.projectindex)
        return 1;
    if (a.dataset.projectindex > b.dataset.projectindex)
        return -1;
    return 0;
}

function SortData() {
    var indexes = document.querySelectorAll("[data-projectIndex]");
    var indexesArray = Array.from(indexes);
    console.log(indexesArray)
    let sorted = indexesArray.sort(comparator);
    sorted.forEach(e =>
        document.querySelector("#projectGallery").appendChild(e));
}

SortData()