export default function handler(req, res) {
    const products = [
      {
        id: 1,
        name: "Minimal Letter",
        price: 7.20,
        image: "/images/vintageletter.png",  
      },
  
      {
        id: 2,
        name: "Vintage Letter",
        price: 9.00,
        image: "/images/whitecard.png", 
      },
  
      {
        id: 3,
        name: "Aesthetic Calender",
        price: 1.80 ,
        image: "/images/calender2.png",  
      },
  
      {
        id: 4,
        name: "Aesthetic Card",
        price: 10.80 ,
        image: "/images/littlethingcard.png", 
      },
  
      {
        id: 5,
        name: "Scrapbook",
        price: 27.00,
        image: "/images/scrapbook.png", 
      },
  
      {
        id: 6,
        name: "Mini Booklet",
        price: 9.00,
        image: "/images/puncard1.png",  
      },
    ];
  
    res.status(200).json(products);
  }
  