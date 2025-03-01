import React from 'react';
import { useParams } from 'react-router-dom';
import catering from '../../../assets/page 4/1.png';
import birthday from '../../../assets/page 4/2.png';
import weddings from '../../../assets/page 4/3.png';
import events from '../../../assets/page 4/4.png';

const servicesCards = [
    { id: 1, name: "Caterings", description: "In the new era of technology we look in the future with certainty for life.", img: catering },
    { id: 2, name: "Birthdays", description: "In the new era of technology we look in the future with certainty for life.", img: birthday },
    { id: 3, name: "Weddings", description: "In the new era of technology we look in the future with certainty for life.", img: weddings },
    { id: 4, name: "Events", description: "In the new era of technology we look in the future with certainty for life.", img: events },
];

const UniqueServices = () => {
    const { id } = useParams();
    const card = servicesCards.find((item) => item.id === parseInt(id));

    if (!card) {
        return <h1 className="text-center text-2xl font-bold text-red-500">Cards Not Found</h1>;
    }

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold text-center mb-6">{card.name}</h1>
            <img src={card.img} alt={card.name} className="w-full max-w-md mx-auto rounded-lg mb-4" />
            <p className="text-lg text-center text-gray-700">{card.description}</p>
        </div>
    );
};

export default UniqueServices;