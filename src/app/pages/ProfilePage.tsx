import './../styles/pages/ProfilePage.css'
import { ComponentProps } from '../components/Component'
import Image from "next/image"
import EditableTextField from '../components/EditableTextField'
import { useEffect, useState } from 'react'
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
    
    // const [name, setName] = useState(profileData? profileData.name : '');
    // const [age, setAge] = useState(profileData? profileData.age?.toString() : '');
    // const [concept, setConcept] = useState(profileData? profileData.concept : '');
    // const [nature, setNature] = useState(profileData? profileData.nature : '');
    // const [confidence, setConfidence] = useState(profileData? profileData.confidence?.toString() : '');
    // const [money, setMoney] = useState(profileData? profileData.money?.toString() : '');
    // const [rank, setRank] = useState(profileData? profileData.rank : '');
    // const [hp, setHp] = useState(profileData? profileData.hp?.toString() : '');
    // const [will, setWill] = useState(profileData? profileData.will?.toString() : '');

    // useEffect(() => {
    //     const data = loadCharacterProfileData(props.characterID);
    //     setCharacterProfileData(data);

    //     // useState(data.name );
    //     // const [age, setAge] = useState(profileData? profileData.age?.toString() : '');
    //     // const [concept, setConcept] = useState(profileData? profileData.concept : '');
    //     // const [nature, setNature] = useState(profileData? profileData.nature : '');
    //     // const [confidence, setConfidence] = useState(profileData? profileData.confidence?.toString() : '');
    //     // const [money, setMoney] = useState(profileData? profileData.money?.toString() : '');
    //     // const [rank, setRank] = useState(profileData? profileData.rank : '');
    //     // const [hp, setHp] = useState(profileData? profileData.hp?.toString() : '');
    //     // const [will, setWill] = useState(profileData? profileData.will?.toString() : '');
    // }, [props.characterID]);



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

            saveCharacterProfileData(data);
            setCharacterProfileData(data);
            // const data: CharacterProfileData = {
            //     id: profileData.id,
            //     name: (customData == DataPoints.Name) ? value : name,
            //     age: (customData == DataPoints.Age) ? parseInt(value) : parseInt(value),
            //     concept: (customData == DataPoints.Concept) ? value : concept,
            //     nature: (customData == DataPoints.Nature) ? value : nature,
            //     confidence: (customData == DataPoints.Confidence) ? parseInt(value) : parseInt(confidence),
            //     money: (customData == DataPoints.Money) ? parseInt(value) : parseInt(money),
            //     rank: (customData == DataPoints.Rank) ? value : rank,
            //     hp: (customData == DataPoints.Hp) ? parseInt(value) : parseInt(hp),
            //     will: (customData == DataPoints.Will) ? parseInt(value) : parseInt(will),
            //     badges: [],
            //     achievements: [],
        }
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
                    <CheckboxLabel label='test' id='test' onSubmit={() => {console.log('TODO: make this submit function')}}/>
                    <CheckboxLabel label='test' id='test' onSubmit={() => {console.log('TODO: make this submit function')}}/>
                    <CheckboxLabel label='test' id='test' onSubmit={() => {console.log('TODO: make this submit function')}}/>
                    <CheckboxLabel label='test' id='test' onSubmit={() => {console.log('TODO: make this submit function')}}/>
                </div>
            </div>

            <BadgeList badges={[{ID: 0, name: '', image: '/volcanoBadge.png'},{ID: 0, name: '', image: '/volcanoBadge.png'},{ID: 0, name: '', image: '/volcanoBadge.png'},{ID: 0, name: '', image: '/volcanoBadge.png'},{ID: 0, name: '', image: '/volcanoBadge.png'},{ID: 0, name: '', image: '/volcanoBadge.png'},{ID: 0, name: '', image: '/volcanoBadge.png'},{ID: 0, name: '', image: '/volcanoBadge.png'}, ]} />
        </div>
    </div>
}