import MutationTypes from "./MutationTypes";

export default MutationTypes;

export function createMutationTypes(...types) {
    return new MutationTypes(types);
}

export * from './helpers';