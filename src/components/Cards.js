import React, { useState, useEffect } from "react";
import cardsData from "api/cards";

const Cards = () => {
  // const cards = [
  // 	{
  // 		title: 'Her siparişinize bir kampanya',
  // 		description: 'Getir\'de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.',
  // 		image: 'https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg'
  // 	},
  // 	{
  // 		title: 'Dakikalar içinde kapınızda',
  // 		description: 'Getir’le siparişiniz dakikalar içinde kapınıza gelir.',
  // 		image: 'https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg'
  // 	},
  // 	{
  // 		title: 'Binlerce çeşit mutluluk',
  // 		description: 'Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.',
  // 		image: 'https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg'
  // 	}
  // ]

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (<div className="grid  md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 gap-4 ">
      {cards.length && cards.map(card => (
          <div className="bg-white p-14 rounded-lg shadow-sm flex flex-col items-center  text-center">
              <img className="w-[150px] h-[150px] mb-6" src={card.image} alt="resim"/>
              <h6 className="font-semibold text-lg text-primary-brand-color">{card.title}</h6>
              <p className="mt-2 text-sm text-gray-700">{card.description}</p>
          </div>
      ))}
  </div>);
};

export default Cards;
