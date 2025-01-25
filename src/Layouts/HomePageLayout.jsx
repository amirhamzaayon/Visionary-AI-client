import { NavBar } from "../Components/Navbar";
import { HeroSection } from "../Components/Hero Section/HeroSection";
// import { Announcement } from "../Components/Announcement";
// import { Testimonial } from "../Components/Testimonial";
import { MembershipPriceCards } from "../Components/MembershipPriceCards";
import { Footer } from "../Components/Footer";
import { ForumCards } from "../Components/Forum section/ForumCards";

export const HomePageLayout = () => {
  return (
    <div className="font-roboto">
      <header className="w-10/12 mx-auto mt-6 ">
        <NavBar></NavBar>
        <HeroSection></HeroSection>
      </header>
      <main>
        {/* <section className="w-10/12 py-12 mx-auto mb-6">
          <Announcement></Announcement>
        </section> */}
        <section id="ServiceCards" className="w-10/12 py-12 mx-auto ">
          <ForumCards></ForumCards>
        </section>
        {/* <section className="w-10/12 py-12 mx-auto mb-6">
          <Testimonial></Testimonial>
        </section> */}
        <section id="faq" className="w-10/12 py-12 mx-auto">
          <MembershipPriceCards></MembershipPriceCards>
        </section>
      </main>
      <footer className="w-10/12 mx-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};
