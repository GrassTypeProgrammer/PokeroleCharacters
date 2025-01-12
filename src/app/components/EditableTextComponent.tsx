import classNames from "classnames";
import { useState } from "react";
import { ComponentProps } from "./Component";

type Props = ComponentProps &{
    label: string;
    children?: React.ReactNode;
} 


export default function EditableTextComponent (props: Props) {
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
                {props.children}
            </div>
}