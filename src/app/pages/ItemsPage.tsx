import './../styles/pages/ItemsPage.css'
import classNames from "classnames";
import { ComponentProps } from "../components/Component";
import CheckboxLabel from '../components/CheckboxLabel';
import { loadCharacterItemsData, saveCharacterItemsData } from '../databases/CharacterDatabase';
import { useState } from 'react';

type Props = ComponentProps & {
    characterID: string;
}


export default function ItemsPage (props: Props) {
    const [items, setItems] = useState(loadCharacterItemsData(props.characterID));
    const labels: React.ReactNode[] = [];


    function onCheckboxLabelChange(value: string, checked: boolean, customData: unknown){
        const editedItems = items.slice();
        const index = typeof customData === 'number' ? customData : 0;

        if(editedItems && index < editedItems.length){
            editedItems[index] = value;
            setItems(editedItems);
            saveCharacterItemsData(props.characterID, editedItems);
        }
    }


    if(items){
        for (let index = 0; index < items.length; index++) {
            labels.push(
                <CheckboxLabel 
                baseClassName='ItemsPage_label' 
                label= {items[index]}
                id={'label_' + index} 
                key={'label_' + index} 
                customData={index}
                onSubmit={onCheckboxLabelChange}
                classModifiers='wide'
                hideCheckbox={true}
                />
            )
        }
    }

    return <div className={classNames('ItemsPage_root', props.baseClassName, props.classModifiers)}>
        {labels}
    </div>
}