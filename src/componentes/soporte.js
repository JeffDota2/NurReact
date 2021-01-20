import React, { Component } from 'react'
import Reco from '../img/reco.png'
import Aco from '../img/aco.png'
import Carro from '../img/carro.png'




export default class Soporte extends Component {
    render() {
        return (
            <div>
                        <div class="flex justify-center align-center flex-wrap w-full mt-5">
                        <div class="w-full md:w-4/12">
                            <p class="text-center text-5xl mt-5"><i class="fa fa-cog"></i></p>
                            <p class="text-center text-3xl mt-3">Recolectar</p>
                            <p class="mt-2">Se acuerda una cita con el donante para retirar el equipo y/o partes.</p>
                        </div>

                        <div class="w-full md:w-4/12">
                            <p class="text-center text-5xl mt-5"><i class="fa fa-info"></i></p>
                            <p class="text-center text-3xl mt-3">Acondicionar</p>
                            <p class="mt-2">A cada equipo se le hace: limpieza, mantenimiento, remanufactura e instalación de software base</p>
                        </div>

                        <div class="w-full md:w-4/12">
                            <p class="text-center text-5xl mt-5"><i class="fa fa-car"></i></p>
                            <p class="text-center text-3xl mt-3">Entregar</p>
                            <p class="mt-2">
                                Llevamos los equipos directo a la casa de los estudiantes. <br />

                                Dona ahora.
                            </p>
                        </div>
                    </div>
                </div>
                
                
            
        )
    }
}
