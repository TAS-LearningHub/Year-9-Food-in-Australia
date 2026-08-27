(function () {
  "use strict";

  const config = window.FOOD_AUSTRALIA_COURSE;
  if (!config) return;

  function storageKey(name) {
    const cleanName = String(name || "").trim();
    if (!cleanName) throw new Error("A storage record name is required.");
    return `${config.storagePrefix}${cleanName}`;
  }

  function read(name, fallback) {
    try {
      const raw = window.localStorage.getItem(storageKey(name));
      return raw === null ? fallback : JSON.parse(raw);
    } catch (error) {
      return fallback;
    }
  }

  function write(name, value) {
    try {
      window.localStorage.setItem(storageKey(name), JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  function remove(name) {
    try {
      window.localStorage.removeItem(storageKey(name));
      return true;
    } catch (error) {
      return false;
    }
  }

  window.FOOD_AUSTRALIA_STORAGE = Object.freeze({
    schemaVersion: config.schemaVersion,
    prefix: config.storagePrefix,
    key: storageKey,
    read,
    write,
    remove
  });
})();
