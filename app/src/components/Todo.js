import React, { Component } from 'react'
import './Login.css'
import './style.css'
import Icon from '../images/icon.jpg'
import {Link} from 'react-router-dom';
export default class Todo extends Component {
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
            <div className="custombackgroundd">
                <div className="row mx-0">
                    <div className="col-md-2">
                    <div className="image_parentt">
                    <div className="custom_image">
                    <Link to='/landing' className="mx-auto" style={{ textDecoration: 'none',color:"#fff" }}>
                    <h5>Profile</h5>
                    <h1></h1>
                    {"\n"}
                     </Link>
                        <div class="line">
                        </div>
                        <Link to='/Post' className="mx-auto" style={{ textDecoration: 'none',color:"#fff" }}>
                     <h5>Post</h5>
                      <h1></h1>
                    {"\n"}
                     </Link>
                      <Link to='/gallery' className="mx-auto" style={{ textDecoration: 'none',color:"#fff" }}>
                     <div class="line">
                        </div>
                     <h5>Gallery</h5>
                     <h1></h1>
                    {"\n"}
                          </Link>
                            <Link to='/todo' className="mx-auto" style={{ textDecoration: 'none',color:"#fff" }}>
                     <div class="line">
                        </div>
                     <h5>ToDo</h5>
                       </Link>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-5">
                      
                    
                    <div className="custom_text">
                    
                    
                  <h4 className="mb-3">Todo Comming Soon</h4>
                   
                    
                     
                    
                    
                    
                    
                   
                    </div>
                    </div>
                    <div className="col-md-5">
                  

                    

                    </div>
                </div>
                </div>
            </div>
        )
    }
}
