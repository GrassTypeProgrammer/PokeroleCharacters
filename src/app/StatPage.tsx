import './styles/StatPage.css'
import classNames from 'classnames'
import { ComponentProps } from './components/Component'
import AttributeBox from './components/AttributeBox'
import SkillBox, { SkillGroup, SkillData } from './components/SkillBox'
import { CharacterSkillData, loadCharacterSkillData, saveCharacterSkillData, } from './databases/CharacterDatabase'
import { ReactNode,  useState } from 'react'
import { Skills } from './helpers/StatsHelper'

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


    return <div className={classNames('StatPage_root', props.baseClassName, props.classModifiers)}>
        <div className='StatPage_row'>
            <div className='StatPage_skillGroups'>
                {createSkillBoxes()}
            </div>
        </div>


        <div className='StatPage_column'>
            <div className="StatPage_attributeContainer">
                <AttributeBox label={"Strength"} maxValue={5} currentValue={3} />
                <AttributeBox label={"Dexterity"} maxValue={5} currentValue={3} />
                <AttributeBox label={"Vitality"} maxValue={5} currentValue={3} />
                <AttributeBox label={"Insight"} maxValue={5} currentValue={3} />
            </div>
            <div className="StatPage_attributeContainer">
                <AttributeBox label={"Tough"} classModifiers='tough' maxValue={5} currentValue={3} />
                <AttributeBox label={"Cool"} classModifiers='cool' maxValue={5} currentValue={3} />
                <AttributeBox label={"Beauty"} classModifiers='beauty' maxValue={5} currentValue={3} />
                <AttributeBox label={"Clever"} classModifiers='clever' maxValue={5} currentValue={3} />
            </div>
            <div className="StatPage_attributeContainer">
                <AttributeBox label={"Cute"} classModifiers='cute' maxValue={5} currentValue={3} />
            </div>
        </div>

        <div className='StatPage_row'>
        </div>
    </div>

}