import React from "react";
import FeatureCards from "../../FeatureCard/FeatureCards";
import Container from "../../container/Container";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { HiOutlineEmojiHappy } from "react-icons/hi";

import "./OurFeatures.css";
function OurFeatures() {
  return (
    <div className="our-feature">
      <Container>
        <div className="our-features-con">
          <h1 className="label">Our Features</h1>
          <p className="desc">
            Discover a seamless shopping experience at <span>H.5</span>. Our
            features include intuitive navigation, secure transactions, and
            swift deliveries. Explore curated collections, enjoy exclusive
            deals, and embrace the convenience of a platform designed to elevate
            your fashion journey effortlessly.
          </p>
          <div className="feature-con">
            <FeatureCards>
              <h1>Trustworthy</h1>
              <VscWorkspaceTrusted />
              <p>
                At <span>H.5</span>, trust is our cornerstone. Shop confidently
                knowing that each purchase is backed by quality assurance and
                customer satisfaction. We prioritize transparency and
                reliability, ensuring your wardrobe receives the trustworthy
                fashion it deserves.
              </p>
            </FeatureCards>
            <FeatureCards>
              <h1>Fashionable</h1>
              <HiMiniShoppingBag />
              <p>
                Indulge in the epitome of style at <span>H.5</span>. Discover a
                curated selection of fashion-forward attire that transcends
                trends. Elevate your wardrobe with our chic and trendy
                collections, where every garment embodies the essence of
                timeless elegance.
              </p>
            </FeatureCards>
            <FeatureCards>
              <h1>Happy Customers</h1>
              <HiOutlineEmojiHappy />
              <p>
                At <span>H.5</span>, happiness is our style. We celebrate
                satisfied customers who find joy in our chic and comfortable
                fashion. Join the smiles and shop with confidence at our store,
                where every purchase is a delight!
              </p>
            </FeatureCards>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurFeatures;
