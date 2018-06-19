const createMutationTypes2 = (name) => {
    return (...definitions) => (local) => {
        return definitions.reduce((r, v, k) => {
            r[v] = `${local ? '' : name + '/'}${v}`
            return r;
        }, {});
    };
};


const createMutationTypes = (...definitions) => {
    return (name) => {

        console.log(name, definitions);
        return definitions;
    };
};

export default createMutationTypes;


export {
    createMutationTypes,
    createMutationTypes2
};