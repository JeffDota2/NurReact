 import React, { Component } from 'react'
 import Logo  from '../img/logo.png'

 export default class Header extends Component {
     render() {
         return (
         <div>    
            <header class="bg-gray-900 text-white py-2 ">
                <div class="container mx-auto flex justify-between flex-wrap align-center">
                    <span><i class="fa fa-star-half-empty"></i> Equipamos el futuro hoy.</span>
                    <span>Teléfono: (593) 999 705 620 <span class="ml-5">Email: probayo@yavirac.edu</span> </span>
                    
                </div>
            </header>
            <div className='nav container mx-auto flex justify-center sm:justify-between flex-wrap align-center py-10'>
                <img src={Logo} alt="" className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100" width="250" height="250" />


                <button className=" duration-150  bg-gray-900 py-0 px-2 text-white font-bold uppercase text-sm rounded hover:bg-yellow-500 hover:text-gray-800"><i class="fa fa-heart text-yellow-500 hover:text-gray-800"></i> DONA UN COMPUTADOR</button>
            </div>
        </div>

            
         )
     }
 }
 