export interface ICharacter {
    dna: string;
    username: string;
    access: TCharacterAccess;
    gender: TCharacterGender;
    dress: ICharacterDress;
}
export declare type TCharacterAccess = 'admin' | 'root' | 'vip' | 'member';
export declare type TCharacterGender = 'male' | 'female' | 'other';
export declare type TCharacterDressKey = 'body' | 'hair' | 'eyes' | 'mouth' | 'beard' | 'tops' | 'bottoms' | 'shoes' | 'accessories';
export declare const CharacterDressKeys: TCharacterDressKey[];
export interface ICharacterDress {
    body?: string;
    hair?: string;
    eyes?: string;
    mouth?: string;
    beard?: string;
    tops?: string;
    bottoms?: string;
    shoes?: string;
    accessories?: string;
}
export interface ICDNAssets {
    size: number;
    item: ICDNAssetsItem;
}
export interface ICDNAssetsItem {
    [key: string]: string;
}
