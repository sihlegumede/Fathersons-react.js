import React, {useEffect} from 'react';
import './brand.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import{Title, Price} from '../../components';

import StretchClassicBlack from './images/image_212bc6f8-138c-4627-a570-1ad357035b46_600x-slim.webp';
import NavyJumper from './images/image_403cbb3f-9444-4179-8a0b-df26348de032_600x-slim.webp';
import StretchClassicOxford from './images/IMG_5950_x800-slim.webp';
import ClassicStripe from './images/image_aee33bfe-6c5f-4037-bba3-edaf940b842b_600x-slim.webp';
import ClassicPoloJumper from './images/image_eafb16ab-f9d8-4459-a57f-415d915e550b_600x-slim.webp';
import ClassicPoloShirt from './images/polo-shirt-image_d718df3b-91a1-45ea-9d65-dbd89dcd7a13_600x.webp';
import ClassicOxfordBlack from './images/Screenshot2023-05-18at3.37.14pm_800x-slim.webp';
import ClassicWhiteAbstract from './images/image_5cc533a3-bfd0-4de7-b964-bf4c6fd485f7_1200x1800.webp';
import StretchBlack from './images/image_c1b49784-648a-4a7d-8a2c-3a0e7cf08491_1200x1800.webp';
import StretchMixedLily from './images/image_5e107969-d330-41cd-9dbd-ac0827354802_1203x1800.webp';
import StretchTaupe from './images/image_6c9f8a3b-1d38-45d6-8743-82e3bfe22ae3_1209x1800.webp';

const Brand = () => {
  useEffect(() => {
    AOS.init({duration:2000})
  }, []);
  return (
    <div className='brand'>
      <h3>FEATURED COLLECTION</h3>
      <div className="shop_content">
        <div className="shop_content_product_box" data-aos="fade-down">
          <figure><img src={StretchClassicBlack} alt="" /></figure>
          <Title title={"SUPER SLIM LUXE ULTRA STRETCH CLASSIC BLACK - FS214"} />
          <Price price={<span>R1205.76</span>}/>
        </div>
        <div className="shop_content_product_box" data-aos="fade-down">
          <figure><img src={NavyJumper} alt="" /></figure>
          <Title title={"CLASSIC NAVY ROLL NECK MERINO WOOL KNITTED JUMPER WITH FS EMBROIDERY - FSN011"} />
          <Price price={<span>R1100.00</span>}/>
        </div>
        <div className="shop_content_product_box" data-aos="fade-down">
          <figure><img src={StretchClassicOxford} alt="" /></figure>
          <Title title={"SUPER SLIM STRETCH CLASSIC OXFORD GRANDAD COLLAR - FS732"} />
          <Price price={<span>R1036.92</span>}/>
        </div>
        <div className="shop_content_product_box" data-aos="fade-down">
          <figure><img src={ClassicStripe} alt="" /></figure>
          <Title title={"CLASSIC BROWN / WHITE HORIZONTAL STRIPE ZIPPED POLO SHORT SLEEVE - FSN040"} />
          <Price price={<span>R2049.97</span>}/>
        </div>
        <div className="shop_content_product_box" data-aos="fade-down">
          <figure><img src={ClassicPoloJumper} alt="" /></figure>
          <Title title={"CLASSIC BLACK MERINO WOOL KNITTED POLO JUMPER LONG SLEEVE WITH FS EMBROIDERY - FSN015"} />
          <Price price={<span>R1205.76</span>}/>
        </div>
        <div className="shop_content_product_box" data-aos="fade-down">
          <figure><img src={ClassicPoloShirt} alt="" /></figure>
          <Title title={"CLASSIC WHITE AND SILVER ZIPPED LONG SLEEVE POLO SHIRT -FSH39"} />
          <Price price={<span>R1012.80</span>}/>
        </div>
        <div className="shop_content_product_box" data-aos="fade-down">
          <figure><img src={ClassicOxfordBlack} alt="" /></figure>
          <Title title={"SUPER SLIM LUXE ULTRA STRETCH CLASSIC OXFORD BLACK SHORT SLEEVE - FS303"} />
          <Price price={<span>R964.56</span>}/>
        </div>
        <div className="shop_content_product_box" data-aos="fade-down">
          <figure><img src={ClassicWhiteAbstract} alt="" /></figure>
          <Title title={"SUPER SLIM STRETCH CLASSIC BLACK AND OFF WHITE ABSTRACT PRINT SHORT SLEEVE WITH BUTTON DOWN COLLAR - FS798"} />
          <Price price={<span>R1132.85</span>}/>
        </div>
        <div className="shop_content_product_box" data-aos="fade-down">
          <figure><img src={StretchBlack} alt="" /></figure>
          <Title title={"SUPER SLIM STRETCH BLACK BASE BLURRED FLOWER PRINT LONG SLEEVE WITH BUTTON DOWN COLLAR - FS800"} />
          <Price price={<span>R843.55</span>}/>
        </div>
        <div className="shop_content_product_box" data-aos="fade-down">
          <figure><img src={StretchMixedLily} alt="" /></figure>
          <Title title={"SUPER SLIM STRETCH BLACK MIXED LILY FLORAL PRINT SHORT SLEEVE WITH BUTTON DOWN COLLAR - FS855"} />
          <Price price={<span>R1084.64</span>}/>
        </div>
        <div className="shop_content_product_box" data-aos="fade-down">
          <figure><img src={StretchTaupe} alt="" /></figure>
          <Title title={"SUPER SLIM STRETCH BLACK/ CREAM/ TAUPE LINK PRING LONG SLEEVE WITH BUTTON DOWN COLLAR - FS848"} />
          <Price price={<span>R1253.64</span>}/>
        </div>
      </div>
    </div>
  )
}

export default Brand