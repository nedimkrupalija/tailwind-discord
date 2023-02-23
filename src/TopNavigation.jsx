import{
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
} from 'react-icons/fa';


const TopNavigation = () => {
    return (
        <div className='top-navigation'>
            <HashtagIcon/>
            <Title/>
            <Search/>
            <BellIcon/>
            <UserCircle/>
        </div>
    );
};

const Search = () =>{
    <div className='search'>
        <input className='search-input' type='text' placeholder='Search...'></input>
        <FaSearch size='18' className='text-secondary my-auto'/>
    </div>
};

const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon'/>
const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon'/>
const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag'/>
const Title = () => <h5 className='title-text'>Discord example</h5>


export default TopNavigation;