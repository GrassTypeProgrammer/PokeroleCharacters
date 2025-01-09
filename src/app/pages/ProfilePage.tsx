import './../styles/pages/ProfilePage.css'
import { ComponentProps } from '../components/Component'
import Image from "next/image"
import EditableTextField from '../components/EditableTextField'
import { useState } from 'react'
import BadgeList from '../components/BadgeList'
import PokeLabel from '../components/PokeLabel'
import CheckboxLabel from '../components/CheckboxLabel'

type Props = ComponentProps & {

}

export default function StatPage (props: Props) {
    const [name, setName] = useState('Name');
    const [age, setAge] = useState('17');
    const [concept, setConcept] = useState('test');
    const [nature, setNature] = useState('test');
    const [confidence, setConfidence] = useState('Name');
    const [money, setMoney] = useState('0');
    const [rank, setRank] = useState('');
    const [hp, setHP] = useState('0');
    const [will, setWill] = useState('0');

    return <div className='ProfilePage_root'>
        <div className='ProfilePage_top'>
            <div className='ProfilePage_column gap width-medium'>
                <div className='ProfilePage_row'>
                    <EditableTextField 
                        baseClassName='ProfilePage_editableTextField flex'
                        label='Age:'
                        id='Age' 
                        value={age} 
                        onSubmit={(value:string)=>{ setAge(value)}}
                    />
                     <EditableTextField 
                        baseClassName='ProfilePage_editableTextField flex'
                        label='Rank:'
                        id='Rank' 
                        value={rank} 
                        onSubmit={(value:string)=>{ setRank(value)}}
                    />
                </div>
                 
                <div className='ProfilePage_row'>
                    <EditableTextField 
                        baseClassName='ProfilePage_editableTextField flex'
                        label='Nature:'
                        id='Nature' 
                        value={nature} 
                        onSubmit={(value:string)=>{ setNature(value)}}
                    />
                    <EditableTextField 
                        baseClassName='ProfilePage_editableTextField flex'
                        label='Confidence:'
                        id='Confidence' 
                        value={confidence} 
                        onSubmit={(value:string)=>{ setConfidence(value)}}
                    />
                </div>

                <EditableTextField 
                    baseClassName='ProfilePage_editableTextField'
                    label='Money:'
                    id='Money' 
                    value={money} 
                    onSubmit={(value:string)=>{ setMoney(value)}}
                />

                <EditableTextField 
                    baseClassName='ProfilePage_editableTextField'
                    label='Concept:'
                    id='Concept' 
                    value={concept} 
                    onSubmit={(value:string)=>{ setConcept(value)}}
                />

                <div className='ProfilePage_row'>
                    <EditableTextField 
                        baseClassName='ProfilePage_editableTextField flex'
                        label='HP:'
                        id='HP' 
                        value={hp} 
                        onSubmit={(value:string)=>{ setHP(value)}}
                    />
                     <EditableTextField 
                        baseClassName='ProfilePage_editableTextField flex'
                        label='Will:'
                        id='Will' 
                        value={will} 
                        onSubmit={(value:string)=>{ setWill(value)}}
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
                    value={name} 
                    onSubmit={(value:string)=>{ setName(value)}}
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