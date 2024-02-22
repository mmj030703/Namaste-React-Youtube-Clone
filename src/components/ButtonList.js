import { useState } from "react";
import Button from "./Button";

let idCounter = 0;

const ButtonList = () => {
    const [buttonList, setButtonList] = useState(['All', 'Bhajan', 'Jainism', 'Music', 'Cricket', 'Football', 'Business', 'News', 'Travel', 'Cooking', 'Farming', 'Agriculture'])
    return (
        <div className="flex gap-x-[13px]">
            {buttonList.map(button => <Button key={idCounter++} name={button} />)}
        </div>
    );
};

export default ButtonList;