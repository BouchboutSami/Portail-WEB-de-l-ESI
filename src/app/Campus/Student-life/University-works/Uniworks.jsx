import ArticleCard from '@/components/ArticleCard'
import React from 'react'

const Uniworks = () => {
  return (
    <div className='w-full flex flex-col items-center py-10'>
        <div className='flex flex-col gap-2 py-5'>
            <ArticleCard 
                imageUrl="/assets/setram.png"
                title="SETRAM offers students season tickets for just 150 DA"
                description="This offer is valid for all students aged 18 to 25 enrolled in a higher education establishment in Algeria. To take advantage of this offer, students simply need to present their valid student card to the supervisor corresponding to their course."
                link=""
                linkText=""/> 
            <ArticleCard 
                imageUrl={"/assets/flexydigital.png"}
                title={"Flexy: Digitizing the payment of university meals"}
                description={"Désormais, les étudiants pourront payer leurs repas à l'aide de leurs cartes d'étudiant. La carte d'étudiant sera dotée d'une puce électronique qui permettra aux étudiants de s'identifier et de payer leur repas en toute simplicité."}
                link={""}
                linkText={""}/>
        </div>
        <div className='bg-[#F5F5F5] flex flex-col items-center w-full p-10'>
            <h2 className="font-bold text-3xl mb-10">Financial Aid</h2>
        </div>
        <div className=' flex flex-col items-center w-full p-10'>
            <h2 className="font-bold text-3xl mb-10">Transport</h2>
        </div>
        <div className='bg-[#F5F5F5] flex flex-col items-center w-full p-10'>
            <h2 className="font-bold text-3xl mb-10">Restoration</h2>
        </div>
    </div>
  )
}

export default Uniworks