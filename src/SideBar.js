import { BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs';
import { FaFire, FaBeer } from 'react-icons/fa';

const SideBar = () =>{
    return (
       <div className="fixed top-0 left-0 h-screen w-16 m-0
                     flex flex-col bg-primary shadow-lg text-white">
            <SideBarIcon icon={<FaFire size="28"/>}/>
            <SideBarIcon icon={<BsPlus size="32"/>}/>
            <SideBarIcon icon={<BsFillLightningFill size="20"/>}/>
            <SideBarIcon icon={<BsGearFill size="20"/>}/>
            <SideBarIcon icon={<FaBeer size="28"/>}/>
       </div>
    );
};

const SideBarIcon = ({ icon, text = 'Neka pomoc' }) =>(
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
        {text}
        </span>
    </div>
    

);

export default SideBar;