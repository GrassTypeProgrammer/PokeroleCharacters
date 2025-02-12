import './../styles/components/CheckboxLabel.css'
import classNames from "classnames";
import { ComponentProps } from "./Component"
import { useState } from "react";


type Props = ComponentProps & {
    label: string;
    id: string;
    checked?: boolean;
    onSubmit: (value: string, checked: boolean, customData?: unknown) => void;
    hideCheckbox?: boolean;
} 

export default function CheckboxLabel(props: Props){
    const [editMode, setEditMode] = useState(false);
    const [newLabel, setNewLabel] = useState(props.label);
    const [newChecked, setNewChecked] = useState(props.checked ?? false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onSelect(event: React.MouseEvent<HTMLInputElement>){
        if(!editMode){
            setEditMode(true);
        }
    }

    function handleSubmit(event: React.FormEvent){
        event.preventDefault();
        onSubmit(newLabel, newChecked);
        setEditMode(false);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setNewLabel(event.currentTarget.value)
    }

    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>){
        setNewChecked(event.currentTarget.checked)
        onSubmit(newLabel, event.currentTarget.checked)
    }

    function onSubmit(label: string, checked: boolean){
        props.onSubmit?.(label, checked, props.customData);
        setEditMode(false);
    }

    function onLoseFocus(event: React.ChangeEvent<HTMLInputElement>){
        handleChange(event);
        setEditMode(false);
        onSubmit(event.target.value, newChecked);
    }
    
    return <div className={classNames('CheckboxLabel_root', props.baseClassName, props.classModifiers)}>
            
            {!editMode ?
                <form id={`CheckboxLabel_${props.id}`} className={'CheckboxLabel_form'} onSubmit={handleSubmit}>
                    <input onBlur={onLoseFocus} autoFocus className='CheckboxLabel_inputLabel' type='text' defaultValue={props.label} onChange={handleChange}/>
                </form>
                :
                <div onClick={onSelect} className="CheckboxLabel_inputLabel">{props.label}</div>
            }
        
            {!props.hideCheckbox &&
            <label className='CheckboxLabel_container'>
                <input type='checkbox'  defaultChecked={props.checked} onChange={handleCheckboxChange}/>
                <span className='CheckboxLabel_checkbox'/>
            </label>
            }
    </div>
}