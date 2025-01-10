import './../styles/pages/ItemsPage.css'
import classNames from "classnames";
import { ComponentProps } from "../components/Component";
import CheckboxLabel from '../components/CheckboxLabel';

type Props = ComponentProps & {

}

const numberOfRows = 18;

export default function ItemsPage (props: Props) {

    const labels: React.ReactNode[] = [];

    for (let index = 0; index < numberOfRows; index++) {
        labels.push(
            <CheckboxLabel 
                baseClassName='ItemsPage_label' 
                label='' 
                id={'label_' + index} 
                key={'label_' + index} 
                onSubmit={() => {console.log('TODO: make this submit function')}}
                classModifiers='wide'
                hideCheckbox={true}
            />
        )
    }

    return <div className={classNames('ItemsPage_root', props.baseClassName, props.classModifiers)}>
        {labels}
    </div>
}