/*jslint node: true */
'use strict';

import helpers from './laroux.helpers.js';

var staticKeys = ['_callbacks', '_onupdate'];

class Model {
    constructor(data) {
        let self = this;

        this._callbacks = [];
        this._onupdate = function (changes) {
            helpers.callAll(
                self._callbacks,
                self,
                [changes]
            );
        };

        Object.observe(this, this._onupdate);

        if (data) {
            this.setRange(data);
        }
    }

    set(key, value) {
        if (staticKeys.indexOf(key) === -1) {
            this[key] = value;
        }
    }

    setRange(values) {
        for (let valueKey in values) {
            this.set(valueKey, values[valueKey]);
        }
    }

    get(key, defaultValue) {
        if (key in this && staticKeys.indexOf(key) === -1) {
            return this[key];
        }

        return defaultValue || null;
    }

    getRange(keys) {
        let values = {};

        for (let item in keys) {
            values[keys[item]] = this[keys[item]];
        }

        return values;
    }

    keys() {
        let keys = [];

        for (let item in this) {
            if (staticKeys.indexOf(item) === -1) {
                keys.push(item);
            }
        }

        return keys;
    }

    length() {
        return this.keys().length;
    }

    exists(key) {
        return (key in this);
    }

    remove(key) {
        if (staticKeys.indexOf(key) === -1) {
            delete this[key];
        }
    }

    clear() {
        for (let item in this) {
            if (!this.hasOwnProperty(item) || staticKeys.indexOf(item) !== -1) {
                continue;
            }

            delete this[item];
        }
    }

    observe(obj) {
        Object.observe(obj, this._onupdate);
    }

    unobserve(obj) {
        Object.unobserve(obj);
    }

    on(fnc) {
        this._callbacks.push(fnc);
    }

    off(fnc) {
        helpers.removeFromArray(this._callbacks, fnc);
    }
}

export default (function () {
    var types = {
        model: Model
    };

    return types;

})();