import React, { Component } from 'react'
import './Login.css'
import './style.css'
import Icon from '../images/icon.jpg'
import {Link} from 'react-router-dom';
export default class Login extends Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

    render() {
        return (
             <div>
             <div className="col-md-2">
            
             </div>
             <div class="linnne">
                        </div>
            <div className="custombackgroundd">
                <div className="row mx-0">
                    <div className="col-md-2">
                    <div className="image_parentt">
                    <div className="custom_image">
                    
                    <h5>Profile</h5>
                    <h1></h1>
                    {"\n"}
                        <div class="line">
                        </div>
                         <Link to='/Post' className="mx-auto" style={{ textDecoration: 'none',color:"#fff" }}>
                     <h5>Post</h5>
                      <h1></h1>
                    {"\n"}
                     </Link>
                     <div class="line">
                        </div>
                        <Link to='/gallery' className="mx-auto" style={{ textDecoration: 'none',color:"#fff" }}>
                     <h5>Gallery</h5>
                     <h1></h1>
                    {"\n"}
                     </Link>
                     <div class="line">
                        </div>
                         <Link to='/todo' className="mx-auto" style={{ textDecoration: 'none',color:"#fff" }}>
                     <h5>ToDo</h5>
                     </Link>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-5">
                     
                       <h4>Profile</h4>
                       
                    <div className="text_paret">
                    <div className="custom_textt">
                    <img src={Icon} style={{height:"170px",width:"177px"}}/>
                    
                    <h4 className="mb-3">Leanne Graham</h4>
                   <div className="custtext">
                    <h5><span class="usere">Username:</span><span class="names">Bret</span></h5>
                    </div>
                     <div className="custtext">
                    <h5><span class="use">e-mail:</span><span class="naes">Sincere@april.biz</span></h5>
                    </div>
                     <div className="custtext">
                    <h5><span class="userrre">Phone:</span><span class="naames">9999999</span></h5>
                    </div>
                     <div className="custtext">
                    <h5><span class="usr">Website:</span><span class="nsss">learningrm.com</span></h5>
                    </div>
                     <div className="custtext">
                   <div class="linnnee">
                    </div>
                    </div>
                   
                  <h4 className="mb-3"><span class="userc">Company</span></h4>
                   <div className="custtext">
                    <h5><span class="comp">Name:</span><span class="comnp">Romaguera-Corna</span></h5>
                    </div>
                     <div className="custtext">
                    <h5><span class="user">catchphrase:</span><span class="userr">Multi-layered client-server neural</span></h5>
                    </div>
                     <div className="custtext">
                    <h5><span class="userbs">bs:</span><span class="userrbs">harness real-time e-markets</span></h5>
                    </div>
                    
                    
                    
                    
                    </div>
                    </div>
                    </div>
                    <div className="col-md-5">
                    <div  className="dropdown" style = {{color:"black",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> <img src={Icon} style={{height:"30px",width:"30px"}}/> 
         <span style = {{color:"black",width:"200px"}}>leanne Grahm</span></div>

          { this.state.displayMenu ? (
          <ul>
         <li class="dropp"><a className="active" href="#Create Page"><img src={Icon} style={{height:"50px",width:"50px"}}/></a><h6>Leanne Graham</h6>
         <span style = {{color:"gray",width:"200px"}}><h6>Sincere@april</h6></span>
         </li>
          <li class="dropp"><a href="#Create Ads"><img src={Icon} style={{height:"30px",width:"30px"}}/>Bauch</a></li>
         <li class="dropp"><a href="#Create Ads"><img src={Icon} style={{height:"30px",width:"30px"}}/>Lebsack</a></li>
         
          <Link to='/login' className="mx-auto" style={{ textDecoration: 'none' }}><li class="sign"><a href="#">Sign Out</a></li></Link>
          </ul>
        ):
        (
          null
        )
        }

       </div>
                     

                    <div className="col-md-5">
                    <div className="text_parent">
                    <span class="head"><h3>Address</h3></span>
                      <div className="custtext">
                    <h5><span class="head">Street:</span><span class="headd">Kulash Light</span></h5>
                    </div>
                     <div className="custtext">
                    <h5><span class="hed">Suite:</span><span class="headdd">Sincere@april.biz</span></h5>
                    </div>
                     <div className="custtext">
                    <h5><span class="headee">City:</span><span class="headddd">london</span></h5>
                    </div>
                     <div className="custtext">
                    <h5><span class="headt">ZipCode:</span>567389</h5>
                    </div>

                    <div className="map">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.773907288865!2d77.58016791464462!3d12.922247990888314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15090fc15417%3A0x10eefde49e9fd94!2sPanOrbit!5e0!3m2!1sen!2sin!4v1593958972134!5m2!1sen!2sin"  class="map" tabindex="0"></iframe>
                    </div>

                    </div>
                    </div>

                    </div>
                </div>
                </div>
            </div>
        )
    }
}
