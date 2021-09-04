import { fetchBanners, fetchCategories } from "../Redux/actions/thunk";
import { CategoryArticle } from "../styles/HomeStyle";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { useEffect } from "react";
import Link from "next/Link";

import { useDispatch, useSelector } from "react-redux";

const HomeComponent = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);
  const bannerList = useSelector((state) => state.banners.bannerList);

  useEffect(() => {
    if (bannerList.length === 0) dispatch(fetchBanners());
    if (categoryList.length === 0) dispatch(fetchCategories());
  }, []);

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
          {bannerList
            ?.filter((banner) => banner.isActive)
            .map((banner) => (
              <div key={banner.id}>
                <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
              </div>
            ))}
        </Carousel>
      </CategoryArticle>

      {categoryList
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
                  <Link
                    href={"/products/" + category.id}
                  >{`Explore ${category.key}`}</Link>
                </div>
              </div>
            </CategoryArticle>
          ) : (
            <CategoryArticle key={category.id}>
              <div>
                <div className="categoryDescription">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <Link
                    href={"/products/" + category.id}
                  >{`Explore ${category.key}`}</Link>
                </div>

                <img src={category.imageUrl} alt={category.name} />
              </div>
            </CategoryArticle>
          )
        )}
    </>
  );
};

export default HomeComponent;
