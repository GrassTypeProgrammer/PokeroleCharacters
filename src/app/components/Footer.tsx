import { ComponentProps } from "./Component";
import Image from "next/image"
import './../styles/components/Footer.css'


type Props = ComponentProps & {
    isLeftSide?: boolean;
} 

export default function Footer(props: Props){
  
    return <div className="Footer_root">
        <Image
            className={'Footer_background'}
            src={`dexDecorations/${props.isLeftSide? 'Footer': 'FooterRightSide'}.svg`}
            alt={'The header of the pokedex.'}
            width={0}
            height={0}
            sizes='100vw'
        />
        <div className="Footer_children">
            {props.children}
        </div>
    </div>
}