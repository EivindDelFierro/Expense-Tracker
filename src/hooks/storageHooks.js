/* Database layout
localStorage.db = {
  uuid: {
    uuid: uuid
    year: number
    month: number
    day: number
    type: string
    merchant?: string
    amount: number
  }
}
*/

/*
  Local storage
*/
const ls = window.localStorage;
const uuidSet = new Set();
let cache = {};

const storageHook = {
  initialize: () => {
    if (!ls.db) {
      this.write(cache);
      ls.setItem("uuid", JSON.stringify(uuidSet));
    } else {
      const storedUuidArray = JSON.parse(ls.getItem("uuid"));

      storedUuidArray.forEach((element) => {
        uuidSet.add(element);
      });

      cache = JSON.parse(ls.getItem("db"));
    }
  },

  create: (obj) => {
    const { uuid } = obj;

    if (uuidSet.has(uuid)) return "ID already exists.";

    cache[uuid] = {
      ...obj,
    };

    this.write(cache);
    return "New entry stored.";
  },

  read: (uuid) => {
    cache = JSON.parse(ls.getItem("db"));

    if (uuid) return cache[uuid]; // return a single entry from localStorage
    return Object.values(cache); // return an array of all entries from localStorage
  },

  update: (obj) => {
    const { uuid } = obj;
    if (!uuidSet.has(uuid)) return "Entry not found.";
    cache[uuid] = { ...cache[uuid], ...obj };
    this.write(cache);
    return `Entry with ID ${uuid} updated.`;
  },

  delete: (uuid) => {
    if (cache[uuid]) {
      delete cache[uuid];
      return "Entry deleted.";
    } else {
      return "Invalid entry.";
    }
  },

  clear: () => {
    ls.clear();
    return "Local storage cleared!";
  },

  write: (cache) => {
    const cacheString = JSON.stringify(cache);
    ls.setItem("db", cacheString);
  },
};

export default storageHook;
