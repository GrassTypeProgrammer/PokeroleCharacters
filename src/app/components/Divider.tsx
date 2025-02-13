import { ComponentProps } from "./Component";
import './../styles/components/Divider.css'
import { useState } from "react";
import Icon from "./Icon";

export enum DividerType {
    Straight, 
    Bend,
    PartialBend,
}

type Props = ComponentProps & {
    type: DividerType;
};

export default function Divider(props: Props){
    const [icon, setIcon] = useState<string>(getIcon(props.type))

    function getIcon(type: DividerType){
        let icon = '';

        switch(type){
            case DividerType.Straight:
                icon = 'dexDecorations/DividerLineStraight.svg';
                break;
            case DividerType.Bend:
                icon = 'dexDecorations/DividerLineBend.svg';
                break;
            case DividerType.PartialBend:
                icon = 'dexDecorations/DividerLinePartialBend.svg';
                break;
        }

        return icon;
    }
   
    return <Icon 
            baseClassName={props.baseClassName}
            classModifiers={props.classModifiers}
            src={icon}
            alt='Divider Line'
        />
}