import CategorySidebar from '../components/topSection/CategorySidebar'
import TopMenu from '../components/topSection/TopMenu'
import HeroSlider from '../components/topSection/HeroSlider'
import PromoBanners from '../components/topSection/PromoBanners'
import SectionTitle from '../components/common/SectionTitle'
import { ProductSection, ProductBanner } from '../components/products'
import { AwardsSection } from '../components/awards'
import { NuSkinWaySection } from '../components/nuSkinWay'
import { NewsSection } from '../components/news'


const Home = () => {
  return (
    <div className="min-h-screen bg-white-100">
      <div className="flex">
        {/* Sidebar - Hidden on mobile, visible on large screens */}
        <div className="hidden lg:block w-80 flex-shrink-0 ml-2 lg:ml-4">
          <CategorySidebar />
        </div>
        
        {/* Mobile Sidebar - Rendered separately for mobile overlay */}
        <div className="lg:hidden">
          <CategorySidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 px-2 sm:px-4 lg:px-4">
          {/* Top Menu */}
          <TopMenu />
          {/* Hero Slider */}
          <HeroSlider />
          {/* Promo Banners */}
          <PromoBanners />
        </div>
      </div>
      
      {/* Products Section */}
      <div className="px-2 sm:px-4 lg:px-4 pt-6 lg:pt-8 pb-6 lg:pb-8 mt-6 lg:mt-8">
        {/* Most Popular Products Section */}
        <SectionTitle title="Most Popular Products" />
        <ProductSection />
        
        {/* Product Banner */}
        <div className="mt-6 lg:mt-8">
          <ProductBanner />
        </div>
        
        {/* Awards Section */}
        <div className="pt-6 lg:pt-8 mt-6 lg:mt-8">
          <AwardsSection />
        </div>
        
        {/* Nu Skin Way Section */}
        <div className="mt-6 lg:mt-8">
          <NuSkinWaySection />
        </div>

        {/* News Section */}
        <div className="mt-6 lg:mt-8 pt-6 lg:pt-8">
          <NewsSection />
        </div>

       
      </div>
    </div>
  )
}

export default Home
