import { SkillData } from "../components/SkillBox";
import { getSkillGroupName, getSkillName, SkillGroups, SkillGroupsLUT, Skills } from "../helpers/StatsHelper";

// characters, id, 
export type CharacterData = 
{
    id: string,
    items: string[],
   
}

export type AttributeData = {
    label: string;
    maxValue: number;
    currentValue: number;
}

export type CharacterSkillData = {
    id: string,
    skills: SkillData[];
    attributes: AttributeData[];
    socialAttributes: AttributeData[];
}

export type CharacterProfileData = {
    id: string,
    name: string,
    hp: number,
    will: number,
    age: number,
    rank: string,
    nature: string,
    confidence: number,
    money: number,
    concept: string,
    achievements: AchievementData[],
    badges: BadgeData[],
    currentPokemon: string[],
}

export type AchievementData = {
    label: string;
    completed: boolean;
}

export type BadgeData = {
    ID: string;
    name: string,
    image?: string,
    obtained?: boolean,
}



export function createEmptyCharacterProfileData(){
    const data: CharacterProfileData = {
        id: 'test',
        name: '',
        hp: 0,
        will: 0,
        age: 0,
        rank: '',
        nature: '',
        confidence: 0,
        money: 0,
        concept: '',
        achievements: [{label:'', completed: false}, {label:'', completed: false}, {label:'', completed: false}, {label:'', completed: false}],
        badges: generateBadgeData(),
        currentPokemon: ['','','','','','',],
    }

    return data;
}

export function createRandomCharacterProfileData(){
    const testCharacter: CharacterProfileData = {
        id: 'test',
        name: 'Flint',
        hp: 3,
        will: 4,
        age: 17,
        rank: 'beginner',
        nature: 'brave',
        confidence: 9,
        money: 2000,
        concept: 'gardener',
        achievements: [{label:'', completed: false}, {label:'', completed: false}, {label:'', completed: false}, {label:'', completed: false}],
        badges: generateBadgeData(),
        currentPokemon: ['','','','','','',],
    }

    return testCharacter;
}

export function generateBadgeData(){
    const badges: BadgeData[] = [];

    for (let index = 0; index < 8; index++) {
        badges.push({
            ID: `badge_${index}`,
            name: `badge_${index}`,
            image: '/volcanoBadge.png',
            obtained: false,
        })
    }

    return badges;
}

export function saveCharacterData(data: CharacterData){
    const characterString = JSON.stringify(data);
    localStorage.setItem(data.id, characterString);
}

export function loadCharacterData(id: string){
    const data = localStorage.getItem(id);

    if(data){
        const character = JSON.parse(data);
        return character;
    }
    else{
        return undefined;
    }
}


// Profile data
export function saveCharacterProfileData(data: CharacterProfileData){
    const characterString = JSON.stringify(data);
    localStorage.setItem(data.id, characterString);
}

export function loadCharacterProfileData(id: string){
    const data = localStorage.getItem(id);

    if(data){
        const character = JSON.parse(data);
        return character;
    }
    else{
        return createEmptyCharacterProfileData();
    }
}


function characterSkillsPath(id: string){
    return `characters/${id}/skillData`;
}

function characterItemsPath(id: string){
    return `characters/${id}/itemsData`;
}

export function saveCharacterSkillData(data: CharacterSkillData){
    const dataString = JSON.stringify(data);
    localStorage.setItem(characterSkillsPath(data.id), dataString);
}

export function loadCharacterSkillData(id: string){
    const path = characterSkillsPath(id);
    const data = localStorage.getItem(path);

    if(data){
        const skillData = JSON.parse(data);
        return skillData;
    }
    else{
        return createEmptyCharacterSkillData(id);
    }
}


export function createEmptyCharacterSkillData(id: string){
    const skillsData: SkillData[] = [];

    for (let i = 0; i < SkillGroups._Length; i++) {
        const skills: Skills[] = SkillGroupsLUT[i];

        for (let j = 0; j < skills.length; j++) {
            const skillData: SkillData = {
                type: skills[j],
                label: getSkillName(skills[j]), 
                category: getSkillGroupName(i), 
                maxValue: 5, 
                currentValue: 0,
            }

            skillsData.push(skillData);
        }
        
    }

    const attributes: AttributeData[] = [];

    attributes.push({label: 'Strength', maxValue: 5, currentValue: 0});
    attributes.push({label: 'Dexterity', maxValue: 5, currentValue: 0});
    attributes.push({label: 'Vitality', maxValue: 5, currentValue: 0});
    attributes.push({label: 'Insight', maxValue: 5, currentValue: 0});


    const socialAttributes: AttributeData[] = [];

    socialAttributes.push({label: 'Tough', maxValue: 5, currentValue: 0});
    socialAttributes.push({label: 'Cool', maxValue: 5, currentValue: 0});
    socialAttributes.push({label: 'Beautify', maxValue: 5, currentValue: 0});
    socialAttributes.push({label: 'Clever', maxValue: 5, currentValue: 0});
    socialAttributes.push({label: 'Cute', maxValue: 5, currentValue: 0});

    const charactersSkillData: CharacterSkillData ={
        id,
        skills: skillsData,
        attributes,
        socialAttributes,
    }
 
    return charactersSkillData;
}


// Items
export function loadCharacterItemsData(id: string): string[]{
    const path = characterItemsPath(id);
    const data = localStorage.getItem(path);
    
    if(data){
        const itemsData = JSON.parse(data);
        return itemsData;
    }
    else{
        const items: string[] = [];

        for (let index = 0; index < 18; index++) {
            items.push('');            
        }
        
        return items;
    }
}

export function saveCharacterItemsData(id: string, items: string[]){
    const itemsString = JSON.stringify(items);
    localStorage.setItem(characterItemsPath(id), itemsString);
}