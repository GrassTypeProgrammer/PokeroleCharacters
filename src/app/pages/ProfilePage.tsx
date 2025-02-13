import './../styles/pages/ProfilePage.css'
import { ComponentProps } from '../components/Component'
import Image from "next/image"
import EditableTextField from '../components/EditableTextField'
import { ReactNode, useReducer } from 'react'
import BadgeList from '../components/BadgeList'
import PokeLabel from '../components/PokeLabel'
import CheckboxLabel from '../components/CheckboxLabel'
import { BadgeData, CharacterProfileData, loadCharacterProfileData, saveCharacterProfileData } from '../databases/CharacterDatabase'
import Divider, { DividerType } from '../components/Divider'

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
    Achievements,
    Pokelabel,
    Badges,
}

type Props = ComponentProps & {
    characterID: string,
    // data?: CharacterProfileData;
    onChangeData?: (data: CharacterProfileData) => void;
}

type Achievement = {
    label: string, 
    checked: boolean,
    index: number,
}

type Action = {
    dataPoint: DataPoints,
    value?: string,
    achievement?: Achievement,
    index?: number,
    badgeData?: BadgeData[],
}


export default function StatPage (props: Props) {
    const [profileData, dispatchReducer] = useReducer(reducer, loadCharacterProfileData(props.characterID));



    function onSubmit(value: string, customData: unknown){
        dispatchReducer({dataPoint: customData as DataPoints, value});
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

    function createPokelables(){
        const labels: ReactNode[] = [];

        if(profileData && profileData.currentPokemon){
            for (let index = 0; index < profileData.currentPokemon.length; index++) {
                const element = profileData.currentPokemon[index];
                labels.push(
                    <PokeLabel
                        // TODO give better id and key 
                        id={'PokeLabel_' + index} 
                        key={'PokeLabel_' + index} 
                        label={element} 
                        customData={index}
                        onSubmit={onSubmitPokeLabel}
                    />
               )
            }
        }

        return labels;
    }

    function onSubmitCheckboxLabel(label: string, checked: boolean, customData?: unknown){
        const index = typeof customData === 'number' ? customData : 0;

        dispatchReducer({
            dataPoint: DataPoints.Achievements, 
            achievement:{index, label, checked},
        });
    }

    function onSubmitPokeLabel(label: string, customData?: unknown){
        const index = typeof customData === 'number' ? customData : 0;

        dispatchReducer({
            dataPoint: DataPoints.Pokelabel, 
            value: label,
            index,
        });
    }

    function onBadgesChange(badges: BadgeData[]){
        dispatchReducer({dataPoint: DataPoints.Badges, badgeData: badges});
    }

    return <div className='ProfilePage_root'>
        <div className='ProfilePage_top'>
            <div className='ProfilePage_column gap'>
                <div className='ProfilePage_row gap'>
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
                 
                <div className='ProfilePage_row gap'>
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

                <div className='ProfilePage_row gap'>
                    <EditableTextField 
                        baseClassName='ProfilePage_editableTextField'
                        label='Concept:'
                        id='Concept' 
                        value={profileData.concept} 
                        onSubmit={onSubmit}
                        customData={DataPoints.Concept}
                    />
                    <EditableTextField 
                        baseClassName='ProfilePage_editableTextField'
                        label='Money:'
                        id='Money' 
                        value={profileData.money.toString()} 
                        onSubmit={onSubmit}
                        customData={DataPoints.Money}
                    />
                </div>

                <div className='ProfilePage_row gap'>
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

        <Divider 
            baseClassName='ProfilePage_hDivider' 
            type={DividerType.Bend}
            classModifiers='noDefaultSize'    
        />

        <div className='ProfilePage_bottom'>
            <div className="ProfilePage_row space-between gap">
                <div className="ProfilePage_column gap-small justify-end ">
                    {createPokelables()}
                </div>

                <Divider 
                    baseClassName='ProfilePage_vDivider' 
                    type={DividerType.Straight}
                    classModifiers='noDefaultSize'    
                />
                
                <div className="ProfilePage_column gap-small justify-end">
                    <div className='ProfilePage_subtitle'>Achievements</div>
                    {createAchievements()}
                </div>
            </div>

            {/* <BadgeList badges={profileData.badges} onChange={onBadgesChange} /> */}
        </div>
    </div>
}


function reducer(state: CharacterProfileData, action: Action){
    const data = Object.assign({}, state);
    const value = action.value ?? '';
       
    if(data){
        switch (action.dataPoint) {
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
            case DataPoints.Achievements:
                const achievement = action.achievement

                if(achievement){
                    const achievements = data.achievements;
                    achievements[achievement.index].label = achievement.label;
                    achievements[achievement.index].completed = achievement.checked;
                    data.achievements = achievements;
                }
                break;
            case DataPoints.Pokelabel:
                const index = action.index;
                const currentPokemon = data.currentPokemon;

                if(index != undefined && currentPokemon != undefined && index < currentPokemon.length){
                    currentPokemon[index] = value;
                }

                data.currentPokemon = currentPokemon;
                break;
            case DataPoints.Badges:
                const badges = action.badgeData;

                if(badges != undefined){
                    data.badges = badges;
                }

                break;
        }
        
        saveCharacterProfileData(data);
    }

    return data;
}