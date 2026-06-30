import AdditionalSection from "../Components/AdditionalSection"
import AdditionalImage from '../assets/jollof-2.png'
import mobileExploreImg from '../assets/hero-image.png'
import MenuCategory from "../Components/MenuCategory"
import FoodCategory from "../Components/FoodCategory"



const Explore = () => {
  return (
    <div className="bg-gray-100">
      <AdditionalSection
        src={AdditionalImage}
        mobileSrc={mobileExploreImg}
        overlay
        content={
          <div className="flex flex-col gap-5 mt-60 ml-5 lg:ml-12">
            <h1 className="font-bold text-[32px] md:text-5xl">Chuks Kitchen</h1>
            <p className="font-medium text-[16px] md:text-2xl">Chuks Kitchen Nigerian Home cooking 4.8 (1.2k)</p>
          </div>
        }
      />

      <MenuCategory />

      <div id="Popular">
        <FoodCategory sectionTitle="Popular" category="GRILLS & BBQ"/>
      </div>

      <div id="Jollof">
        <FoodCategory sectionTitle="Jollof Rice & Entrees" category="JOLLOF DELIGHTS" />
      </div>

      <div id="Swallow">
        <FoodCategory sectionTitle="Swallow & Soups" category="SWALLOW & SOUPS" />
      </div>

    </div>
  )
}

export default Explore
