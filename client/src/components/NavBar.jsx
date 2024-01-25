import { useState } from "react"
import { logo } from "../../public/EXPORTS"
import { BsSun } from "@react-icons/all-files/bs/BsSun"
import { BsMoon  } from "@react-icons/all-files/bs/BsMoon"

export const NavBar = ({setThemetoggle,theme,sections,btn,language,setLanguage}) => {
    const [show,setShow] = useState(false)
    



    const handelCall = () =>{
        setShow(false)
    }
    const handelTheme = () =>{
      
        setThemetoggle(prev =>!prev)
    }
    const handelLanguage = () =>{
      if(language === 'En'){
        setLanguage('Ar')
        document.getElementsByTagName('html')[0].lang = 'ar';
        document.getElementsByTagName('html')[0].dir = 'rtl';
      } else {
        setLanguage('En')
        document.getElementsByTagName('html')[0].lang = 'en';
        document.getElementsByTagName('html')[0].dir = 'ltr';
      }
       

   
    }
  return (
    

<nav className="bg-pbg fixed top-0 start-0 z-50 w-full  backdrop-blur-5xl  "  onBlur={()=>setShow(false)}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pe-3 relative">
    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse flex-col">
        <img src={logo} className="w-48 brightness-200 " alt="QAFILAT ALOROUBA TRANSPORT." />
    </a>
    <button onClick={()=>setShow(prev => !prev)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-16 h-16 justify-center text-sm text-thtxt rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-thtxt" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>

    
    <div className={`w-full md:flex p-4 md:w-auto bg-pbg z-40  ${show?'show absolute top-20 ':'hidden'}`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0  mt-5   rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-2 ">
        {sections?.map((section,i)=>{
            return(
                <li onClick={handelCall} key={i} className="block py-2 text-sm px-3 text-thtxt rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ptxt md:p-0 ">
                <a href={`#${section.id}`} >{section.head}</a>
              </li>
            )
        })}

      </ul>
      <ul className="font-medium items-center flex justify-between p-4 md:p-0   rounded-lg  md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 ">
      <li onClick={handelLanguage}>
          <button  className={`${language == 'En'?"bg-green-500 hover:bg-green-400 text-fotxt":"bg-violet-800 hover:bg-violet-700 text-fotxt"}  text-sm  hover:shadow-lg  transition-all w-9 h-9 flex items-center justify-center rounded-full  cursor-pointer`}>
            {language === 'En'?'Ar':'en'}
          </button>
        </li>
      <li onClick={handelTheme}>
          <button  className={`${!theme?"bg-orange-500 hover:bg-orange-400 text-fotxt":"bg-violet-800 hover:bg-violet-700 text-fotxt"}  text-lg  hover:shadow-lg  transition-all w-9 h-9 flex items-center justify-center rounded-full  cursor-pointer`}>
          {!theme?<BsSun className="" />
:<BsMoon  className="" />}
          </button>
        </li>

        <li onClick={handelCall}>
          <a href="#" className="bg-ptxt  hover:bg-fitxt hover:shadow-lg text-xs transition-all px-7 py-2.5 rounded-3xl text-fotxt cursor-pointer">{btn}</a>
        </li>
      </ul>
    </div>


  </div>
</nav>

  )
}
