// An array of image objects
var products = [
  {
    imageUrl: "/images/MicrosoftTeams-image (1).png",
    brandname: "Gucci",
    productName: " Men Cotton Topwear M",
    category: "Topwear",
    price: "10",
    size: "Large",
    sex: "Male",
  },
  {
    imageUrl: "/images/MicrosoftTeams-image (2).png",
    brandname: "Nike",
    productName: " Women Leather Bottomwear L",
    category: "Bottomwear",
    price: "15",
    size: "Medium",
    sex: "Female",
  },
  {
    imageUrl: "/images/MicrosoftTeams-image (3).png",
    brandname: "Dior",
    productName: " Kids Silk Topwear S",
    category: "Jacket",
    price: "20",
    size: "Small",
    sex: "Male",
  },
  {
    imageUrl: "/images/MicrosoftTeams-image (4).png",
    brandname: "Balenciaga",
    productName: " Men Cotton Bottomwear M",
    category: "Topwear",
    price: "40",
    size: "Small",
    sex: "Female",
  },
  {
    imageUrl: "/images/MicrosoftTeams-image (1).png",
    brandname: "Prada",
    productName: " Women Leather Topwear S",
    category: "Topwear",
    price: "10",
    size: "Large",
    sex: "Male",
  },
  {
    imageUrl: "/images/MicrosoftTeams-image (2).png",
    brandname: "Luis Vuitton",
    productName: " Kids Silk Bottomwear L",
    category: "Bottomwear",
    price: "15",
    size: "Medium",
    sex: "Female",
  },
  {
    imageUrl: "/images/MicrosoftTeams-image (3).png",
    brandname: "Gucci",
    productName: " Men Cotton Topwear M",
    category: "Jacket",
    price: "20",
    size: "Small",
    sex: "Male",
  },
  {
    imageUrl: "/images/MicrosoftTeams-image (4).png",
    brandname: "Nike",
    productName: " Women Leather Bottomwear S",
    category: "Topwear",
    price: "40",
    size: "Small",
    sex: "Female",
  },
  // Add more image objects here
];
for (let i of products) {
  let imageCard = document.createElement("div");
  imageCard.classList.add("image-card", "hide");
  //creating a image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //adding image
  let image = document.createElement("img");
  image.setAttribute("src", i.imageUrl);
  imgContainer.appendChild(image);
  imageCard.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //
  let bname = document.createElement("h5");
  let name = document.createElement("span");

  bname.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  bname.innerText = i.brandname.toUpperCase();
  container.appendChild(bname);
  bname.appendChild(name);
  //
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  imageCard.appendChild(container);
  document.getElementById("products").appendChild(imageCard);
}

// element.classList.remove("hide");
//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".image-card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//display all products Initially
//Initially display all products
window.onload = () => {
  // element.classList.remove("hide");
  let elements = document.querySelectorAll(".image-card");
  //loop through all cards
  elements.forEach((element) => {
    element.classList.remove("hide");
  });
};
