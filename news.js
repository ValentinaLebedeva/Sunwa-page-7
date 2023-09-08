/****** page documents chosing tabs ********/

const tabButtonsNews = document.querySelectorAll(".tab-link");
const tabColumn = document.querySelector(".tab-column");
const newsItems = document.querySelectorAll(".item");
const itemLinks = document.querySelectorAll(".item-link");
const newsSection = document.querySelector(".section-news-row");

tabColumn.addEventListener("click", choseTab);

function choseTab(e) {
    tabButtonsNews.forEach(function (item) {
        item.classList.remove("tab-link-active");
    });

    if (e.target.dataset.tab) {
        e.target.classList.add("tab-link-active");
    }
    /* filter documents by tab */
    newsItems.forEach(function (item) {
        item.classList.remove("hidden")
        if (e.target.dataset.tab != item.dataset.tab) {
            item.classList.add("hidden")
        }
    })
}

/* creating links to article and opening article on click */

for (i = 0; i < itemLinks.length; i++) {
    itemLinks[i].setAttribute("href", `./events${i}.html`);
}

/* article style on hover */

newsItems.forEach(function (item) {
    const itemText = item.querySelector(".item-text");
    const readBtn = item.querySelector(".read-more-btn");

    item.addEventListener("mouseover", function () {
        itemText.classList.add("item-text-active");
        readBtn.classList.add("read-more-btn--active");
    })

    item.addEventListener("mouseout", function () {
        itemText.classList.remove("item-text-active");
        readBtn.classList.remove("read-more-btn--active");
    })
})
