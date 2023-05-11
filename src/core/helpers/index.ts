/** 
 * 

 * * @helpersFunctionsStrings 
 * 
 * @Function njvAjax();
 * 
 * @param word string;
 * 
 * @param sentence string;
 * 
 * @return RegExpMatchArray;
 * 
 */
export function searchWord(sentence: string, word: string): RegExpMatchArray {
    return sentence.match(new RegExp(word, 'i')) as RegExpMatchArray;
}
/** 
 * 
 * @Function njvAjax();
 * 
 * @param api string;
 * 
 * @param nameCol string;
 * 
 * @return Promise;
 * 
 */


import { getCollection } from '../../apis/firebase/index';

export async function njvAjax(api: string, nameCol: string): Promise<any> {
    let ext: string;
    let db: string;
    let coleccion: string;
    let query: string;
    let result: any;
    try {

        if (typeof api === 'string') {

            if (api === 'njv') {

                const headers = new Headers();
                const options = {
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, *same-origin, omit
                    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                    // body: JSON.stringify(data), // body data type must match "Content-Type" header
                    headers,
                } as RequestInit;

                db = `./src/apis/njv/colecciones/` as string;
                ext = `.json`;
                coleccion = `${nameCol}${ext}` as string
                query = `${db}${coleccion}` as string;
                headers.append('Content-Type', 'application/json');
                const resultFecth = await fetch(query, options);

                result = await resultFecth.json();
            }
            if (api === 'firebase') {
                const data = await getCollection(nameCol);
                result = data.docs.map(rec => rec.data());
            }
            if (api === 'mongose') {
                console.log('mongose')
                return;

            }
        }

        return result;
        // .then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));

    } catch (error) {
        console.error(error);
    }
}
// Select Elements off dom
export const $select = (value: string) => {
    let target = document.querySelectorAll(value)!;
    if (target.length > 1) {
        return target;
    } else if (target.length === 1) {
        return target[0];
    } else {
        return null;
    }

}
export const $create = (tag: string): HTMLElement => {
    return document.createElement(tag) as HTMLElement;
}