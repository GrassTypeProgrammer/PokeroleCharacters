import './../styles/components/PokeLabel.css'
import classNames from "classnames"
import { ComponentProps } from "./Component"
import { useState } from 'react';

type Props = ComponentProps & {
    label: string;
    id: string;
    onSubmit: (value: string) => void;
}

export default function PokeLabel (props: Props) {
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
        setEditMode(false);
    }
    
    return <div className={classNames('PokeLabel_root', props.baseClassName, props.classModifiers)}
                onClick={onSelect}
            >
            <div className="PokeLabel_ball"/>
            {editMode ?
                <form id={`EditableTextField_${props.id}`} onSubmit={handleSubmit}>
                    <input onBlur={onLoseFocus} autoFocus className='EditableTextField_input' type='text' defaultValue={props.label} onChange={handleChange}/>
                </form>
                :
                <div className="PokeLabel_label">{props.label}</div>
            }
    </div>

}