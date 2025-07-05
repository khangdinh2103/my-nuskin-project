import SectionTitle from '../common/SectionTitle';
import StatsCard from './StatsCard';
import ContentBlock from './ContentBlock';

const NuSkinWaySection = () => {
  const statsData = [
    {
      number: "25+",
      label: "Years of Giving",
      description: ""
    },
    {
      number: "20+",
      label: "Current Social Projects",
      description: ""
    },
    {
      number: "850M+",
      label: "Meals Donated through",
      description: "Nourish the Children"
    }
  ];

  const contentBlocks = [
    {
      title: "Being a Force for Good",
      content: [
        "Some see it corporate social responsibility. We call it our purpose. Together we're engaged in initiatives worldwide—nourishing thousands of hungry children, funding pediatric heart and cleft lip surgeries, or striving for a more sustainable future. And sometimes, we're simply taking meaningful steps to improve our local communities. Whatever we do, we believe changing the world begins with a single action."
      ],
      imageSrc: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=300&fit=crop&crop=center",
      imageAlt: "Children eating together",
      isReversed: false,
      buttonText: "Explore our projects"
    },
    {
      title: "Nature + Science",
      content: [
        "Capturing the best in nature to bring you the best results is our personal mission. We combine powerful ingredients with innovative science and technology. The result? World-class products that deliver real benefits. And even though we've spent more than 30 years researching aging at the genetic level, Mother Nature continually inspires us to push the boundaries of inquiry and innovation. We bottle what's best and bring it right to your door."
      ],
      imageSrc: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&h=300&fit=crop&crop=center",
      imageAlt: "Science and nature products",
      isReversed: true,
      buttonText: "Discover more"
    }
  ];

  return (
    <div className="py-12 bg-gray-100">
    <SectionTitle 
        title="The Nu Skin Way" 
        
      />
      <div className=" mx-auto px-4">
        {/* Section Header with border */}
        <div className="bg-white border border-gray-300 rounded-lg p-8 mb-8">
          {/* Title and Stats in horizontal layout */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Left side - Title */}
            <div className="lg:w-1/3 mb-6 lg:mb-0 text-left ml-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Nu Skin,
              </h2>
              <h2 className="text-lg text-gray-600">
                Improving Lives Everyday
              </h2>
            </div>

            {/* Right side - Stats in horizontal layout */}
            <div className="lg:w-2/3 flex justify-around">
              {statsData.map((stat, index) => (
                <StatsCard
                  key={index}
                  number={stat.number}
                  label={stat.label}
                  description={stat.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-8">
          {contentBlocks.map((block, index) => (
            <ContentBlock
              key={index}
              title={block.title}
              content={block.content}
              imageSrc={block.imageSrc}
              imageAlt={block.imageAlt}
              isReversed={block.isReversed}
              buttonText={block.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NuSkinWaySection;
