import React from 'react';

const Clubcard = (props) => {
    const info = props.table;

    return (
        <div className="grid grid-cols-3 gap-4 w-30">
            {info.map((item, index) => (
                <div key={index} className="bg-blanc m-10 font-poppins rounded-md shadow-md hover:shadow-xl hover:z-12 transition duration-300">
                    <div className="flex flex-col h-full">
                        <div className="p-5 flex-grow">
                            <div className="text-2xl">
                                <h1>{item.name}</h1>
                            </div>
                            <div className="text-gray-400"> 
                                <h3>{item.domaine}</h3>
                            </div>
                            <div className="h-40">
                                <img src={item.logo} className='object-cover w-full h-full' alt={`${item.name} Logo`} />
                            </div>
                            <div className="font-normal text-sm my-7"> 
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <div className="p-5">
                            <button className="border-noir px-5 py-1 rounded-md bg-transparent hover:bg-noir text-noir hover:text-blanc border hover:border-blanc transition-colors">
                                Découvrir Plus
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Clubcard;
