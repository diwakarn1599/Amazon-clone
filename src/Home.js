import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
        <div className="home_container">


            <img
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_8A_Dual/7499/V176845577_IN_WLME_Redmi_8A_Dual_LandingPage_1500x600._CB406191253_.jpg"
                alt=""
            />
            <div className="home_row">
                <Product
                title="Nike Grass Football : Color : Yellow | Size : 5
Suitable for: Hard Ground without Grass, Wet & Grassy Ground"
                price={1450.00}
                image="https://m.media-amazon.com/images/I/81-2ZIdZ58L._AC_UL320_.jpg"
                rating ={5}
                   />
                <Product
                title="PAUSE Black Solid Cotton Round Neck Regular Full Sleeve Men's Cardigan"
                price={990}
                image="https://images-na.ssl-images-amazon.com/images/I/71ZmeNYVQSL._UX569_.jpg"
                rating ={5}
                   />
                   <Product
                title="Oppo F15 (Unicorn White, 8GB RAM, 128GB Storage) with No Cost EMI / Additional Exchange Offers"
                price={16990}
                image="https://m.media-amazon.com/images/I/61imtbccqsL._AC_UY218_.jpg"
                rating ={3}
                   />
                
            </div>
            <div className="home_row">
            <Product
                title="Tommy Hilfiger Polyester 53 cms Navy + White Gym Shoulder Bag (TH/KENDALL0815)"
                price={2009}
                image="https://m.media-amazon.com/images/I/31439mnDGHL._AC_UL320_.jpg"
                rating ={4}
                   />
            <Product
                title="Lenovo Ideapad Slim (4GB/256GB/Windows 10/MS Office/Grey/1.6Kg), 81WD0044IN"
                price={39999}
                image="https://m.media-amazon.com/images/I/61s7sJEpsVL._AC_UY218_.jpg"
                rating ={5}
                   />
            <Product
                title="Apple Watch Series 5 (GPS, 40mm) - Silver Aluminium Case with White"
                price={40000}
                image="https://m.media-amazon.com/images/I/71ZDwUZWvOL._AC_UL320_.jpg"
                rating ={4}
                   />
            </div>
            <div className="home_row">
            <Product
                title="MINISO Skin Charm Makeup Brush 5PCS Kit for Liquid, Cream, Powder Formula, Silver"
                price={65}
                image="https://m.media-amazon.com/images/I/51mC4bseX9L._AC_UL320_.jpg"
                rating ={4}
                   />
            <Product
                title="Lakme Absolute Blur Perfect Makeup Primer, 30g"
                price={99}
                image="https://m.media-amazon.com/images/I/41Vz4l4PRUL._AC_UL320_.jpg"
                rating ={5}
                   />
            <Product
                title="Lakme Eyeconic Kajal Twin Pack, Black, 0.35g with 0.35g"
                price={109}
                image="https://m.media-amazon.com/images/I/51aqiqoKB+L._AC_UL320_.jpg"
                rating ={4}
                   />
            </div>
            <div className="home_row">
            <Product
                title="TRADY Ultimate CR7 Ronaldo Ankle Football Shoe Studs Shoes for Men"
                price={359}
                image="https://m.media-amazon.com/images/I/71hJZdErXoL._AC_UL320_.jpg"
                rating ={4}
                   />
            <Product
                title=" Nivia Premier Carbonite Football Studs (Orange)"
                price={99}
                image="https://m.media-amazon.com/images/I/51sgkuhpQKL._AC_UL320_.jpg"
                rating ={5}
                   />
            <Product
                title="Bacca Bucci Mens Trainers Athletic Walking Running Gyming Jogging Fitness"
                price={459}
                image="https://m.media-amazon.com/images/I/71Nhc6OVWKL._AC_UL320_.jpg"
                rating ={4}
                   />
            </div>
            <div className="home_row">
            <Product
                title="Blue Wish Soft Cotton Silk Saree With Zari Border And Blouse -Blue Wish"
                price={359}
                image="https://m.media-amazon.com/images/I/81xn6SXZMrL._AC_UL320_.jpg"
                rating ={4}
                   />
            <Product
                title="BHAKARWADi Women's Khadi silk Saree with Blouse Piece (321_Variation)"
                price={599}
                image="https://m.media-amazon.com/images/I/91ZZGCp6tuL._AC_UL320_.jpg"
                rating ={5}
                   />
            <Product
                title="ANNI DESIGNER Women's Georgette With Blouse Piece Saree"
                price={459}
                image="https://m.media-amazon.com/images/I/71gS9nADNeL._AC_UL320_.jpg"
                rating ={4}
                   />
            </div>
            <div className="home_row">
            <Product
                title="LG 80 cms (32 Inches) HD Ready LED Smart TV 32LM560BPTC with IPS Display & WebOS (2019 Model)"
                price={69900}
                image="https://images-na.ssl-images-amazon.com/images/I/81Yy5UF05tL._SL1500_.jpg"
                rating ={4}
                   />
            </div>


        </div>
        </div>
    )
}

export default Home;
