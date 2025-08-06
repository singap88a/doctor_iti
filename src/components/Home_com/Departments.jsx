import { Link } from "react-router-dom"
import bg_banner from "../../assets/img_home/bg_hero.png"
import Department from "../../pages/Departments/departmentsData"
 
 export default function Departments() {
   return (
     <div className="relative mb-[150px]">
       <div>
         <div 
           className="container mx-auto bg-center bg-cover rounded-lg h-[770px] md:h-80 sm:px-8 lg:px-16"
           style={{ backgroundImage: `url(${ bg_banner })` }}
         >
           <div className="flex items-center justify-center h-20 md:h-full">
             <h2 className="text-3xl font-bold sm:text-4xl text-text_color">
               departments
             </h2>
           </div>
       </div>
       </div>
     </div>
   )
 }
 