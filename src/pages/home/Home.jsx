import Feeds from '../../Components/feeds/Feeds';
import Rightbar from '../../Components/rightbar/Rightbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import  Topbar from '../../Components/topbar/Topbar';
import './home.css'

function Home() {
    return (
        <div>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feeds/>
                <Rightbar/>
            </div>
        </div>
    )
}

export default Home
