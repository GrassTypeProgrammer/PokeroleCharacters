import './../styles/BadgeList.css'
import classNames from "classnames";
import { ComponentProps } from "./Component";
import { ReactNode, useEffect, useState } from "react";
import IconCheckbox from "./IconCheckbox";
import { BadgeData } from '../databases/CharacterDatabase';



type Props = ComponentProps & {
    badges: BadgeData[];
    onChange: (badges: BadgeData[]) => void;
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
                    key={badgeData.ID}
                    onChange={onBadgeChange}
                    customData={index}
                />

                badgeNodes.push(badgeNode);
            }
        }

        return badgeNodes;
    }

    function onBadgeChange(checked: boolean, customData: unknown){
        const index = typeof customData === 'number' ? customData : 0;
        const updatedBadges = badges;
        
        if(updatedBadges != undefined && index < updatedBadges.length){
            updatedBadges[index].obtained = checked;
            setBadges(updatedBadges);
            props.onChange?.(updatedBadges);
        }
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