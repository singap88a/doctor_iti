import About_Us from "../../components/Home_com/About_Us"
import Appointment from "../../components/Home_com/Appointment"
import Banner from "../../components/Home_com/Banner"
import Brand from "../../components/Home_com/Brand"
import Departments from "../../components/Home_com/Departments"
import Departments_2 from "../../components/Home_com/Departments_2"
import Hero from "../../components/Home_com/Hero"
import Latest_Update from "../../components/Home_com/Latest_Update"
import Our_Values from "../../components/Home_com/Our_Values"
import Reviews from "../../components/Home_com/Reviews"

 
 

 
function Home() {
  return (
    <div className="">
      <Hero/>
     <Our_Values/>
     <About_Us/>
     <Departments/>
     <Departments_2/>
     <Reviews/>
     <Banner/>
     <Latest_Update/>
     <Appointment/>
       <Brand/>
   
    </div>
  )
}

export default Home
