/*

@author postnikovtrofim1@gmail.com (Postnikov Trofim)

*/
export type Cloth = {
    id: number,
    imageData: string,
    name: string,
    price: number,
    author: string,
    label: string
}
export type User = {
    id: number,
    imageLogoData: string,
    name: string
}
export function requestAboutCloth(id: number): Cloth | undefined {
    return undefined;
}
export function requestAboutUser(id: number): User | undefined {
    return undefined;
}
export function requestRecomentedCloth(id: number): [] {
    return []
}