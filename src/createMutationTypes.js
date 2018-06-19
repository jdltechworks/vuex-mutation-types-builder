const createMutationTypes = (name) => {
    return (...definitions) => (local) => {
        return definitions.reduce((r, v, k) => {
            r[v] = `${local ? '' : name + '/'}${v}`
            return r
        }, {})
    }
}

export default createMutationTypes
