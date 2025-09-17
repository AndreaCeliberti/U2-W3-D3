const getBook = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore");
      }
    })
    .then((dataObj) => {
      console.log(dataObj);
      // qui va la dom manipulation
      const row = document.querySelector(".row");
      dataObj.forEach((book) => {
        const col = document.createElement("div");
        col.className = "col col-md-4 col-xl-2";

        const card = document.createElement("div");
        card.className = "card mb-3 h-100 w-100 mx-auto p-3 d-inline-block ";

        const cardImg = document.createElement("img");
        cardImg.className = "img-fluid rounded-start mh-100";
        cardImg.style = "min-height: 310px";
        cardImg.src = book.img;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column";
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = `${book.title}`;
        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = `Price:${book.price}€`;
        const cardCat = document.createElement("p");
        cardCat.className = "text-body-secondary";
        cardCat.innerText = `Category:${book.category}`;
        const cardBtn1 = document.createElement("a");
        cardBtn1.className = " btn btn-danger d-flex align-self-baseline ";
        cardBtn1.innerText = "Scarta";
        cardBtn1.addEventListener("click", function () {
          card.classList.add("hidden");
        });

        const cardBtn2 = document.createElement("a");
        cardBtn2.className = "btn btn-success mt-1 d-flex align-self-baseline";
        cardBtn2.innerText = "Compra";

        cardBody.append(cardTitle, cardText, cardCat, cardBtn1, cardBtn2);
        card.append(cardImg, cardBody);

        col.appendChild(card);
        row.appendChild(col);
      });
    })

    .catch((error) => {
      alert(error);
    });
};
window.addEventListener("DOMContentLoaded", () => {
  getBook();
});

// img
// title
// price
// category
