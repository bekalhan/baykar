import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import css from './Positions.module.css';
import  './Positions.css';

//icons
import {BsCurrencyExchange} from 'react-icons/bs';
import {GiChemicalArrow} from 'react-icons/gi';
import {AiOutlineBgColors} from 'react-icons/ai';
import {RiFileList2Line} from 'react-icons/ri';
import {MdOutlineComputer} from 'react-icons/md';

const Positions = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={css.internship}>
      <div className={css.header}>
        <span>Baykar'da Açık Pozisyonlar</span>
        <span>AÇIK POZİSYONLAR</span>
      </div>
      <Slider {...settings} className='mySlide4'>
        <div className="posItem">
            <div className="itemIcon">
                <BsCurrencyExchange />
            </div>
            <div className="itemTitle">
                <span>Yatırım Analisti</span>
            </div>
            <div className="itemDesc">
                <p>
                </p>
            </div>
            <div className="itemButton">
                <button className="item-btn">DETAY</button>
            </div>
        </div>   
        <div className="posItem">
            <div className="itemIcon">
                <GiChemicalArrow />
            </div>
            <div className="itemTitle">
                <span>Yapısal Bakım Onarım Teknisyeni</span>
            </div>
            <div className="itemDesc">
                <p>
                Planlanan bakım onarım faaliyetlerinin belirlenen prosedürlere göre gerçekleştirebilmesi.      
                </p>
            </div>
            <div className="itemButton">
                <button className="item-btn">DETAY</button>
            </div>
        </div>  
        <div className="posItem">
            <div className="itemIcon">
                <BsCurrencyExchange />
            </div>
            <div className="itemTitle">
                <span>Serim Teknisyeni</span>
            </div>
            <div className="itemDesc">
                <p>
                Parça imalat prosesinde görev alması, serim işlemlerinin laminasyon prosedürüne gerçekleştirilmesi.      
                </p>
            </div>
            <div className="itemButton">
                <button className="item-btn">DETAY</button>
            </div>
        </div>  
        <div className="posItem">
            <div className="itemIcon">
                <RiFileList2Line />
            </div>
            <div className="itemTitle">
                <span>Kalite Kontrol Teknisyeni</span>
            </div>
            <div className="itemDesc">
                <p>
                Kalite plan ve prosedürleri geliştirmesi şirket ve müşteri uyum standartlarının karşılanıp karşılanmadığının test edilmesi.      
                </p>
            </div>
            <div className="itemButton">
                <button className="item-btn">DETAY</button>
            </div>
        </div>  
        <div className="posItem">
            <div className="itemIcon">
                <MdOutlineComputer />
            </div>
            <div className="itemTitle">
                <span>Nesne Tabanlı Yazılım Mühendisi</span>
            </div>
            <div className="itemDesc">
                <p>
                İnsansız Hava Aracı teknolojileri için kullanım kabiliyeti yüksek ve kullanıcı dostu arayüz (UI) tasarımı      
                </p>
            </div>
            <div className="itemButton">
                <button className="item-btn">DETAY</button>
            </div>
        </div>  
        <div className="posItem">
            <div className="itemIcon">
                <AiOutlineBgColors />
            </div>
            <div className="itemTitle">
                <span>Boya Teknisyeni</span>
            </div>
            <div className="itemDesc">
                <p>
                Üretimi yapılan kompozit parçaların yüzey hazırlığının yapılması.      
                </p>
            </div>
            <div className="itemButton">
                <button className="item-btn">DETAY</button>
            </div>
        </div>  
        <div className="posItem">
            <div className="itemIcon">
                <BsCurrencyExchange />
            </div>
            <div className="itemTitle">
                <span>Yatırım Analisti</span>
            </div>
            <div className="itemDesc">
                <p>
             İnsansız Hava Aracı teknolojileri için kullanım kabiliyeti yüksek ve kullanıcı dostu arayüz (UI) tasarımı      
                </p>
            </div>
            <div className="itemButton">
                <button className="item-btn">DETAY</button>
            </div>
        </div>  
        <div className="posItem">
            <div className="itemIcon">
                <BsCurrencyExchange />
            </div>
            <div className="itemTitle">
                <span>Yatırım Analisti</span>
            </div>
            <div className="itemDesc">
                <p>
             İnsansız Hava Aracı teknolojileri için kullanım kabiliyeti yüksek ve kullanıcı dostu arayüz (UI) tasarımı      
                </p>
            </div>
            <div className="itemButton">
                <button className="item-btn">DETAY</button>
            </div>
        </div>      
      </Slider>
      <div className={css.bigButton}>
        <button>TÜM AÇIK POZİSYONLAR</button>
      </div>
    </div>
  )
}

export default Positions;