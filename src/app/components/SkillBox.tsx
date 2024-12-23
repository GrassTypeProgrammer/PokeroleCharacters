import './../styles/SkillBox.css'
import classNames from "classnames";
import { ComponentProps } from "./Component";
import CheckboxTracker from "./CheckboxTracker";
import { nanoid } from "nanoid";
import { ReactNode, useEffect, useState } from 'react';

export type SkillData = {
    label: string;
    category: string;
    maxValue: number;
    currentValue: number;
}

export type SkillGroup = {
    skills: SkillData[];
}

type Props = ComponentProps & {
    skillGroups: SkillGroup[];
}

export default function SkillBox (props: Props) {
    const [skillGroups, setSkillGroups] = useState<SkillGroup[]>([]);

    useEffect(() =>{
        setSkillGroups(props.skillGroups);
    }, [setSkillGroups, props.skillGroups])

    
    function createSkillNodes(){
        const nodes: ReactNode[] = [];

        for (let index = 0; index < skillGroups.length; index++) {
            nodes.push(createSkillGroup(skillGroups[index].skills));
        }

        return nodes;
    }

    function createSkillGroup(group: SkillData[]){
        const skillNodes: ReactNode[] = [];
        const skillCategory = group.length > 0 ? group[0].category : '';

        for (let index = 0; index < group.length; index++) {
            const skill = group[index];
            skillNodes.push(<CheckboxTracker 
                classModifiers='small' {...skill} 
                key={`CheckboxTracker_${skillCategory}_${nanoid()}`} 
                />);
        }

        return <div className="SkillBox_skillGroup" key={`SkillBox_skillGroup_${skillCategory}_${nanoid()}`}>
         {skillNodes}
         </div>
    }

    function createTabs(){
        const tabs: ReactNode[] = [];

        for (let index = 0; index < skillGroups.length; index++) {
            const group = skillGroups[index];
            const skillCategory = group.skills.length > 0 ? group.skills[0].category : '';

            const node = <div className="SkillBox_tab" key={`SkillBox_tab_${skillCategory}_${nanoid()}`}>
                    {skillCategory}
                </div>

            tabs.push(node);
        }

        return tabs;
    }

    return <div className={classNames('SkillBox_root', props.baseClassName, props.classModifiers)}>
        <div className="SkillBox_skillContainer">
           {createSkillNodes()}
        </div>
        
        <div className="SkillBox_tabContainer">
            {createTabs()}
        </div>
    </div>
}