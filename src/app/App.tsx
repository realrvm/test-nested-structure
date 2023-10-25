import { useLoaderData, useNavigate } from "react-router-dom";

import { AppRouter } from "./providers/router-dom-provider";
import { ClothingSchema } from "@/entities/clothing";

function App() {
  const { categories } = useLoaderData() as { categories: ClothingSchema[] };

  const navigate = useNavigate();

  const goToClothing = () => {
    navigate(`/${categories[0].slug}`);
  };

  return (
    <section>
      <button className="btn" onClick={goToClothing}>Go to clothing</button>
      <AppRouter />
    </section>
  );
}

export default App;
