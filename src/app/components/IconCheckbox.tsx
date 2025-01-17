import classNames from "classnames";
import { ComponentProps } from "./Component";
import { Key, useEffect, useState } from "react";
import Image from "next/image"
import './../styles/IconCheckbox.css'


type Props = ComponentProps & {
    icon: string;
    alt: string;
    defaultChecked?: boolean;
    key?: Key | null | undefined;
    onChange?: (checked: boolean, customData: unknown) => void;
}

export default function IconCheckbox(props: Props){
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(props.defaultChecked ?? false);
    }, [setChecked, props.defaultChecked])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onSelect(event: React.MouseEvent<HTMLInputElement>){
        setChecked(!checked);
        props.onChange?.(!checked, props.customData);
    }

    return <div className={classNames("IconCheckbox_root", props.classModifiers)} onClick={onSelect}>
           <Image
                className={classNames('IconCheckbox_image', {checked})}
                src={props.icon}
                alt={props.alt}
                width={0}
                height={0}
                sizes='100vw'
                priority
            />
        </div>
}
