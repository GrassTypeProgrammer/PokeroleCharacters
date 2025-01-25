import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { ComponentProps } from "./Component"
import './../styles/CheckboxTracker.css'
import classNames from "classnames";

type Props = ComponentProps & {
    label: string,
    maxValue: number,
    currentValue: number,
    onValueChange?: (value: number, customData?: unknown) => void,
}

export default function CheckboxTracker (props: Props){

    const {label} = props;
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        setCurrentValue(props.currentValue);
    }, [setCurrentValue, props.currentValue])


    function createCheckboxButtons(){
        const checkboxButtons: ReactNode[] = [];

        for (let index = 0; index < props.maxValue; index++) {
            const checkboxButton = 
            <input 
                className={classNames("roundedCheckbox", props.classModifiers)}
                type="checkbox" 
                checked={index < currentValue}
                onChange={onChange}
                key={`AttributeBox_${label}_${index}`}
            />;

            checkboxButtons.push(checkboxButton);
        }

        return checkboxButtons;
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const checked = event.target.checked;
        let newValue = currentValue;

        if(checked){
            newValue += 1;

            if(newValue > props.maxValue){
                newValue = props.maxValue;
            }
        }
        else{
            newValue -= 1;

            if(newValue < 0){
                newValue = 0;
            }
        }

        if(newValue != currentValue){
            props.onValueChange?.(newValue, props.customData);
        }

        setCurrentValue(newValue);        
    }

    return <div className={classNames('CheckboxTracker_root', props.baseClassName, props.classModifiers)}>
        <div className={classNames("CheckboxTracker_label", props.classModifiers)}>
            {props.label}
        </div>
        <div className={classNames("CheckboxTracker_checkboxButtonContainer", props.classModifiers)}>
            {createCheckboxButtons()}
        </div>
    </div>
}