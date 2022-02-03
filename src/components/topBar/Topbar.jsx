import React from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AuthApi from '../../Auth/Auth';
import Cookies from 'js-cookie';



function Topbar(){
    const[ isActive, setIsActive ] = useState(false)
    const[ isActive1, setIsActive1 ] = useState(false)
    const Auth = useContext(AuthApi)
    const handleClick = () =>{
        Auth.setAuth(false);
        Cookies.remove("user");
    }
    return(
        <>
            <div className='all'>
                <div className='nav-bar-left'>
                    <span className='nav-bar-head1'><Link className='link' to='/dev'>Disney Construct <span className='nav-bar-head2'>Hub</span></Link></span>
                </div>
                <div className='dropdown'>
                    <div className='dropdown-btn' onClick={(e)=>setIsActive(!isActive)}>Getting Started<ExpandMoreIcon /></div>
                    {isActive && (
                        <div className='dropdown-content'>
                            <div className='dropdown-item'>FAQ</div>
                            <div className='dropdown-item'>Construct Hub on GitHub</div>
                            <div className='dropdown-item'>Issues on GitHub</div>
                            <div className='dropdown-title'>Community</div>
                            <div className='dropdown-item'>Slack</div>
                        </div>
                    )}
                </div>
                <div className='dropdown1'>
                    <div className='dropdown-btn1' onClick={(e)=>setIsActive1(!isActive1)}>Documentation<ExpandMoreIcon /></div>
                    {isActive1 && (
                        <div className='dropdown-content1'>
                            <div className='dropdown-title1'>AWS CDK</div>
                            <div className='dropdown-item1'>Home</div>
                            <div className='dropdown-item1'>Getting Started</div>
                            <div className='dropdown-item1'>Workshop</div>
                            <div className='dropdown-item1'>Best Practices</div>
                            <div className='dropdown-title1'>CDK for Terraform</div>
                            <div className='dropdown-item1'>Getting Started</div>
                            <div className='dropdown-item1'>Tutorials</div>
                            <div className='dropdown-title1'>CDK for Kubernetes</div>
                            <div className='dropdown-item1'>Home</div>
                            <div className='dropdown-item1'>Getting Started</div>
                            <div className='dropdown-item1'>Documentation</div>
                            <div className='dropdown-item1'>API Reference</div>
                            <div className='dropdown-title1'>Community</div>
                            <div className='dropdown-item1'>Community Hub</div>
                        </div>
                    )}
                </div>
                <div className='dropdownhead'> 
                    <div>Contribute</div>
                </div>
                <div>
                    <button onClick={handleClick}>Logout</button>
                </div>
            </div>
        </>
    )
}


export default Topbar;