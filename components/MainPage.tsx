import { Navbar } from "./Nav";
import Footer from "./Footer";
import Problem from "./sections/Problem";
import Solution from "./sections/Solution";
import HowItWorks from "./sections/HowItWorks";
import WhyChooseUs from "./sections/WhyChooseUs";
import WhoWeServe from "./sections/WhoWeServe";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import FAQSection from "./FAQs";
import { faqSchema } from "@/data/faqSchema";

const UbunifuLabsPage = () => (
  <div>
    <Navbar />
    <main>
      <Problem />
      <Solution />
      <HowItWorks />
      <WhyChooseUs />
      <WhoWeServe />
      <Pricing />
      <Contact />
      <FAQSection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
    <Footer />
  </div>
);

export default UbunifuLabsPage;
