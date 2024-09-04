// function equalizeCardHeights() {
//     const cardContainer = document.getElementById('card-container');
//     const cards = cardContainer.getElementsByClassName('card');
//     let maxHeight = 0;

//     // Reset heights before calculating (necessary if resizing window)
//     for (let card of cards) {
//         card.style.height = 'auto';
//     }

//     // Calculate the max height of all cards
//     for (let card of cards) {
//         const cardHeight = card.offsetHeight;
//         if (cardHeight > maxHeight) {
//             maxHeight = cardHeight;
//         }
//     }

//     // Set all cards to the max height
//     for (let card of cards) {
//         card.style.height = maxHeight + 'px';
//     }
// }

// // Equalize card heights on window load and resize
// window.addEventListener('load', equalizeCardHeights);
// window.addEventListener('resize', equalizeCardHeights);

$(document).ready(function () {
    $.getJSON("data/class.json", function (data) {
        console.log(data)
        let classesContainer = $("#card-container");
        data.forEach(function (classItem) {
            let cardHtml = `
                <div class="col-md-4 mb-4 d-flex">
                    <div class="card" id="${classItem.ID}"">
                        <img src="${classItem.ImageUrl}" class="card-img-top" alt="${classItem.Name}">
                        <div class="card-body">
                            <h5 class="card-title">${classItem.Name}</h5>
                            <p class="card-text">${classItem.ShortDesc}</p>
                            <a href="#" class="btn btn-outline-success mt-auto align-self-start">View</a>
                        </div>
                    </div>
                </div>
            `;
            classesContainer.append(cardHtml);
        });
    });
});
