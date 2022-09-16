import React, { useState, useEffect } from "react";
import styles from "./style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => {
  const [scroll, setScroll] = useState(0)


  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (

    <div className="bg-primary w-full overflow-hidden relative">
      <div className={`${styles.paddingX} ${styles.flexCenter} 
      fixed top-0 left-0 right-0 z-[100000]
      ${scroll > 100 ? 'backg-nav' : 'bg-transparent'
        }`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;
