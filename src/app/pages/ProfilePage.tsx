import './../styles/pages/ProfilePage.css'
import { ComponentProps } from '../components/Component'
import Image from "next/image"
import EditableTextField from '../components/EditableTextField'
import { ReactNode, useState } from 'react'
import BadgeList from '../components/BadgeList'
import PokeLabel from '../components/PokeLabel'
import CheckboxLabel from '../components/CheckboxLabel'
import { CharacterProfileData,  createRandomCharacterProfileData,   loadCharacterProfileData, saveCharacterProfileData } from '../databases/CharacterDatabase'

enum DataPoints{
    Name,
    Age,
    Concept,
    Nature,
    Confidence,
    Money,
    Rank,
    Hp,
    Will,
}

type Props = ComponentProps & {
    characterID: string,
    // data?: CharacterProfileData;
    onChangeData?: (data: CharacterProfileData) => void;
}

export default function StatPage (props: Props) {
    const [profileData, setCharacterProfileData] = useState<CharacterProfileData>(loadCharacterProfileData(props.characterID));

    function onSubmit(value: string, customData: unknown){
        const data = Object.assign({}, profileData);
       
        if(data){
            switch (customData) {
                case DataPoints.Age:
                    data.age = parseInt(value);
                    break;
                case DataPoints.Concept:
                    data.concept = value;
                    break;
                case DataPoints.Nature:
                    data.nature = value;
                    break;
                case DataPoints.Confidence:
                    data.confidence = parseInt(value);
                    break;
                case DataPoints.Money:
                    data.money = parseInt(value);
                    break;
                case DataPoints.Rank:
                    data.rank = value;
                    break;
                case DataPoints.Hp:
                    data.hp = parseInt(value);
                    break;
                case DataPoints.Will:
                    data.will = parseInt(value);
                    break;
                case DataPoints.Name:
                    data.name = value;
                    break;
            }

            setAndSaveProfileData(data);
        }
    }

    function setAndSaveProfileData(data: CharacterProfileData){
        saveCharacterProfileData(data);
        setCharacterProfileData(data);
    }

    function createAchievements(){
        const achievements: ReactNode[] = [];
        
        if(profileData){
            for (let index = 0; index < profileData.achievements.length; index++) {
                const element = profileData.achievements[index];
                achievements.push(
                    <CheckboxLabel 
                        label={element.label} 
                        checked={element.completed}
                        id={`ProfilePage_CheckboxLabel_${index}`} 
                        key={`ProfilePage_CheckboxLabel_${index}`} 
                        onSubmit={onSubmitCheckboxLabel}
                        customData={index}
                    />
                )
            }
        }

        return achievements;
    }

    function onSubmitCheckboxLabel(label: string, checked: boolean, customData?: unknown){
        const data = Object.assign({}, profileData);
        const achievements = data.achievements;

        if(typeof customData === 'number'){
            const index: number = customData;
            achievements[index].label = label;
            achievements[customData].completed = checked;
            data.achievements = achievements;
        }
        
        setAndSaveProfileData(data);
    }

    return <div className='ProfilePage_root'>
        <div className='ProfilePage_top'>
            <div className='ProfilePage_column gap width-medium'>
                <div className='ProfilePage_row'>
                    <EditableTextField 
                        baseClassName='ProfilePage_editableTextField flex'
                        label='Age:'
                        id='Age' 
                        value={profileData.age.toString()} 
                        onSubmit={onSubmit}
                        customData={DataPoints.Age}
                    />
                     <EditableTextField 
                        baseClassName='ProfilePage_editableTextField flex'
                        label='Rank:'
                        id='Rank' 
                        value={profileData.rank} 
                        onSubmit={onSubmit}
                        customData={DataPoints.Rank}
                    />
                </div>
                 
                <div className='ProfilePage_row'>
                    <EditableTextField 
                        baseClassName='ProfilePage_editableTextField flex'
                        label='Nature:'
                        id='Nature' 
                        value={profileData.nature} 
                        onSubmit={onSubmit}
                        customData={DataPoints.Nature}
                    />
                    <EditableTextField 
                        baseClassName='ProfilePage_editableTextField flex'
                        label='Confidence:'
                        id='Confidence' 
                        value={profileData.confidence.toString()} 
                        onSubmit={onSubmit}
                        customData={DataPoints.Confidence}
                    />
                </div>

                <EditableTextField 
                    baseClassName='ProfilePage_editableTextField'
                    label='Money:'
                    id='Money' 
                    value={profileData.money.toString()} 
                    onSubmit={onSubmit}
                    customData={DataPoints.Money}
                />

                <EditableTextField 
                    baseClassName='ProfilePage_editableTextField'
                    label='Concept:'
                    id='Concept' 
                    value={profileData.concept} 
                    onSubmit={onSubmit}
                    customData={DataPoints.Concept}
                />

                <div className='ProfilePage_row'>
                    <EditableTextField 
                        baseClassName='ProfilePage_editableTextField flex'
                        label='HP:'
                        id='HP' 
                        value={profileData.hp.toString()} 
                        onSubmit={onSubmit}
                        customData={DataPoints.Hp}
                    />
                     <EditableTextField 
                        baseClassName='ProfilePage_editableTextField flex'
                        label='Will:'
                        id='Will' 
                        value={profileData.will.toString()} 
                        onSubmit={onSubmit}
                        customData={DataPoints.Will}
                    />
                </div>
            </div>

            <div className='ProfilePage_column gap'>
                <Image
                    className='ProfilePage_image'
                    src={'/PlaceholderCharacter.png'}
                    alt={'Profile Image'}
                    width={200}
                    height={200}
                    sizes='100vw'
                    priority
                /> 

                <EditableTextField 
                    baseClassName='ProfilePage_editableTextField'
                    classModifiers='center small'
                    id='CharacterName' 
                    value={profileData.name} 
                    onSubmit={onSubmit}
                    customData={DataPoints.Name}
                />
            </div>
        </div>

        <div className='ProfilePage_bottom'>
            <div className="ProfilePage_row gap">
                <div className="ProfilePage_column gap">
                    <PokeLabel id='PokeLabel0' label='Pikachu' onSubmit={()=>{console.log('TODO: create this submit function')}}/>
                    <PokeLabel id='PokeLabel1' label='Pikachu' onSubmit={()=>{console.log('TODO: create this submit function')}}/>
                    <PokeLabel id='PokeLabel2' label='Pikachu' onSubmit={()=>{console.log('TODO: create this submit function')}}/>
                    <PokeLabel id='PokeLabel3' label='Pikachu' onSubmit={()=>{console.log('TODO: create this submit function')}}/>
                    <PokeLabel id='PokeLabel4' label='Pikachu' onSubmit={()=>{console.log('TODO: create this submit function')}}/>
                    <PokeLabel id='PokeLabel5' label='Pikachu' onSubmit={()=>{console.log('TODO: create this submit function')}}/>
                </div>
                <div className="ProfilePage_column gap">
                    <div>Achievements</div>
                    {createAchievements()}
                </div>
            </div>

            <BadgeList badges={[{ID: 0, name: '', image: '/volcanoBadge.png'},{ID: 0, name: '', image: '/volcanoBadge.png'},{ID: 0, name: '', image: '/volcanoBadge.png'},{ID: 0, name: '', image: '/volcanoBadge.png'},{ID: 0, name: '', image: '/volcanoBadge.png'},{ID: 0, name: '', image: '/volcanoBadge.png'},{ID: 0, name: '', image: '/volcanoBadge.png'},{ID: 0, name: '', image: '/volcanoBadge.png'}, ]} />
        </div>
    </div>
}