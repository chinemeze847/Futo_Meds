import React from 'react'
import './sidebar.css'
import { MedicalServices, Book, Info, HelpOutline, Event} from '@mui/icons-material'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <ul className="sidebarList">

                  <li className="sidebarListItem">
                        <Info className='sidebarIcon'/>
                        <span className='sidebarListItemText'>About Us</span>
                    </li>

                    <li className="sidebarListItem">
                        <MedicalServices className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Medical Services</span>
                    </li>

                    <li className="sidebarListItem">
                        <Book className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Book Doctor</span>
                    </li>

                    <li className="sidebarListItem">
                        <HelpOutline className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Help</span>
                    </li>

                    <li className="sidebarListItem">
                        <Event className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Events</span>
                    </li>
                </ul>

                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr'/>
                <ul className='sidebarDoctorList'>

                    <li className='sidebarDoctor'>
                        <img className='sidebarDoctorImg' src="/assets/person/two.jpg" alt=""/>
                        <span className='sidebarDoctorName'>Henry Brown</span>
                    </li>

                    <li className='sidebarDoctor'>
                        <img className='sidebarDoctorImg' src="/assets/person/two.jpg" alt=""/>
                        <span className='sidebarDoctorName'>Henry Brown</span>
                    </li>

                    <li className='sidebarDoctor'>
                        <img className='sidebarDoctorImg' src="/assets/person/two.jpg" alt=""/>
                        <span className='sidebarDoctorName'>Henry Brown</span>
                    </li>

                    <li className='sidebarDoctor'>
                        <img className='sidebarDoctorImg' src="/assets/person/two.jpg" alt=""/>
                        <span className='sidebarDoctorName'>Henry Brown</span>
                    </li>

                    <li className='sidebarDoctor'>
                        <img className='sidebarDoctorImg' src="/assets/person/two.jpg" alt=""/>
                        <span className='sidebarDoctorName'>Henry Brown</span>
                    </li>

                    <li className='sidebarDoctor'>
                        <img className='sidebarDoctorImg' src="/assets/person/two.jpg" alt=""/>
                        <span className='sidebarDoctorName'>Henry Brown</span>
                    </li>

                </ul>
            </div>
        </div>
    ) 
}

export default Sidebar
