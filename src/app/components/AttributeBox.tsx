import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import './../styles/AttributeBox.css'
import classNames from "classnames";
import { ComponentProps } from "./Component";


type Props = ComponentProps & {
    label: string,
    maxValue: number,
    currentValue: number,
    onValueChange?: (value: number) => void,
}

export default function AttributeBox (props: Props) {
    const {label} = props;
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        setCurrentValue(props.currentValue);
    }, [setCurrentValue, props.currentValue])


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
            props.onValueChange?.(newValue);
        }

        setCurrentValue(newValue);        
    }


    function createCheckboxButtons(){
        const checkboxButtons: ReactNode[] = [];

        for (let index = 0; index < props.maxValue; index++) {
            const checkboxButton = 
            <input 
                className="roundedCheckbox"
                type="checkbox" 
                checked={index < currentValue}
                onChange={onChange}
                key={`AttributeBox_${label}_${index}`}
            />;

            checkboxButtons.push(checkboxButton);
        }

        return checkboxButtons;
    }

    return <div className={classNames('AttributeBox_root', props.baseClassName, props.classModifiers)}>
        <div className="AttributeBox_label">
            {label}
        </div>
        <div className="AttributeBox_checkboxButtonContainer">
            {createCheckboxButtons()}
        </div>
    </div>
   
}