import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

function MainContainer() {
    const isSideBarOpen = useSelector(store => store.toggleSidebar.isSideBarOpen);

    return (
        <div className="w-full flex justify-center relative overflow-hidden">
            <div className={`w-full relative top-[60px] z-10 pb-20 px-4 sm:px-10`}>
                <ButtonList />
                <VideoContainer />
            </div>
        </div>
    )
}

export default MainContainer;