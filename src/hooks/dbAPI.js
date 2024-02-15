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

export const db = {
  initialize: () => {
    const keys = Object.keys(ls);
    return keys.reduce((data, uuid) => {
      const value = this.read(uuid);
      return { ...data, uuid: value };
    }, {});
  },

  create: (obj) => {
    const { uuid } = obj;

    if (this.read(uuid)) return "ID already exists.";

    const entry = { ...obj };

    this.write(uuid, entry);
    return entry;
  },

  read: (uuid) => {
    return JSON.parse(ls.getItem(uuid));
  },

  update: (obj) => {
    const { uuid } = obj;
    if (!this.read(uuid)) return "Entry not found.";

    const existingEntry = this.read(uuid);
    const newEntry = { ...existingEntry, ...obj };

    this.write(uuid, newEntry);
    return newEntry;
  },

  delete: (obj) => {
    const { uuid } = obj;
    if (this.read(uuid)) {
      ls.remove(uuid);
      return obj;
    } else {
      return "Invalid entry.";
    }
  },

  clear: () => {
    ls.clear();
    return "Local storage cleared!";
  },

  write: (uuid, data) => {
    ls.setItem(uuid, JSON.stringify(data));
  },
};
