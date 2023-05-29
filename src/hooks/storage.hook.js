function useStorage() {
    function getItem(key) {
        return JSON.parse (window.localStorage.getItem(key));
    }

    function setItem(key, value) {
        return window.localStorage.setItem(key, JSON.stringify (value));
    }

    function removeItem(key) {
        return window.localStorage.removeItem(key);
    }

    return {
        getItem,
        setItem,
        removeItem,
    }
}

export default useStorage