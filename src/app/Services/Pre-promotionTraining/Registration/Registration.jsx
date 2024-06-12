import DropdownDoc from '@/components/DropdownDoc';
import HeadingUnderlined from '@/components/HeadingUnderlined';
import TelechargerDoc from '@/components/TelechargerDoc';
import React from 'react'

const Registration = () => {

    const menuItems1=[
        {text : "Convention version PDF", href :'#'},
        {text : "Comment remplir la convention", href :'#'},
        {text : "Règlement intérieur", href :'#'}
     ]
    return(
        <div className="flex flex-col items-left py-10 overflow-hidden z-0">
            <div><HeadingUnderlined text='Inscription'/></div>
            <div><HeadingUnderlined text='Dossier à fournir'/></div>
        <TelechargerDoc text="Copie de l’arrêté de la décision d’ouverture de la formation avant promotion"/>
        <TelechargerDoc text="Copie de l’accord des services de la fonction publiques"/>
        <TelechargerDoc text="Copie du procès-verbal de la commission paritaire de la promotion"/>
        <TelechargerDoc text="Copie du tableau N°04 du plan de gestion des ressources humaines"/>
        <div><HeadingUnderlined text='Téléchargements'/></div>
        <DropdownDoc menuItems={menuItems1} text="Documents à télecharger"/>      
    </div>
        )
}

export default Registration;