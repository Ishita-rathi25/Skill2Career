// ================= SEARCH =================

function searchResources() {

    const input =
        document.getElementById("resourceSearch");

    const searchText =
        input.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(".resource-card");

    const noResult =
        document.getElementById("noResult");

    let found = 0;


    cards.forEach(function(card) {

        const name =
            card.dataset.name.toLowerCase();

        const category =
            card.dataset.category.toLowerCase();

        const text =
            card.innerText.toLowerCase();


        if (
            name.includes(searchText) ||
            category.includes(searchText) ||
            text.includes(searchText)
        ) {

            card.style.display = "block";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    if (found === 0) {

        noResult.style.display = "block";

    } else {

        noResult.style.display = "none";

    }

}



// ================= FILTER =================

function filterResources(category, button) {

    const cards =
        document.querySelectorAll(".resource-card");


    document.querySelectorAll(".category")
        .forEach(function(btn) {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    let found = 0;


    cards.forEach(function(card) {

        const cardCategory =
            card.dataset.category;


        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "block";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    document.getElementById("noResult").style.display =
        found === 0 ? "block" : "none";

}



// ================= RESOURCE =================

function openResource(resourceName) {

    alert(
        resourceName +
        "\n\nDetailed resource section will be connected here."
    );

}