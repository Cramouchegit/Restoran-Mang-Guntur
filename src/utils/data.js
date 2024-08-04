const foodMenu = [
  {
    name: "Nasi Goreng",
    description: "Nasi goreng dengan bumbu kacang rempah khas indonesia",
    price: 19000,
    image:
      "https://images.unsplash.com/photo-1680674774705-90b4904b3a7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmFzaSUyMGdvcmVuZ3xlbnwwfHwwfHx8MA%3D%3D",
    stock: Math.random() >= 0.5 ? true : false,
  },
  {
    name: "Nasi Kuning",
    description: "Nasi Kuning Lezat Buatan Mak Cihuy khas indonesia",
    price: 13000,
    image:
      "https://media.istockphoto.com/id/2088502589/id/foto/nasi-kuning-or-yellow-rice.jpg?s=612x612&w=is&k=20&c=JQjjeGorIQnYu3Tjb-B47t3iCv-UZZ4OqLYFLDeqfc0=",
    stock: Math.random() >= 0.5 ? true : false,
  },
  {
    name: "Spageti Dengan Sauce Tomat & Daging",
    description: "Spageti dengan bumbu Tomat dan daging rempah khas Malaysia",
    price: 25000,
    image:
      "https://media.istockphoto.com/id/637214478/photo/pasta-plate.webp?b=1&s=170667a&w=0&k=20&c=5zJT5eah3c_O4gj4pb2hDyVpViWthUAjmkiI-ZbjTxc=",
    stock: Math.random() >= 0.5 ? true : false,
  },
  {
    name: "Sate Ayam",
    description:
      "Potongan daging ayam yang ditusuk dan dibakar, disajikan dengan bumbu kacang",
    price: 15000,
    image: "/food/sate-ayam.jpg",
    stock: Math.random() >= 0.5 ? true : false,
  },
  {
    name: "Gado-Gado",
    description: "Sayuran segar dengan bumbu kacang khas Indonesia",
    price: 20000,
    image: "/food/gado-gado.jpg",
    stock: Math.random() >= 0.5 ? true : false,
  },
  {
    name: "Rendang",
    description:
      "Daging yang dimasak dengan santan dan rempah-rempah khas Padang",
    price: 30000,
    image: "/food/rendang.jpg",
    stock: Math.random() >= 0.5 ? true : false,
  },
  {
    name: "Soto Ayam",
    description: "Sup ayam dengan kuah kuning dan berbagai rempah",
    price: 18000,
    image: "/food/soto-ayam.jpg",
    stock: Math.random() >= 0.5 ? true : false,
  },
  {
    name: "Martabak",
    description:
      "Makanan dadakan yang terbuat dari adonan tepung dengan berbagai isian",
    price: 20000,
    image: "/food/martabak.jpg",
    stock: Math.random() >= 0.5 ? true : false,
  },
  {
    name: "Bakso",
    description: "Bola daging yang direbus disajikan dengan mie dan kuah kaldu",
    price: 12000,
    image: "/food/bakso.jpg",
    stock: Math.random() >= 0.5 ? true : false,
  },
  {
    name: "Soto Betawi",
    description: "Sup daging dengan kuah santan kental khas Betawi",
    price: 22000,
    image: "/food/soto-betawi.jpg",
    stock: Math.random() >= 0.5 ? true : false,
  },
  {
    name: "Ayam Penyet",
    description:
      "Ayam yang digeprek dengan bumbu rempah dan disajikan dengan sambal",
    price: 18000,
    image: "/food/ayam-penyet.jpg",
    stock: Math.random() >= 0.5 ? true : false,
  },
];

export default foodMenu;
