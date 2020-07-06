import React, { Component } from 'react'
import './Login.css'
import Icon from '../images/icon.jpg'
import {Link} from 'react-router-dom';
export default class Login extends Component {
    render() {
        return (
            <div>
            <div className="custombackground">
                <div className="row mx-0">
                    <div className="col-md-4">
                    <div className="image_parent">
                    <div className="custom_image">
                  
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                   
                    <div className="cardParent">
                    <div class="card customcard">
                    <div class="card-body p-3" >
                    <h5 class="card-title text-center pb-3">Select an account</h5>
                    <div className=""></div>
                    <div className="row mx-0 py-12">
                         <div class="scrollbar" id="style-2">
                         <div class="force-overflow">
               
                     </div>
                       <div className="row mx-0 py-12">
                         
                    <div class="linee">
                     <Link to='/landing' className="mx-auto" style={{ textDecoration: 'none' }}>
                     <img src={Icon} style={{height:"30px",width:"30px"}}/>
                       <span class="text2"> Leanne Graham</span> 
                       <span class="text2"><p></p></span>
                        </Link>
                    </div>

                     </div>
                     <div className="row mx-0 py-12">
                         
                    <div class="linee">
                     <Link to='/landing' className="mx-auto" style={{ textDecoration: 'none' }}>
                     <img src={Icon} style={{height:"30px",width:"30px"}}/>
                       <span class="text2">Leanne Graham</span> 
                       <span class="text2"><p></p></span>
                        </Link>
                    </div>
                        </div>
                     <div className="row mx-0 py-12">
                         
                           <div class="linee">
                     <Link to='/landing' className="mx-auto" style={{ textDecoration: 'none' }}>
                     <img src={Icon} style={{height:"30px",width:"30px"}}/>
                       <span class="text2">Leanne Graham</span> 
                       <span class="text2"><p></p></span>
                        </Link>
                    </div>
                      </div>
                     <div className="row mx-0 py-12">
                         
                     <div class="linee">
                     <Link to='/landing' className="mx-auto" style={{ textDecoration: 'none' }}>
                     <img src={Icon} style={{height:"30px",width:"30px"}}/>
                       <span class="text2">Leanne Graham</span> 
                       <span class="text2"><p></p></span>
                        </Link>
                    </div>
                    </div>
                     <div className="row mx-0 py-12">
                         
                      <div class="linee">
                     <Link to='/landing' className="mx-auto" style={{ textDecoration: 'none' }}>
                     <img src={Icon} style={{height:"30px",width:"30px"}}/>
                       <span class="text2">Leanne Graham</span> 
                       <span class="text2"><p></p></span>
                        </Link>
                    </div>
                 </div>
                   
                </div>
    </div>
                    
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">


                    </div>
                </div>
                </div>
            </div>
        )
    }
}
