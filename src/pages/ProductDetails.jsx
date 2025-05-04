import "react-inner-image-zoom/lib/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";

function ProductDetails() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [product, setProduct] = useState();
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const { id } = useParams();

  function goto(index) {
    setSlideIndex(index);
    zoomSliderBig.current.swiper.slideTo(index);
    zoomSliderSml.current.swiper.slideTo(index);
  }

  useEffect(() => {
    fetchDataFromApi(`/api/product/getProduct/${id}`).then((res) => {
      if (res.error === false) {
        setProduct(res.product);
      }
    });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center px-2 py-0 mt-3">
        <h2 className="text-[18px] font-[600]">Product Details</h2>
      </div>
      <br />
      <div className="productDetails flex gap-20">
        <div className="w-[40%]">
          {product?.images?.length !== 0 && (
            <div className="flex gap-3">
              <div className="slider w-[15%]">
                <Swiper
                  ref={zoomSliderSml}
                  direction={"vertical"}
                  slidesPerView={5}
                  spaceBetween={0}
                  navigation={true}
                  modules={[Navigation]}
                  className="zoomProductSliderThumbs h-[500px] overflow-hidden"
                >
                  {product?.images?.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div
                          className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === index ? "opacity-1" : "opacity-30"}`}
                          onClick={() => goto(index)}
                        >
                          <img
                            src={item}
                            alt="product image"
                            className="w-full transition-all group-hover:scale-105"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="zoomContainer w-[85%] h-[500px] overflow-hidden rounded-md">
                <Swiper
                  ref={zoomSliderBig}
                  slidesPerView={1}
                  spaceBetween={0}
                  navigation={false}
                >
                  {product?.images?.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <InnerImageZoom
                          zoomType="hover"
                          zoomScale={1}
                          src={item}
                        ></InnerImageZoom>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          )}
        </div>
        <div className="w-[60%]">
          <h1 className="text-[25px] font-[500] gap-8 mb-4">{product?.name}</h1>
          <div className="flex items-center py-2 gap-5">
            <span className="w-[15%] font-[500] flex items-center gap-2">
              <MdBrandingWatermark className="opacity-65" />
              Brand:
            </span>
            <span>{product?.brand}</span>
          </div>
          <div className="flex items-center py-2 gap-5">
            <span className="w-[15%] font-[500] flex items-center gap-2">
              <BiSolidCategoryAlt className="opacity-65" />
              Category:
            </span>
            <span>{product?.categoryName}</span>
          </div>
          {product?.productRam?.length !== 0 && (
            <div className="flex items-center py-2 gap-5">
              <span className="w-[15%] font-[500] flex items-center gap-2">
                <MdBrandingWatermark className="opacity-65" />
                Ram:
              </span>
              <div className="flex items-center gap-2">
                {product?.productRam?.map((ram, index) => {
                  return (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 shadow-md bg-[#fff]"
                    >
                      {ram}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {product?.size?.length !== 0 && (
            <div className="flex items-center py-2 gap-5">
              <span className="w-[15%] font-[500] flex items-center gap-2">
                <MdBrandingWatermark className="opacity-65" />
                Size:
              </span>
              <div className="flex items-center gap-2">
                {product?.size?.map((size, index) => {
                  return (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 shadow-md bg-[#fff]"
                    >
                      {size}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
