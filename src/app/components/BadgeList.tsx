import './../styles/BadgeList.css'
import classNames from "classnames";
import { ComponentProps } from "./Component";
import { ReactNode, useEffect, useState } from "react";
import { BadgeData } from "../helpers/BadgeHelper";
import IconCheckbox from "./IconCheckbox";
import { nanoid } from "nanoid";



type Props = ComponentProps & {
    badges: BadgeData[];
}

export default function BadgeList(props: Props){
    const [badges, setBadges] = useState<BadgeData[]>([]);

    useEffect(() =>{
        setBadges(props.badges);
    },[setBadges, props.badges])

    function createBadges(){
        const badgeNodes: ReactNode[] = [];

        for (let index = 0; index < badges.length; index++) {
            const badgeData: BadgeData = badges[index];
        
            if(badgeData.image)
            {
                const badgeNode = <IconCheckbox 
                    defaultChecked={badgeData.obtained} 
                    icon={badgeData.image} 
                    alt={badgeData.name}  
                    key={`badge_${badgeData.name}_${nanoid()}`}
                />
                badgeNodes.push(badgeNode);
            }
        }

        return badgeNodes;
    }

    return <div className={classNames('BadgeList_root', props.baseClassName, props.classModifiers)}>
        <div className="BadgeList_labelContainer">
            <div className="BadgeList_label">Badges</div>
            <div className="BadgeList_decorationDot"/>
            <div className="BadgeList_decorationDot bottom"/>
        </div>

        <div className="BadgeList_badgeContainer">
            {createBadges()}
        </div>
    </div>
}