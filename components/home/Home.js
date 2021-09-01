import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CategoryArticle } from "./HomeStyle";
import { useEffect, useState } from "react";
import { getData } from "../../utility/Datahandler";

export default function Home() {
  const [categories, setCategory] = useState([]);
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await getData("/banners")
      .then((response) => {
        setBanners(response);
      })
      .catch((error) => console.log("something went wrong", error));

    await getData("/categories")
      .then((response) => {
        setCategory(response);
      })
      .catch((error) => console.log("something went wrong", error));
  };

  return (
    <>
      <CategoryArticle>
        <Carousel
          preventMovementUntilSwipeScrollTolerance
          swipeable
          showStatus={false}
          showThumbs={false}
          emulateTouch
        >
          {banners
            ?.filter((banner) => banner.isActive)
            .map((banner) => (
              <div key={banner.id}>
                <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
              </div>
            ))}
        </Carousel>
      </CategoryArticle>

      {categories
        ?.sort((a, b) => a.name - b.name)
        .filter((category) => category.enabled)
        .map((category, index) =>
          index % 2 == 0 ? (
            <CategoryArticle key={category.id}>
              <div>
                <img src={category.imageUrl} alt={category.name} />
                <div className="categoryDescription">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <button>{`Explore ${category.key}`}</button>
                </div>
              </div>
            </CategoryArticle>
          ) : (
            <CategoryArticle key={category.id}>
              <div>
                <div className="categoryDescription">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <button>{`Explore ${category.key}`}</button>
                </div>

                <img src={category.imageUrl} alt={category.name} />
              </div>
            </CategoryArticle>
          )
        )}
    </>
  );
}
