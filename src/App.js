import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import { tg_title_animation } from "./lib/gsap/tg_title_animation";
import HomeTwo from "./pages/Home/HomeTwo";
import { useParticles } from "./lib/hooks/useParticles";
import { useParallax } from "./lib/hooks/useParallax";
import HomeThree from "./pages/Home/HomeThree";
import HomeFour from "./pages/Home/HomeFour";
import { useHasAnimation } from "./lib/hooks/useHasAnimation";
import HomeFive from "./pages/Home/HomeFive";
import AboutPage from "./pages/About/AboutPage";
import AboutPageTwo from "./pages/About/AboutPageTwo";
import AboutPageThree from "./pages/About/AboutPageThree";
import AboutPageFour from "./pages/About/AboutPageFour";
import AboutPageFive from "./pages/About/AboutPageFive";
import ServicesPage from "./pages/Services/ServicesPage";
import ServicesPageTwo from "./pages/Services/ServicesPageTwo";
import ServicesPageThree from "./pages/Services/ServicesPageThree";
import ServicesPageFour from "./pages/Services/ServicesPageFour";
import ServicesPageFive from "./pages/Services/ServicesPageFive";
import ServicesDetailsPage from "./pages/ServicesDetails/ServicesDetailsPage";
import ServicesDetailsPageTwo from "./pages/ServicesDetails/ServicesDetailsPageTwo";
import ServicesDetailsPageThree from "./pages/ServicesDetails/ServicesDetailsPageThree";
import ServicesDetailsPageFour from "./pages/ServicesDetails/ServicesDetailsPageFour";
import ServicesDetailsPageFive from "./pages/ServicesDetails/ServicesDetailsPageFive";
import ProjectDetailsPage from "./pages/ProjectDetails/ProjectDetails";
import TeamDetailsPage from "./pages/TeamDetails/TeamDetailsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import BlogPage from "./pages/BlogPages/BlogPage";
import BlogDetailsPage from "./pages/BlogPages/BlogDetailsPage";
import ContactPage from "./pages/Contact/ContactPage";
import { useWow } from "./lib/hooks/useWow";
import { useAos } from "./lib/hooks/useAos";
import { useJarallax } from "./lib/hooks/useJarallax";
import Seo from "./components/Serv/SEO/Seo";
import SocialMediaMarketing from "./components/Serv/SocialMediaMarketing/SocialMediaMarketing";
import YoutubeMarketing from "./components/Serv/YoutubeMarketing/YoutubeMarketing";
import PayPerClick from "./components/Serv/PayPerClick/PayPerClick";
import WebDevelopment from "./components/Serv/WebDevelopment/Webdevelopment";
import Java from "./components/Serv/Java/Java";
import Shopify from "./components/Serv/Shopify/Shopify";
import Magento from "./components/Serv/Magento/Magento";
import GraphicDesign from "./components/Serv/GraphicDesign/GraphicDesign";
import WebsiteDesign from "./components/Serv/WebsiteDesign/WebsiteDesign";
import RotoScoping from "./components/Serv/RotoScoping/RotoScoping";
import Animation from "./components/Serv/Animation/Animation";
import ECommerceMarketing from "./components/Serv/ECommerceMarketing/ECommerceMarketing";
import AmazonMarketing from "./components/Serv/AmazonMarketing/AmazonMarketing";
import Wordpress from "./components/Serv/Wordpress/Wordpress";
import Php from "./components/Serv/Php/Php";


function App() {
  useWow();
  useAos();
  useJarallax();
  useParallax();
  useParticles();
  useHasAnimation();

  // title, subtitle animation
  useEffect(() => {
    tg_title_animation();
  }, []);

  // on route change to top of the page
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home-2" element={<HomeTwo />} />
        <Route path="home-3" element={<HomeThree />} />
        <Route path="home-4" element={<HomeFour />} />
        <Route path="home-5" element={<HomeFive />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="about-2" element={<AboutPageTwo />} />
        <Route path="about-3" element={<AboutPageThree />} />
        <Route path="about-4" element={<AboutPageFour />} />
        <Route path="about-5" element={<AboutPageFive />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services-2" element={<ServicesPageTwo />} />
        <Route path="services-3" element={<ServicesPageThree />} />
        <Route path="services-4" element={<ServicesPageFour />} />
        <Route path="services-5" element={<ServicesPageFive />} />
        <Route path="services-details" element={<ServicesDetailsPage />} />
        <Route path="services-details-2" element={<ServicesDetailsPageTwo />} />
        <Route
          path="services-details-3"
          element={<ServicesDetailsPageThree />}
        />
        <Route
          path="services-details-4"
          element={<ServicesDetailsPageFour />}
        />
        <Route
          path="services-details-5"
          element={<ServicesDetailsPageFive />}
        />
        <Route path="project-details" element={<ProjectDetailsPage />} />
        <Route path="team-details" element={<TeamDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />}/>
        <Route path="seo" element={<Seo/>}/>
        <Route path="socialmediamarketing" element={<SocialMediaMarketing/>}/>
        <Route path="youtubemarketing" element={<YoutubeMarketing/>}/>
        <Route path="payperclick" element={<PayPerClick/>}/>
        <Route path="webdevelopment" element={<WebDevelopment/>}/>
        <Route path="java" element={<Java/>}/>
        <Route path="shopify" element={<Shopify/>}/>
        <Route path="magento" element={<Magento/>}/>
        <Route path="graphicdesign" element={<GraphicDesign/>}/>
        <Route path="websitedesign" element={<WebsiteDesign/>}/>
        <Route path="rotoScoping" element={<RotoScoping/>}/>
        <Route path="animation" element={<Animation/>}/>
        <Route path="ecommercemarketing" element={<ECommerceMarketing/>}/>
        <Route path="amazonmarketing" element={<AmazonMarketing/>}/>
        <Route path="wordpress" element={<Wordpress/>}/>
        <Route path="Php" element={<Php/>}/>




      </Routes>
    </>
  );
}

export default App;
