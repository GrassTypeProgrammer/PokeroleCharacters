import '../styles/AttributeBox.css'
import classNames from "classnames";
import { ComponentProps } from "./Component";
import CheckboxTracker from './CheckboxTracker';


type Props = ComponentProps & {
    label: string,
    maxValue: number,
    currentValue: number,
    onValueChange?: (value: number) => void,
}

export default function AttributeBox (props: Props) {

    return <div className={classNames('AttributeBox_root', props.baseClassName, props.classModifiers)}>
        <CheckboxTracker
            label={props.label} 
            maxValue={props.maxValue} 
            currentValue={props.currentValue} 
            onValueChange={props.onValueChange}
        />
    </div>
}