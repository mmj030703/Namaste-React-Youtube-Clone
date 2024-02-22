import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

function MainContainer() {
    const isSideBarOpen = useSelector(store => store.toggleSidebar.isSideBarOpen);

    return (
        <div className="relative">
            <div className={`${isSideBarOpen ? 'w-[78.7vw]' : 'w-[91vw]'} relative ${isSideBarOpen ? 'left-[20vw]' : 'left-[8vw]'} top-[60px] z-10`}>
                <ButtonList />
                <VideoContainer />
            </div>
        </div>
    )
}

export default MainContainer;