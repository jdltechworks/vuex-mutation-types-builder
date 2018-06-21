import { studlyCase } from './helpers';

export default class MutationTypes {

    constructor(...types) {
        this.types = types;
    }

    /**
     * Set prefix
     * 
     * @param {String} prefix 
     * @return MutationTypes
     */
    prefix(prefix)
    {
        this.prefix = prefix;
        return this;
    }

    /**
     * Return specific mutation type
     * 
     * @param {String} type 
     * @param {Boolean} prefixed
     * @return {String} 
     */
    get(type, prefixed = true)
    {
        let types = this.build(prefixed);

        if (typeof types[type] == 'undefined') {
            throw new Error(`${type} doesn't exists. We only have [${Object.keys(types).join(', ')}]`);
        }

        return types[type];
    }

    /**
     * Return all mutation types
     * 
     * @param {Boolean} prefixed 
     * @return {Object}
     */
    all(prefixed = true)
    {
        return this.build(prefixed);
    }

    /**
     * Build
     * 
     * @param {Boolean} prefixed
     * @return {Object}
     */
    build(prefixed = true)
    {
        return this.types.reduce((collection, key) => this.reduce(collection, key, prefixed), {});
    }

    /**
     * Reducer callback
     * 
     * @param {Object} collection 
     * @param {String} key 
     * @param {Boolean} prefixed 
     */
    reduce(collection, key, prefixed = true)
    {
        collection[key] = (!prefixed || (typeof this.prefix == 'undefined' || this.prefix == null)) ? studlyCase(key) : ([this.prefix, studlyCase(`${key}`)].join('/'));
        return collection;
    }
}