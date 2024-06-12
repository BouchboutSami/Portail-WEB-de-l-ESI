import ArticleCard from '@/components/ArticleCard'
import React from 'react'

const Performance = () => {
  return (
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
        linkText={"Full Article"}/>
        <ArticleCard 
        imageUrl={"/assets/perf3.png"}
        title={"My experience at ESI, interview with Racim Zennadi"}
        description={"Discover racim's story at esi, how covid changed his pace, from failure to success, important advice for every student and an inspiring story."}
        link={"/"}
        linkText={"Full interview"}/> 
    </div>
  )
}

export default Performance