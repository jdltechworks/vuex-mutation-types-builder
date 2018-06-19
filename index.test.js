import createMutationTypes from './index';
it(`Build mutation types`, () => {
    const types = createMutationTypes()(
        'FETCH',
        'STORE',
        'UPDATE',
        'DESTROY'
    );
    expect(types).toBeDefined();
    expect(types.FETCH).toBe('fetch');
    expect(types.fetch).toBeUndefined();
});


it(`Build mutation types with namespace`, () => {
    const types = createMutationTypes('post')(
        'FETCH',
        'FETCH_ALL',
        'STORE',
        'UPDATE',
        'DESTROY'
    );
    expect(types).toBeDefined();
    expect(types.FETCH).toBe('fetchPost');
    expect(types.FETCH_ALL).toBe('fetchAllPost');
    expect(types.DESTROY_ALL).toBeUndefined();
});

it(`Build mutation types with destructuring`, () => {
    let { FETCH, STORE } = createMutationTypes('post')(
        'FETCH',
        'STORE',
        'UPDATE',
        'DESTROY'
    );
    expect(FETCH).toBe('fetchPost');
    expect(STORE).toBe('storePost');
});