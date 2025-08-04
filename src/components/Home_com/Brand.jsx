
import brand_1 from "../../assets/img_home/brand_1.png"
import brand_2 from "../../assets/img_home/brand_2.png"
import brand_3 from "../../assets/img_home/brand_3.png"
import brand_4 from "../../assets/img_home/brand_4.png"
import brand_5 from "../../assets/img_home/brand_5.png"
import brand_6 from "../../assets/img_home/brand_6.png"
import brand_7 from "../../assets/img_home/brand_7.png"
import brand_8 from "../../assets/img_home/brand_8.png"

 

function Brand() {
  const Brands = [ brand_1 , brand_2 , brand_3 , brand_4 , brand_5 , brand_6 , brand_7 , brand_8]

  return (
    <div className="container ">
      <div className="grid grid-cols-2 gap-10 m-auto lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
        {Brands.map((brand, index) => (
          <div key={index} className="">
            <img src={brand} alt="brand" className="w-[60%] ml-10"  />
          </div>
        ))}
      </div>
     </div>
  )
}

export default Brand
