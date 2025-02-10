import classNames from 'classnames'
import Image from "next/image"
import { ComponentProps } from './Component'
import './../styles/HeaderBar.css'

type Props = ComponentProps & {
    isLeftSide?: boolean,
}

export default function HeaderBar(props: Props){

    return <div className={classNames("HeaderBar_root", props.baseClassName, props.classModifiers)} >
        <Image
            className={'HeaderBar_background'}
            src={`dexDecorations/${props.isLeftSide? 'HeaderBar' : 'RightPageTopBorder'}.svg`}
            alt={'The header of the pokedex.'}
            width={0}
            height={0}
            sizes='100vw'
        />
    </div>
}