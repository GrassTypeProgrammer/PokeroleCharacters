import { nanoid } from "nanoid";

// characters, id, 
export type CharacterData = 
{
    id: string,
    items: string[],
   
}

export type CharacterSkillData = {
    id: string,
    skills: number[];
    attributes: number[];
    socialAttributes: number[];
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


// Saving data
// const taskIDsString = JSON.stringify(taskIDs);
// localStorage.setItem(taskIDsPath(boardID), taskIDsString);

// Deleting data
// localStorage.removeItem(taskID);

// Getting data
// let taskIDs = JSON.parse(localStorage.getItem(taskIDsPath(boardID)));


// Todo make this random data
// export function createTestCharacter(){
//     const testCharacter: CharacterData = {
//         id: 'test',
//         profileData: {
//             name: 'Flint',
//             hp: 3,
//             will: 4,
//             age: 17,
//             rank: 'beginner',
//             nature: 'brave',
//             confidence: 9,
//             money: 2000,
//             concept: 'gardener',
//             achievements: [{label:'test', completed: true}],
//             badges: [true, false,false,false,false,false,false,false,],
//         },
//         currentPokemon: ['Pikachu'],
//         items: ['Potion x1'],
//         skills: [3, 2, 1],
//         attributes: [1, 2, 3],
//         socialAttributes: [5, 4, 3],
//     }

//     return testCharacter;
// }

export function createEmptyCharacterProfileData(){
    const data: CharacterProfileData = {
        id: nanoid(),
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