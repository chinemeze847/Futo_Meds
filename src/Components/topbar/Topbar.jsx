
import {Search, Chat, Person, Notifications} from "@mui/icons-material";
import './topbar.css' ;

function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Futo Medecals</span>
                <img src="/assets/person/futologo.png" alt="Futo Logo" className="futologo"/>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input  placeholder="Search your favourite doctor" className="searchInput"/>  
                </div>  
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                   <span className="topbarLink">Homepage</span>
                   <span className="topbarLink">TimeLine</span>
                </div>

                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">4</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">4</span>
                    </div>
                </div>

                <img src="/assets/person/one.jpg" alt="" className="topbarImage"/>

            </div>
            
        </div>
    )
}

export default Topbar
