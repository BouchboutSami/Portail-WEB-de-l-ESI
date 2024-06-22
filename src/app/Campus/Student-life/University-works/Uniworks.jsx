import ArticleCard from '@/components/ArticleCard'
import FAQItem from '@/components/FAQItem'
import React from 'react'
import Transport from './transport';
import Restoration from './restoration';
import DropdownDoc from '@/components/DropdownDoc';
const faqfinancialaid = [
    {
      question: "What are the conditions to benefit from the university financial aid?",
      answer:"Each student benefits from the university financial aid for the entire duration of their studies, starting from the year they obtained their baccalaureate. The financial aid is suspended in the event of a second failure and is not extended until the following year. The benefit of the financial aid is subject to the annual income of the parents.",
    },
    {
      question: "What is the percentage of the university scholarship?",
      answer: "2000 DA per month ",
    },
    {
      question: "What is the link to the university scholarships website? ",
      answer: "Link to website : www.mena.com ",
    },
  ];
const dossier = [
  {
    text : "Download the necessary files here", href : '#'
  }
]
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
        <div className='bg-[#F5F5F5] flex flex-col items-start w-full p-10'>
            <h2 className="font-bold text-3xl mb-10 self-center">Financial Aid</h2>
            <DropdownDoc text={"Financial aid file"} menuItems={dossier}/>
            <h3 className='font-bold text-xl mb-5 text-bleu'> Q&A</h3>
            {faqfinancialaid.map((faqfinancialaid, index) => (
            <FAQItem key={index} question={faqfinancialaid.question} answer={faqfinancialaid.answer} />
          ))}
        </div>
        <div className='w-full'>
        <Transport />
        <Restoration />
    </div>
    </div>
  )
}

export default Uniworks