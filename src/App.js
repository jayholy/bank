import Bussiness from "./components/Bussiness";
import CardDeal from "./components/CardDeal";
import Client from "./components/Client";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Billing from "./components/Billing";
import Stats from "./components/Stats";
import Tets from "./components/Test";
import styles from "./style";
function App() {
  return (
    <div className=" bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Bussiness />
          <Billing/>
          <CardDeal />
          <Tets />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
