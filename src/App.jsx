import React, { useState, useEffect } from "react";
import styles from "./style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => {
  const [scroll, setScroll] = useState(0)
  const [ isInViewHero, setIsInViewHero]= useState(false)
  const [ isInViewBusiness, setIsInViewBusiness]= useState(false)
  const [ isInViewBilling, setIsInViewBilling]= useState(false)
  const [ isInViewTestimonials, setIsInViewTestimonials]= useState(false)


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
          <Navbar
            isInViewHero={isInViewHero}
            isInViewBusiness={isInViewBusiness}
            isInViewBilling={isInViewBilling}
            isInViewTestimonials={isInViewTestimonials}
          />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero setIsInView={setIsInViewHero} />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business setIsInView={setIsInViewBusiness} />
          <Billing setIsInView={setIsInViewBilling}/>
          <CardDeal />
          <Testimonials setIsInView={setIsInViewTestimonials} />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;
