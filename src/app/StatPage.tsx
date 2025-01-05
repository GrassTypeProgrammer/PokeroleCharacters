import './styles/StatPage.css'
import classNames from 'classnames'
import { ComponentProps } from './components/Component'
import AttributeBox from './components/AttributeBox'
import SkillBox, { SkillGroup, SkillData } from './components/SkillBox'

type Props = ComponentProps & {

}


export default function StatPage (props: Props) {
// TODO get the data in here and pass on the data to the components

    const skills: SkillGroup[] = [];

    const skillGroup: SkillGroup = {
    skills: [],
    }

    const skill:SkillData = {
    label: 'skill', 
    currentValue: 2,
    maxValue: 5,
    category: 'category',
    }

    skillGroup.skills.push(skill);
    skillGroup.skills.push(skill);
    skillGroup.skills.push(skill);
    skillGroup.skills.push(skill);

    skills.push(skillGroup);
    skills.push(skillGroup);
   

    return <div className={classNames('StatPage_root', props.baseClassName, props.classModifiers)}>
        <div className='StatPage_row'>

            <div className='StatPage_skillGroups'>
                <SkillBox skillGroups={skills}/>
                <SkillBox skillGroups={skills}/>
                <SkillBox skillGroups={skills}/>
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