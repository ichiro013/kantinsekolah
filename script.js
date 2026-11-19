
const cards = document.querySelectorAll(".card");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");

let activeCategory = "all";

// FILTER MENU
function filterMenu(category, button) {
    activeCategory = category;

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    showMenu();
}

// SEARCH DAN FILTER
function showMenu() {
    const keyword = searchInput.value.toLowerCase();
    let visibleCount = 0;

    cards.forEach(card => {
        const category = card.dataset.category;
        const name = card.querySelector("h3").textContent.toLowerCase();

        const matchCategory =
            activeCategory === "all" ||
            category === activeCategory;

        const matchSearch = name.includes(keyword);

        if (matchCategory && matchSearch) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    emptyMessage.hidden = visibleCount !== 0;
}

// PENCARIAN REALTIME
searchInput.addEventListener("input", showMenu);
