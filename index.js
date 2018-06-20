// const createMutationTypes = name => {
//     return (...definitions) => {
//         return definitions.reduce((r, v, k) => {
//             r[v] = `${typeof name == 'undefined' ? '' : name + '/'}${v}`
//             return r;
//         }, {});
//     };
// };

export function studlyCase(string) {
    return string.replace(/[\-|\_]/g, ' ')
                .replace(/\w\S*/g, str => {
                    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
                })
                .replace(/\s/g, '')
                .replace(/\w\S*/g, str => {
                    return str.charAt(0).toLowerCase() + str.substr(1);
                });
}

const createMutationTypes = name => (...definitions) => definitions.reduce((collection, key) => {
    collection[key] = (typeof name == 'undefined' || name == null) ? studlyCase(key) : ([name, studlyCase(`${key}`)].join('/'));
    return collection;
}, {});

export default createMutationTypes;