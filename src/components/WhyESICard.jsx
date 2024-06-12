const WhyESICard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-4 transform transition-transform duration-300 hover:scale-105 hover:z-10">
      <Icon className="w-12 h-12 text-[#185B9C] mb-4" />
      <h3 className="text-lg font-semibold text-[#185B9C] mb-2">{title}</h3>
      <p className="text-gray-700 text-xs">{description}</p>
    </div>
  );
};

export default WhyESICard;

