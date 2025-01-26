import '../styles/AttributeBox.css'
import classNames from "classnames";
import { ComponentProps } from "./Component";
import CheckboxTracker from './CheckboxTracker';


type Props = ComponentProps & {
    label: string,
    maxValue: number,
    currentValue: number,
    onValueChange?: (value: number, customData: unknown) => void,
}

export default function AttributeBox (props: Props) {

    function onValueChange(value: number, customData: unknown){
        props.onValueChange?.(value, customData);
    }

    return <div className={classNames('AttributeBox_root', props.baseClassName, props.classModifiers)}>
        <CheckboxTracker
            label={props.label} 
            maxValue={props.maxValue} 
            currentValue={props.currentValue} 
            onValueChange={onValueChange}
            customData={props.customData}
        />
    </div>
}