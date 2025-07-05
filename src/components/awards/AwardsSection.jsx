import AwardSlider from './AwardSlider';
import SectionTitle from '../common/SectionTitle';

const AwardsSection = () => {
  const awards = [
    {
      title: "ageLOC® LumiSpa® iO",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop&crop=center",
      details: [
        "2023 Best",
        "Cleansing Device",
        "Award Winner",
        "NewBeauty Awards"
      ]
    },
    {
      title: "Epoch Baobab Body Butter",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=100&h=100&fit=crop&crop=center",
      details: [
        "2023",
        "Body Butter Silver",
        "Winner",
        "2023 Beauty Bible Awards"
      ]
    },
    {
      title: "Nu Skin Enterprises",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop&crop=center",
      details: [
        "2022 Best Use",
        "Beauty Brand",
        "Global Makeup",
        "Awards"
      ]
    },
    {
      title: "Epoch® Yin & Yang Mask",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop&crop=center",
      details: [
        "2022 Most",
        "Sustainable",
        "Packaging: Silver",
        "Winner",
        "Global Green",
        "Beauty Awards"
      ]
    },
    {
      title: "ageLOC® Facial Spa",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop&crop=center",
      details: [
        "2021 Readers'",
        "Choice Beauty",
        "Award Winner",
        "InStyle"
      ]
    },
    {
      title: "Nutricentials® Eye Love Bright Eyes",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=100&h=100&fit=crop&crop=center",
      details: [
        "2022 Pure Beauty",
        "Award Finalist",
        "Pure Beauty Global",
        "Awards"
      ]
    },
    {
      title: "ageLOC® Body Shaping Gel",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop&crop=center",
      details: [
        "2023 Best",
        "Body Treatment",
        "Winner",
        "Harper's Bazaar Awards"
      ]
    },
    {
      title: "Epoch® Sole Solution",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=100&h=100&fit=crop&crop=center",
      details: [
        "2023 Best",
        "Foot Care Product",
        "Gold Winner",
        "Beauty Independent Awards"
      ]
    },
    {
      title: "ageLOC® Me",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=100&h=100&fit=crop&crop=center",
      details: [
        "2022 Innovation",
        "Award Winner",
        "Beauty Tech Breakthrough",
        "Awards"
      ]
    },
    {
      title: "Pharmanex® LifePak",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=100&h=100&fit=crop&crop=center",
      details: [
        "2023 Best",
        "Nutritional Supplement",
        "Platinum Winner",
        "Wellness Awards"
      ]
    }
  ];

  return (
    <div className=" py-8">
      {/* Title using SectionTitle */}
      <SectionTitle 
        title="Award And Recognition" 
        
      />

      {/* World's #1 Company Banner */}
      <div className="bg-gray-200 rounded-lg p-6 mb-8 mx-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://www.nucosmetic.de/cdn/shop/files/wellspa-nuskin.jpg?v=1694513899&width=713"
              alt="Beauty Devices"
              className="w-50 h-30 object-contain"
            />
          </div>
          <div className="text-right">
            <p className="text-xl text-gray-600 mb-1">WORLD'S #1 COMPANY FOR</p>
            <h3 className="text-2xl font-bold text-gray-900">Beauty & Wellness Device Systems</h3>
            <p className="text-base text-gray-500 mt-1">Source: Euromonitor</p>
            </div>

        </div>
      </div>

      {/* Awards Slider */}
      <div className="px-4">
        <AwardSlider awards={awards} />
      </div>
    </div>
  );
};

export default AwardsSection;
