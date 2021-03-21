import React from "react";
import Moto from '../../assets/imgs/moto.svg'
import Car from '../../assets/imgs/car.svg'
import '../CarMotors/CarMts.css'
const CarMotors = () => {
    return (
        <div>
            <div className="row">
                <div className="column">
                    <div className="card">
                      <table>   
                          <tr>
                              <td>
                                 <img className="" src={Car} width="120" height="120" />
                                    
                              </td>
                                COMPRAR
                                
                              <td className="car"><a className="a">Carros</a></td>
                              
                          </tr>
                      </table>
                    </div>
                    
                </div>
                <div class="column">
                    <div className="card">
                    <table>
                          <tr>
                              <td>
                                 <img className="" src={Moto} width="120" height="120" />
                                    
                              </td>
                                COMPRAR
                              <td className="car" ><a className="a">MOTOS</a></td>
                          </tr>
                      </table>
                    </div>
                </div>
                
            </div>
            <button className="button-vender">Vender meu carro</button>
        
        </div>

    )
}

export default CarMotors;