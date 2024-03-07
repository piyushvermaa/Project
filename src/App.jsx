import styles from "./style";

import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-gradient-dark-blue-purple  w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        {/* <Clients /> */}
        
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
