import Header from "../Components/Header"
import AdditionalSection from "../Components/AdditionalSection"
import AdditionalImage from '../assets/chefSpecial3.png'
import MenuCategory from "../Components/MenuCategory"
import FoodCategoryThree from '../Components/FoodCategoryThree'
import FoodCategoryFour from "../Components/FoodCategoryFour"
import FoodCategoryFive from "../Components/FoodCategoryFive"

const Explore = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <AdditionalSection
        src={AdditionalImage}
        overlay
        content={
          <div className="flex flex-col gap-5 mt-60 ml-12">
            <h1 className="font-bold text-5xl">Chuks Kitchen</h1>
            <p className="font-medium text-2xl">Chuks Kitchen Nigerian Home cooking 4.8 (1.2k)</p>
          </div>
        }
      />

      <MenuCategory />

      <div id="Popular">
        <FoodCategoryThree
          sectionTitle="Popular" />
      </div>

      <div id="Jollof">
        <FoodCategoryFour
          sectionTitle="Jollof Rice & Entrees"
        />
      </div>

      <div id="Swallow">
        <FoodCategoryFive sectionTitle="Swallow & Soups"/>
      </div>

    </div>
  )
}

export default Explore
