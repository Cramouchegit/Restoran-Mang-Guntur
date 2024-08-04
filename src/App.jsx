import data from "./utils/data";
import "./styles/index.css";
import "./App.css";

function Header() {
  return <h1 className="menu">Restoran Mang Guntur</h1>;
}

function Menu() {
  const foods = data;
  // const foods = [];
  const numFoods = foods.length;

  if (numFoods === 0) {
    return (
      <main className="menu">
        <p>Menu Kosong, Besok datang lagi</p>
      </main>
    );
  } else {
    return (
      <menu className="menu">
        <h2>Menu Kita:</h2>
        <p>
          Aneka makanan Indonesia yang disajikan oleh warteg mang udin sebagai
          pemenuhan makanan kesehatan yang diperlukan dalam kehidupan
          sehari-hari.
        </p>
        <h3>Makanan</h3>
        <ul className="foods">
          {data.map((food) => (
            <Food foodObj={food} key={food.name} />
          ))}
        </ul>
      </menu>
    );
  }
}

function Food(props) {
  const { name, description, price, image, stock } = props.foodObj;
  return (
    <li className={`food ${!stock ? "sold-out" : ""}`}>
      <img src={image} alt={name} width={150} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>Rp. {price}</span>
        <article>{stock ? "Tersedia" : "Stok habis"}</article>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openClock = 10;
  const closeClock = 23;
  const isOpen = hour >= openClock && hour <= closeClock;

  if (isOpen) {
    return <FooterOpenHour openClock={openClock} closeClock={closeClock} />;
  } else {
    return <FooterCloseHour openClock={openClock} closeClock={closeClock} />;
  }
}

function FooterOpenHour({ openClock, closeClock }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          Restoran Mang Guntur buka pukul:
          {openClock} - {closeClock}
        </p>
        <button className="btn">Order</button>
        <small>Klik tombol diatas untuk memesan</small>
      </div>
    </footer>
  );
}

function FooterCloseHour({ openClock, closeClock }) {
  return (
    <footer className="footer">
      <p>
        Maaf Kak Masih tutup, Coba dateng lagi pukul: {openClock} - {closeClock}
      </p>
    </footer>
  );
}

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <hr />
        <Menu />
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default App;
