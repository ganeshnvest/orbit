
import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import styled from 'styled-components';
import Table from './Table'
import './Landingpage.css';


const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 10px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
    padding-top: 64px;
`;



export default class extends Component {

    state = {
        selected: 'home',
        expanded: false
    };
    onSelect = (selected) => {
        this.setState({ selected: selected });
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };
  render() {

    
   
          const { expanded, selected } = this.state;
          return (
            <div className="sd-nav">
          
              <Main expanded={expanded} >
                <Table/>
               
              </Main>
            </div>
          
   
    );
  }
}