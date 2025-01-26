import './styles/StatPage.css'
import classNames from 'classnames'
import { ComponentProps } from './components/Component'
import AttributeBox from './components/AttributeBox'
import SkillBox, { SkillGroup, SkillData } from './components/SkillBox'
import { CharacterSkillData, loadCharacterSkillData, saveCharacterSkillData, } from './databases/CharacterDatabase'
import { ReactNode,  useState } from 'react'
import { Attributes, Skills, SocialAttributes } from './helpers/StatsHelper'

type Props = ComponentProps & {
    id: string,
}


export default function StatPage (props: Props) {
    const [data, setData] = useState<CharacterSkillData>(loadCharacterSkillData(props.id));

    function onSkillBoxesChange(skillGroups: SkillGroup[], updatedSkillType: Skills){
        const updatedSkills: SkillData[] = data.skills;
        let breakLoop = false;

        for (let i = 0; i < skillGroups.length; i++) {
            const group = skillGroups[i];
            const updatedSkills = group.skills;

            for (let x = 0; x < updatedSkills.length; x++) {
                const skill: SkillData = updatedSkills[x];

                if(skill.type == updatedSkillType)
                {
                    updatedSkills[x] = skill;
                    breakLoop = true;
                }

                if(breakLoop) break;
            }

            if(breakLoop) break;
        }

        const updatedData: CharacterSkillData = data;
        updatedData.skills = updatedSkills;
        setData(updatedData);
        saveCharacterSkillData(updatedData);
    }

    function createSkillBoxes():ReactNode[]{
        const skillBoxes: ReactNode[] = [];

        const skills = data.skills;
        const groups: SkillGroup[] = [];
        let index = 0;


        while(index < skills.length){
            const group: SkillData[] = [];

            group.push(skills[index]);
            group.push(skills[index + 1]);
            group.push(skills[index + 2]);
            group.push(skills[index + 3]);

            groups.push({skills: group});

            index += 4;
        }

        for (let x = 0; x < groups.length; x++) {
            const group: SkillGroup[] = [];
            const key = 'skillBox_' + x;
            group.push(groups[x]);

            if(x + 1 < groups.length){
                x++;
                group.push(groups[x]);
            }

            skillBoxes.push(<SkillBox onChange={onSkillBoxesChange} key={key} skillGroups={group}/>)
        }

        return skillBoxes;
    }

    function onAttributeChange(value: number, customData: unknown){
        const attribute = customData as Attributes;
        const attributes = data.attributes;
        attributes[attribute].currentValue = value;

        const newData = data;
        newData.attributes = attributes;
        
        setData(newData);
        saveCharacterSkillData(newData);
    }

    function onSocialAttributeChange(value: number, customData: unknown){
        const socialAttribute = customData as SocialAttributes;
        const socialAttributes = data.socialAttributes;
        socialAttributes[socialAttribute].currentValue = value;

        const newData = data;
        newData.socialAttributes = socialAttributes;
        
        setData(newData);
        saveCharacterSkillData(newData);
    }

    return <div className={classNames('StatPage_root', props.baseClassName, props.classModifiers)}>
        <div className='StatPage_row'>
            <div className='StatPage_skillGroups'>
                {createSkillBoxes()}
            </div>
        </div>

        <div className='StatPage_column'>
            <div className="StatPage_attributeContainer">
                {/* TODO Make these via a function */}
                <AttributeBox onValueChange={onAttributeChange} label={"Strength"} maxValue={5} currentValue={data.attributes[Attributes.Strength].currentValue} customData={Attributes.Strength}/>
                <AttributeBox onValueChange={onAttributeChange} label={"Dexterity"} maxValue={5} currentValue={data.attributes[Attributes.Dexterity].currentValue} customData={Attributes.Dexterity}/>
                <AttributeBox onValueChange={onAttributeChange} label={"Vitality"} maxValue={5} currentValue={data.attributes[Attributes.Vitality].currentValue} customData={Attributes.Vitality}/>
                <AttributeBox onValueChange={onAttributeChange} label={"Insight"} maxValue={5} currentValue={data.attributes[Attributes.Insight].currentValue} customData={Attributes.Insight}/>
            </div>
            <div className="StatPage_attributeContainer">
                <AttributeBox onValueChange={onSocialAttributeChange} label={"Tough"} classModifiers='tough' maxValue={5} currentValue={data.socialAttributes[SocialAttributes.Tough].currentValue} customData={SocialAttributes.Tough}/>
                <AttributeBox onValueChange={onSocialAttributeChange} label={"Cool"} classModifiers='cool' maxValue={5} currentValue={data.socialAttributes[SocialAttributes.Cool].currentValue} customData={SocialAttributes.Cool}/>
                <AttributeBox onValueChange={onSocialAttributeChange} label={"Beauty"} classModifiers='beauty' maxValue={5} currentValue={data.socialAttributes[SocialAttributes.Beautify].currentValue} customData={SocialAttributes.Beautify}/>
                <AttributeBox onValueChange={onSocialAttributeChange} label={"Clever"} classModifiers='clever' maxValue={5} currentValue={data.socialAttributes[SocialAttributes.Clever].currentValue} customData={SocialAttributes.Clever}/>
            </div>
            <div className="StatPage_attributeContainer">
                <AttributeBox onValueChange={onSocialAttributeChange} label={"Cute"} classModifiers='cute' maxValue={5} currentValue={data.socialAttributes[SocialAttributes.Cute].currentValue} customData={SocialAttributes.Cute}/>
            </div>
        </div>

        <div className='StatPage_row'>
        </div>
    </div>

}