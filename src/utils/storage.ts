class Storage {
  save<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  retrieve<T>(key: string): T | null {
    const json = localStorage.getItem(key);
    if (!json) {
      return null;
    }
    try {
      return JSON.parse(json) as T;
    } catch (e) {
      console.error(`Error parsing JSON from localStorage for key "${key}":`, e);
      return null;
    }
  }
}

export default new Storage();