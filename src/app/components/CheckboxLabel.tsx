import './../styles/components/CheckboxLabel.css'
import classNames from "classnames";
import { ComponentProps } from "./Component"
import { useState } from "react";


type Props = ComponentProps & {
    label: string;
    id: string;
    onSubmit: (value: string) => void;
    hideCheckbox?: boolean;
} 

export default function CheckboxLabel(props: Props){
    const [editMode, setEditMode] = useState(false);
    const [newValue, setNewValue] = useState('');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onSelect(event: React.MouseEvent<HTMLInputElement>){
        if(!editMode){
            setEditMode(true);
        }
    }

    // TODO: What type does this need?
    function handleSubmit(event){
        event.preventDefault();
        props.onSubmit?.(newValue);
        setEditMode(false);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setNewValue(event.currentTarget.value)
    }

    function onLoseFocus(){
        // setEditMode(false);
    }
    
    return <div className={classNames('CheckboxLabel_root', props.baseClassName, props.classModifiers)}>
        {/* TODO This needs a form */}
            {!props.hideCheckbox &&
                <input type='checkbox' className='CheckboxLabel_checkbox'/>
            }
            
            {editMode ?
                <form id={`CheckboxLabel_${props.id}`} className={'CheckboxLabel_form'} onSubmit={handleSubmit}>
                    <input onBlur={onLoseFocus} autoFocus className='CheckboxLabel_input' type='text' defaultValue={props.label} onChange={handleChange}/>
                </form>
                :
                <div onClick={onSelect} className="CheckboxLabel_label">{props.label}</div>
            }
        
    </div>
}