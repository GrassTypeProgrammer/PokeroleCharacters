import './../styles/SkillBox.css'
import classNames from "classnames";
import { ComponentProps } from "./Component";
import CheckboxTracker from "./CheckboxTracker";
import { nanoid } from "nanoid";
import { ReactNode, useEffect, useState } from 'react';
import { Skills } from '../helpers/StatsHelper';

export type SkillData = {
    type: Skills,
    label: string;
    category: string;
    maxValue: number;
    currentValue: number;
}

export type SkillGroup = {
    skills: SkillData[];
}

// TODO Name this better
type CustomData = {
    groupIndex: number,
    skillType: Skills,
}

type Props = ComponentProps & {
    skillGroups: SkillGroup[];
    onChange: (skillGroups: SkillGroup[], skillType: Skills, customData?: unknown) => void;
}

export default function SkillBox (props: Props) {
    const [skillGroups, setSkillGroups] = useState<SkillGroup[]>([]);

    useEffect(() =>{
        setSkillGroups(props.skillGroups);
    }, [setSkillGroups, props.skillGroups])

    
    function createSkillNodes(){
        const nodes: ReactNode[] = [];

        for (let index = 0; index < skillGroups.length; index++) {
            nodes.push(createSkillGroup(skillGroups[index].skills, index));
        }

        return nodes;
    }

    function createSkillGroup(group: SkillData[], groupIndex: number){
        const skillNodes: ReactNode[] = [];
        const skillCategory = group.length > 0 ? group[0].category : '';

        for (let index = 0; index < group.length; index++) {
            const skill = group[index];
            const customData: CustomData = {
                groupIndex,
                skillType: skill.type,
            }

            skillNodes.push(<CheckboxTracker 
                classModifiers='small' {...skill} 
                key={`CheckboxTracker_${skillCategory}_${nanoid()}`} 
                onValueChange={onValueChange}
                customData={customData}
                />);
        }

        return <div className="SkillBox_skillGroup" key={`SkillBox_skillGroup_${skillCategory}_${nanoid()}`}>
         {skillNodes}
         </div>
    }

    function onValueChange(value: number, _customData?: unknown){
        const customData = _customData as CustomData;
        const updatedSkillGroups = skillGroups;

        if(customData.groupIndex < skillGroups.length){
            const updatedGroup = updatedSkillGroups[customData.groupIndex];
            const skills = updatedGroup.skills;

            for (let index = 0; index < skills.length; index++) {
                const updatedSkill = skills[index];
                
                if(updatedSkill.type == customData.skillType){
                    updatedSkill.currentValue = value;
                    updatedGroup.skills[index] = updatedSkill;
                    updatedSkillGroups[customData.groupIndex] = updatedGroup;
                    setSkillGroups(updatedSkillGroups);
                    props.onChange(skillGroups, customData.skillType, props.customData);
                    break;
                }
            }
        }
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