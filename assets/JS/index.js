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
    .then((data) => {
      console.log(data);
      // qui va la dom manipulation
      const row = document.querySelector(".row");
      data.forEach((book) => {
        const col = document.createElement("div");
        col.className = "col col-md-4 col-xl-2";

        const card = document.createElement("div");
        card.className = "card h-100 w-100 mx-auto  ";

        // card.innerHTML = `
        // <div class="card";">
        //     <img src="${book.img}" class="card-img-top" alt="...">
        //     <div class="card-body">
        //         <h5 class="card-title">${book.title}</h5>
        //         <p class="card-text">${book.price}</p>
        //         <p class="card-text text-body-secondary ">${book.category}</p>
        //         <a href="#" class="btn btn-primary">Scarta</a>
        //         <a href="#" class="btn btn-primary">Compra</a>
        //  </div>
        // </div>`;
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
          col.classList.add("hidden");
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
