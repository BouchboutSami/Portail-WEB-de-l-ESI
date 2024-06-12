import Link from 'next/link';

const TrainingStep = ({ title, link }) => {
  return (
    <div className="bg-[#F5F5F5] text-[#185B9C] w-[430px] rounded-full text-center p-4 my-2 transition-colors duration-300 hover:bg-[#185B9C] hover:text-white">
        <a href={link}>{title}</a>
    </div>
  );
};

export default TrainingStep;
