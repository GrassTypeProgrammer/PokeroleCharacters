import classNames from 'classnames'
import './../styles/HeaderBar.css'
import { ComponentProps } from './Component'

export default function HeaderBar(props: ComponentProps){

    return <div className={classNames("HeaderBar_root", props.baseClassName, props.classModifiers)} >


    </div>
}