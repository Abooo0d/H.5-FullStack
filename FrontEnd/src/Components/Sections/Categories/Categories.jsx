import React from "react";
import "./Categories.css";
import CategoriesCard from "../../CategorieCard/CategoriesCard";
import { GiChelseaBoot } from "react-icons/gi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { PiPantsFill } from "react-icons/pi";
import { GiNecklaceDisplay } from "react-icons/gi";
import Container from "../../container/Container";

function Categories() {
  return (
    <div className="categories">
      <Container>
        <h1 className="label">Categories</h1>
        <p className="desc">
          Dive into a world of style with our diverse categories at{" "}
          <span>H.5</span>. From trendy apparel to essential accessories,
          explore curated collections that cater to your unique fashion
          preferences. Elevate your wardrobe and express your individuality with
          ease.
        </p>
        <div className="categories-con">
          <CategoriesCard name="Pages">
            <HiMiniShoppingBag />
          </CategoriesCard>
          <CategoriesCard name="Clothes">
            <PiPantsFill />
          </CategoriesCard>
          <CategoriesCard name="Shoes">
            <GiChelseaBoot />
          </CategoriesCard>
          <CategoriesCard name="Accessories">
            <GiNecklaceDisplay />
          </CategoriesCard>
        </div>
      </Container>
    </div>
  );
}

export default Categories;
