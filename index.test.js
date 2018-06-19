import createMutationTypes from './index';

test(`Build mutation types`, () => {
    const types = createMutationTypes(
        'FETCH',
        'STORE',
        'UPDATE',
        'DESTROY'
    );
    expect(types).toBeDefined();
});


test(`Build mutation types with namespace`, () => {
    const types = createMutationTypes(
        'FETCH',
        'STORE',
        'UPDATE',
        'DESTROY'
    )('namespace');
    expect(types).toBeDefined();
});