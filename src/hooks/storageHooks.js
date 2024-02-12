// utilizes HTML web storage api to save files locally in a browser

/*
interface obj = {
  uuid: uuid
  date: string
  type: string
  merchant?: string
  amount: number
}
*/
const ls = window.localStorage;
export const knownUUIDArray = new Set();

const storageHook = {
  initialize: () => {
    if (!knownUUIDArray.length && knownUUIDArray.length) {
      const retrieved = this.read();

      retrieved.forEach((obj) => {
        knownUUIDArray.add(obj.uuid);
      });

      console.log("Local storage loaded");
    }
  },

  create: (obj) => {
    // what if uuid already exists?
    const objString = JSON.stringify(obj);
    ls[obj.uuid] = objString;
    return;
  },

  read: () => {
    // returns an array of all objects stored in local storage
    const arrayOfIds = Object.getOwnPropertyNames(ls);

    return arrayOfIds.reduce((acc, uuid) => {
      const parsedObj = JSON.parse(ls.getItem[uuid]);
      acc.push(parsedObj);
      return acc;
    }, []);
  },

  delete: (uuid) => {},

  clear: () => ls.clear(),
};

export default storageHook;
