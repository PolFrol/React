import { createRoot } from "react-dom/client";
import { restaurants } from "./materials/mock";
const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(
  restaurants.map((restaurant) => {
    return (
      <section>
        <h2>{restaurant.name}</h2>
        <h3>Menu</h3>
        <Menu menu={restaurant.menu}></Menu>
        <h3>Reviews</h3>
        <Reviews reviews={restaurant.reviews}></Reviews>
      </section>
    )
  })
)

function Menu({ menu }) {
  return (
    <ul>
      {
        menu.map((menu) =>
          <li>{menu.name}</li>
        )
      }
    </ul>
  )
}

function Reviews({ reviews }) {
  return (
    <ul>
      {
        reviews.map((item) =>
          <li>{item.text}</li>
        )
      }
    </ul>
  )
}