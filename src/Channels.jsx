import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronCircleDown, FaChevronDown, FaChevronRight, FaExpandArrowsAlt, FaPlus } from 'react-icons/fa';

const channels = ['ETF-Sarajevo', 'PMF-Sarajevo'];
const subjects = ['Discrete math', 'Logic desin'];
const projects = ['Discord like page', 'Car shop'];

const Channels = () =>{
    return(
        <div className='channel-bar shadow-lg'>
            <ChannelBlock/>
            <div className='channel-container'>
                <Dropdown header='Channels' selections={channels}/>
                <Dropdown header='Subjects' selections={subjects}/>
                <Dropdown header='Projects' selections={projects}/>
            </div>
        </div>

    );
};


const Dropdown = ({ header, selections }) => {
    const [expanded, setExpanded] = useState(true);
    <div className='dropdown'>
        <div onClick={()=> setExpanded(!expanded)} className='dropdown-header'>
            <Selector expanded={expanded}/>
            <h5 className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}>
            {header}
            </h5>
            <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto'></FaPlus>
        </div>
        {expanded && selections && selections.map((selection) => <TopicSelection selection={selection}/>)}
    </div>
    };

const Selector = ({ expanded }) =>{
    const selClass = 'text-accent text-opacity-80 my-auto mr-1';
    return expanded ? (
        <FaChevronDown size='14' className='selClass'/>
    ) : (
        <FaChevronRight size='14' className='selClass'/>
    );

};

const TopicSelection = ({ selection }) => (
    <div className='dropdown-selection'>
        <BsHash size='24' className='text-gray-400'/>
        <h5 className='dropdown-selection-text'>{selection}</h5>
    </div>

);

 const ChannelBlock = () =>(
    <div className='channel-block'>
        <h5 className='channel-block-text'>Channels</h5>
    </div>
 );

export default Channels;


