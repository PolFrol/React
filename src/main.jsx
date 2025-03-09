import { createRoot } from "react-dom/client";
import { restaurants } from "./materials/mock";
const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(
  restaurants.map(({name, menu, reviews}) => {
    return (
      <section>
        <h2>{name}</h2>
        <h3>Menu</h3>
        <Menu menu={menu}></Menu>
        <h3>Reviews</h3>
        <Reviews reviews={reviews}></Reviews>
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