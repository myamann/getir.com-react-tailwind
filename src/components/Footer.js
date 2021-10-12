import React from "react";
import Menu from 'components/ui/Menu';

const Footer = () => {

  const menus = [
    {
      title: "Getir'i Keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "İletişim",
        },
        {
          title: "COVID-19 Duyuru",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
        title: "Yardıma mı ihtiyacınız var?",
        items: [
          {
            title: "Hakkımızda",
          },
          {
            title: "Kariyer",
          },
          {
            title: "İletişim",
          },
          {
            title: "COVID-19 Duyuru",
          },
          {
            title: "Sosyal Sorumluluk Projeleri",
          },
        ],
      },
      {
        title: "İş Ortağımız Olun",
        items: [
          {
            title: "Hakkımızda",
          },
          {
            title: "Kariyer",
          },
          {
            title: "İletişim",
          },
          {
            title: "COVID-19 Duyuru",
          },
          {
            title: "Sosyal Sorumluluk Projeleri",
          },
        ],
      },
  ];

  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 pt-10">
          <section>
            <nav>
              <h6 className="text-lg text-primary-brand-color">
                Getir'i indirin!
              </h6>
              <a href="/">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt="mobile"
                />
              </a>

              <a href="/">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt="mobile"
                />
              </a>

              <a href="/">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt="mobile"
                />
              </a>
            </nav>
          </section>
          {menus.map((menu,index)=> <Menu key={index} {...menu}/>)}
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 mt-6 py-6">
            <div className="text-xs text-gray-700 flex gap-x-8">
                &copy; 2021 Getir
                <a href="/" className="text-primary-brand-color">Bilgi Toplumu Hizmetleri</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
