import TopNavigation from "./TopNavigation";
import { BsPlusCircleFill } from "react-icons/bs";
const ContentContainer = () =>{
    return (
        <div className="content-container">
            <TopNavigation/>
            <div className="content-list">
                <Post
                    name='Hamo'
                    timestamp='one minute ago'
                    text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.`}
                />
                <Post name='Mujo' timestamp='five seconds ago' text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
                <Post name='Mujic' timestamp='five hours ago' text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.`}/>
            </div>
            <BottomBar/>
        </div>
    );
};


const BottomBar = () =>(
    <div className="bottom-bar">
        <PlusIcon></PlusIcon>
        <input type="text" placeholder="Enter message" className="bottom-bar-input"/>
    </div>
);

const Post = ({ name, timestamp, text }) => {
    const seed = Math.round(Math.random()*100);
    return (
       <div className={'post'}>
            <div className="avatar-wrapper">
                <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className="avatar"/>
            </div>

        <div className="post-content">
            <p className="post-owner">
                {name}
                <small className="timestamp">{timestamp}</small>
            </p>
            <p className="post-text">{text}</p>
        </div>
       </div> 
    );
};



const PlusIcon = () =>(
    <BsPlusCircleFill size='22' className="shadow-lg mx-2 text-primary"/>
);



export default ContentContainer;