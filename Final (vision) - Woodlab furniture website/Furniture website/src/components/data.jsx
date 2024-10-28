import image1 from "../assets/images/homePage-sec5-img1.png";
import image2 from "../assets/images/homePage-sec5-img2.png";
import image3 from "../assets/images/homePage-sec5-img3.png";
import image4 from "../assets/images/homePage-sec5-img4.png";
import image5 from "../assets/images/homePage-sec5-img5.png";
import image6 from "../assets/images/homePage-sec7-img1.jpg";
import image7 from "../assets/images/homePage-sec7-img5.jpg";
import image8 from "../assets/images/homePage-sec7-img2.jpg";
import image9 from "../assets/images/homePage-sec7-img6.jpg";
import image10 from "../assets/images/aboutPage-sec4-img1.webp";
import image11 from "../assets/images/aboutPage-sec4-img2.webp";
import image12 from "../assets/images/homePage-img-card2.jpg";
import image13 from "../assets/images/homePage-img-card3.jpg";
import image14 from "../assets/images/homePage-img-card5.jpg";
import image15 from "../assets/images/homePage-img-card8.jpg";
import image16 from "../assets/images/homePage-img-card6.jpg";
import sofa1 from "../assets/images/products-sofa-img1.webp";
import sofa2 from "../assets/images/products-sofa-img2.webp";
import sofa3 from "../assets/images/products-sofa-img3.webp";
import sofa4 from "../assets/images/products-sofa-img4.webp";
import lamp1 from "../assets/images/products-lamp-img1.jpg";
import lamp2 from "../assets/images/products-lamp-img2.jpg";
import lamp3 from "../assets/images/products-lamp-img3.jpg";
import lamp4 from "../assets/images/products-lamp-img4.jpg";
import chair1 from "../assets/images/products-chair-img1.jpg";
import chair2 from "../assets/images/products-chair-img2.jpg";
import chair3 from "../assets/images/products-chair-img4.jpg";
import chair4 from "../assets/images/products-chair-img5.jpg";
import table1 from "../assets/images/products-table-img1.webp";
import table2 from "../assets/images/products-table-img2.jpg";
import table3 from "../assets/images/products-table-img3.jpg";
import table4 from "../assets/images/products-table-img4.jpg";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const logos = [
    {
        id: 1,
        image: image1
    },
    {
        id: 2,
        image: image2
    },
    {
        id: 3,
        image: image3
    },
    {
        id: 4,
        image: image4
    },
    {
        id: 5,
        image: image5
    }
]

export const cards = [
    {
        id: 1,
        image: image6
    },
    {
        id: 2,
        image: image7
    },
    {
        id: 3,
        image: image8
    },
    {
        id: 4,
        image: image9
    }
]

export const imageCards = [
    {
        id: 1,
        image: image10,
        title: "Board Santa Rosa Dining Table",
        text: "Care should be taken when placing hot items directly on the table. Use a trivet or surface pad when serving heated dishes.",
        button: "Shop Now"
    },
    {
        id: 2,
        image: image11,
        title: "Harris Fitted Slipcover Chair",
        text: "Machine washable slipcovers include: Chunky Boucle, Yarn-Dyed Linen Weave, Chenille Tweed,Deco Weave, Distressed Velvet and Performance Velvet.",
        button: "Shop Now"
    }
]


