import ArticleCard from '@/components/ArticleCard'
import React from 'react'

const Entrepreneurship = () => {
  return (
    <div className='w-full flex flex-col items-center py-10'>
    <div className='flex flex-col gap-2 py-5'>
         <ArticleCard 
        imageUrl="/assets/perf1.png"
        title="Second Place in the biggest hackathon in the MENA region"
        description="Two students from the school, Yousra FARHANI and Abla HAGANI, won second place in the largest artificial intelligence hackathon in the MENA region during their participation in the Hack AI event held in August in Tunisia."
        link="/"
        linkText="More details"/> 
         <ArticleCard 
        imageUrl={"/assets/perf2.png"}
        title={"Summer Break Challenge : deux clubs de l’ESI remportent le premier et le troisième trophés"}
        description={" "}
        link={"/"}
        linkText={"More details"}/>
    </div>
    <div className="bg-[#F5F5F5] flex flex-col items-start w-full p-10">
        <h2 className="font-bold text-3xl mb-10 self-center">Finantial Aid</h2>
        <h3 className="font-bold text-bleu text-xl mb-4">Presentation</h3>
        <p className="mb-6">
        The ESI, a member of the consortium of engineering schools, played a key role in the creation of an FIE in Algeria in September 2011, by committing itself through the charter of commitment and collaboration. This S10 educational program is based on "living" projects, offering practical and meaningful experience to students. In addition, ESI carried out training actions within the framework of the FSP from 2009 to 2013, in collaboration with external coaches such as CACI, Incubateur Sidi Abdellah, CISCO, ALCODEFI, among others. One of the notable successes of this program is the creation of a startup following the FIE ESI 2012, thus illustrating the positive and lasting impact of these initiatives. The manager of this startup is Benahcène Hamza, based in Bordj El Kiffan, demonstrating ESI's continued commitment to supporting and developing innovative businesses in Algeria.
        </p>
    </div>
    </div>
  )
}

export default Entrepreneurship