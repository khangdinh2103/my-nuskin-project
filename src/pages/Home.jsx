import CategorySidebar from '../components/topSection/CategorySidebar'
import TopMenu from '../components/topSection/TopMenu'
import HeroSlider from '../components/topSection/HeroSlider'
import PromoBanners from '../components/topSection/PromoBanners'
import SectionTitle from '../components/common/SectionTitle'
import { ProductSection, ProductBanner } from '../components/products'
import { AwardsSection } from '../components/awards'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 flex-shrink-0 ml-4">
          <CategorySidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 px-4">
          {/* Top Menu */}
          <TopMenu />
          {/* Hero Slider */}
          <HeroSlider />
          {/* Promo Banners */}
          <PromoBanners />
        </div>
      </div>
      
      {/* Products Section */}
      <div className="px-4 pt-8 pb-8 mt-8">
        {/* Most Popular Products Section */}
        <SectionTitle title="Most Popular Products" />
        <ProductSection />
        
        {/* Product Banner */}
        <div className="mt-8">
          <ProductBanner />
        </div>
        
        {/* Awards Section */}
        <div className="pt-8 mt-8">
          <AwardsSection />
        </div>
      </div>
    </div>
  )
}

export default Home
