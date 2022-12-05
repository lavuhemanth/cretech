import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from '../components/About/Main'
import Contact from '../components/Contact/Main'
import Footer from '../components/Footer/Main'
import Home from '../components/Home/Main'
import Navbar from '../components/Navbar/Main'
import CyberSecurity from '../components/Services/CyberSecurity/Main'
import InfrastructurePlan from '../components/Services/InfrastructurePlan/Main'
import ITConsultant from '../components/Services/ITConsultant/Main'
import ITManagement from '../components/Services/ITManagement/Main'
import QATesting from '../components/Services/QATesting/Main'
import Service2 from '../components/Services/Services2/Main'
import Webapp from '../components/Services/Webapp/Main'
import Mobileapp from '../components/Services/Mobileapp/Main'
import Microsoft from '../components/Services/Microsoft/Main'
import HireingDev from '../components/Services/HireingDev/Main'
import Frontend from '../components/Services/Frontend/Main'
import ITmerit from "../components/Services/ITmerit/Main"
import Cloudintegration from '../components/Services/Cloudintegration/Main'
import Clouddev from '../components/Services/Clouddev/Main'
import Chatbot from '../components/Services/Chatbot/Main'
import Bigdata from '../components/Services/Bigdata/Main'
import Iot from '../components/Services/Iot/Main'
import Ar from '../components/Services/Ar/Main'
import Business from '../components/Services/Business/Main'
import ProductPrototype from '../components/Services/ProductPrototype/Main'
import ManagedServices from '../components/Services/ManagedServices/Main'
import Enterprice from '../components/Services/Enterprice/Main'
import Delivery from '../components/Services/Delivery/Main'
import Pricing from '../components/Services/Pricing/Main'
import DevelopMethodology from'../components/Services/DevelopMethodology/Main'
import Construction from '../components/Industries/Construction/Main'
import Ecommerce from '../components/Industries/Ecommerce/Main'
import Education from '../components/Industries/Education/Main'
import Energy from '../components/Industries/Energy/Main'
import Healthcare from '../components/Industries/Healthcare/Main'
import Logistics from '../components/Industries/Logistics/Main'
import Manufactur from '../components/Industries/Manufactur/Main'
import Media from '../components/Industries/Media/Main'
import RealEstate from '../components/Industries/RealEState/Main'
import Retail from '../components/Industries/Retail/Main'
import Social from '../components/Industries/Social/Main'
import Travel from '../components/Industries/Travel/Main'
// import ProjectDetails from '../components/Project/ProjectDetails/Main'
// import Projects from '../components/Project/Projects/Main'
// import Home2 from '../components/Home2/Main'
// import Home3 from '../components/Home3/Main'
// import Blogs from '../components/Blog/Blogs/Main'
// import BlogDetails from '../components/Blog/BlogDetails/Main'
// import Service1 from '../components/Services/Services1/Main'
// import Team from '../components/Team/Main'

const Routing = () => {
    const [homepage, sethomepage] = useState(false)
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/home-02" || location.pathname === "/home-03"){
        sethomepage(false)
      }else{
        sethomepage(true)
      }
    }, [location])
    
    return (
      <>
        {homepage && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home-02" element={<Home2 />} />
                <Route path="/home-03" element={<Home3 />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/team" element={<Team />} />
                <Route path="/service-01" element={<Service1 />} /> */}
          <Route path="/services" element={<Service2 />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/it-management" element={<ITManagement />} />
          <Route path="/qa-testing" element={<QATesting />} />
          <Route path="/infrastructure-plan" element={<InfrastructurePlan />} />
          <Route path="/it-consultant" element={<ITConsultant />} />
          <Route path="/Webapp" element={<Webapp />} />
          <Route path="/mobileapp" element={<Mobileapp />} />
          <Route path="/hireing" element={<HireingDev />} />
          <Route path="/microsoftenterprise" element={<Microsoft />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/ITmerit" element={<ITmerit />} />
          <Route path="/Cloudintegration" element={<Cloudintegration />}/>
          <Route path="/Clouddev" element={<Clouddev />}/>
          <Route path="/Chatbot" element={<Chatbot />}/>
          <Route path="/Bigdata" element={<Bigdata />}/>
          <Route path="/Iot" element={<Iot />}/>
          <Route path="/Ar" element={<Ar />}/>
          <Route path="/Business" element={<Business />}/>
          <Route path="/ProductPrototype" element={<ProductPrototype />}/>
          <Route path="/ManagedServices" element={<ManagedServices />}/>
          <Route path="/Enterprice" element={<Enterprice />}/>
          <Route path="/DevelopMethodology" element={<DevelopMethodology />}/>
          <Route path="/Delivery" element={<Delivery />}/>
          <Route path="/Pricing" element={<Pricing />}/>
          <Route path="/Construction" element={<Construction />}/>
          <Route path="/Ecommerce" element={<Ecommerce />}/>
          <Route path="/Education" element={<Education />}/>
          <Route path="/Energy" element={<Energy />}/>
          <Route path="/Healthcare" element={<Healthcare />}/>
          <Route path="/Logistics" element={<Logistics />}/>
          <Route path="/Manufactur" element={<Manufactur />}/>
          <Route path="/Media" element={<Media />}/>
          <Route path="/RealEstate" element={<RealEstate />}/>
          <Route path="/Retail" element={<Retail />}/>
          <Route path="/Social" element={<Social />}/>
          <Route path="/Travel" element={<Travel />}/>
          {/* <Route path="/projects" element={<Projects />} />
                <Route path="/project-details" element={<ProjectDetails />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/blog-details" element={<BlogDetails />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    );
}

export default Routing