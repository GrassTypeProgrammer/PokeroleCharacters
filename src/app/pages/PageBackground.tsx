import './../styles/pages/PageBackground.css'
import { ComponentProps } from '../components/Component'
import Image from "next/image"
import classNames from 'classnames';

type Props = ComponentProps & {
    src: string;
}

export default function PageBackground (props: Props) {
    return <div className={classNames('PageBackground_root', props.baseClassName, props.classModifiers)}>
        <Image
            className='PageBackground_image'
            src={props.src}
            alt={'Profile Image'}
            width={0}
            height={0}
            sizes='100vw'
            priority
        /> 
    </div>
}