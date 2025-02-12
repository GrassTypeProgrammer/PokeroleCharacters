import { ComponentProps } from "./Component"
import Image from "next/image"
import './../styles/components/Icon.css'
import classNames from "classnames";

type Props = ComponentProps & {
    src: string;
    alt: string;
}

export default function Icon(props: Props){
    return <Image
        className={classNames('Icon_root', props.baseClassName, props.classModifiers)}
        src={props.src}
        alt={props.alt}
        width={0}
        height={0}
        sizes='100vw'
    />
}