export const blogCards = [
    {
        id: 1,
        image: image12,
        title: "Furniture Styles Profile: Art Deco",
        span: "March 20, 2024",
        text: " Our goal has always been to motivate, encourage and release our fellow creatives to do their thing  Sed a libero.Mauris...",
        button: "Read More"
    },
    {
        id: 2,
        image: image13,
        title: "Interior Design Trends for 2024",
        span: "May 9, 2024",
        text: " Our goal has always been to motivate, encourage and release our fellow creatives to do their thing  Sed a libero.Mauris...",
        button: "Read More"
    },
    {
        id: 3,
        image: image14,
        title: "How to Pick the Perfect Upholstery",
        span: "March 20, 2024",
        text: " Our goal has always been to motivate, encourage and release our fellow creatives to do their thing  Sed a libero.Mauris...",
        button: "Read More"
    },
    {
        id: 4,
        image: image15,
        title: "Post format video blogs",
        span: "March 20, 2024",
        text: "Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas ac viverra...",
        button: "Read More"
    },
    {
        id: 5,
        image: image6,
        title: "Post format audio blogs",
        span: "May 9, 2024",
        text: "Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas ac viverra...",
        button: "Read More"
    },
    {
        id: 6,
        image: image8,
        title: "Post format gallery blogs",
        span: "March 20, 2024",
        text: "Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas ac viverra...",
        button: "Read More"
    },
    {
        id: 7,
        image: image7,
        title: "Furniture Styles Profile: Art Deco",
        span: "May 9, 2024",
        text: " Our goal has always been to motivate, encourage and release our fellow creatives to do their thing  Sed a libero.Mauris...",
        button: "Read More"
    },
    {
        id: 8,
        image: image9,
        title: "Interior Design Trends for 2024",
        span: "May 9, 2024",
        text: " Our goal has always been to motivate, encourage and release our fellow creatives to do their thing  Sed a libero.Mauris...",
        button: "Read More"
    },
    {
        id: 9,
        image: image16,
        title: "How to Pick the Perfect Upholstery",
        span: "March 20, 2024",
        text: " Our goal has always been to motivate, encourage and release our fellow creatives to do their thing  Sed a libero.Mauris...",
        button: "Read More"
    }
]

export const productCards = [
    {
        id: 1,
        image: sofa1,
        title: "Sofa",
        price: 800,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaStar />,
        star5: <FaStar />

    },
    {
        id: 2,
        image: lamp1,
        title: "Lamp",
        price: 100,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaStar />,
        star5: <FaStarHalfAlt />
    },
    {
        id: 3,
        image: chair1,
        title: "Chair",
        price: 150,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaStar />,
        star5: <FaRegStar />
    },
    {
        id: 4,
        image: table1,
        title: "Table",
        price: 300,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaStarHalfAlt />,
        star5: <FaRegStar />
    },

    {
        id: 5,
        image: lamp2,
        title: "Lamp",
        price: 200,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaStar />,
        star5: <FaRegStar />
    },
    {
        id: 6,
        image: chair2,
        title: "Chair",
        price: 350,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaStarHalfAlt />,
        star5: <FaRegStar />
    },
    {
        id: 7,
        image: sofa2,
        title: "Sofa",
        price: 750,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaStar />,
        star5: <FaStarHalfAlt />
    },
    {
        id: 8,
        image: table2,
        title: "Table",
        price: 400,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaRegStar />,
        star5: <FaRegStar />
    },
    {
        id: 9,
        image: chair3,
        title: "Chair",
        price: 450,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaStar />,
        star5: <FaRegStar />
    },
    {
        id: 10,
        image: lamp3,
        title: "Lamp",
        price: 300,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaStar />,
        star5: <FaStar />
    },
    {
        id: 11,
        image: table3,
        title: "Table",
        price: 500,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaStarHalfAlt />,
        star5: <FaRegStar />
    },
    {
        id: 12,
        image: sofa3,
        title: "Sofa",
        price: 900,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaStar />,
        star5: <FaStar />
    },
    {
        id: 13,
        image: table4,
        title: "Table",
        price: 400,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaStar />,
        star5: <FaRegStar />
    },
    {
        id: 14,
        image: lamp4,
        title: "Lamp",
        price: 350,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaRegStar />,
        star5: <FaRegStar />
    },
    {
        id: 15,
        image: sofa4,
        title: "Sofa",
        price: 950,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaStar />,
        star5: <FaStarHalfAlt />
    },
    {
        id: 16,
        image: chair4,
        title: "Chair",
        price: 550,
        quantity: 1,
        star1: <FaStar />,
        star2: <FaStar />,
        star3: <FaStar />,
        star4: <FaRegStar />,
        star5: <FaRegStar />
    }
]

