const { AsyncLocalStorage } = require("node:async_hooks");

const store = new AsyncLocalStorage();

const middleware = (_req, _res, next) => {
  store.run(new Map(), () => next());
};

const getStore = () => store.getStore();

const get = (key) => getStore()?.get(key);

const set = (key, value) => getStore()?.set(key, value);

module.exports = { middleware, getStore, get, set };
