/*

@author postnikovtrofim1@gmail.com (Postnikov Trofim)

*/
export type Cloth = {
    id: number,
    imageData: string,
    name: string,
    price: number
}

export function requestAboutCloth(id: number): Cloth {
    return {
        id: 0,
        imageData: "base64;",
        name: "test",
        price: 0
    };
}
