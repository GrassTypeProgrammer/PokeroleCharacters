import './../styles/components/PageStepper.css'
import classNames from 'classnames'
import { ComponentProps } from "./Component"
import { ReactNode, useState } from 'react';


type Props = ComponentProps & {
    pages: number;
    onPageChange: (currentPage: number) => void;
}

export default function PageStepper (props: Props){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState(0);
    const dots: ReactNode[] = [];

    for (let index = 0; index < props.pages; index++) {
        dots.push(
            <div className='PageStepper_dotOuter' key={`PageStepper_dot_${index}`}>
                <div className={classNames('PageStepper_dotInner', {'current': currentPage == index})}/>
            </div>
            )
    }

    function onSelectLeft(){
        let current = currentPage - 1;

        if(current < 0){
            current = props.pages -1;
        }

        setCurrentPage(current);
        props.onPageChange(current);
    }

    function onSelectRight(){
        let current = currentPage + 1;

        if(current >= props.pages){
            current = 0;
        }

        setCurrentPage(current);
        props.onPageChange(current);
    }

    return <div className={classNames('PageStepper_root', props.baseClassName, props.classModifiers)}>
            <button className='PageStepper_arrow' onClick={onSelectLeft}>left</button>
            {dots}
            <button className='PageStepper_arrow right' onClick={onSelectRight}>right</button>
        </div>
}