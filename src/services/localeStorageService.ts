class localStorageService {
    setItem(item: any, key: string) {
        localStorage.setItem(key, JSON.stringify(item));
    }

    getItem(key:  string) {
        return localStorage.getItem(key);
    }
}

export default new localStorageService()