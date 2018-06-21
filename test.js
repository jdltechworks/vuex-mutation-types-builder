import MutationTypes, { studlyCase, createMutationTypes } from './index';

it(`Mutation types builder`, () => {
    let types = new MutationTypes(
        'LOGIN',
        'LOGOUT',
        'REGISTER',
        'DESTROY'
    );

    types.prefix('auth');

    let { REGISTER, DESTROY } = types.all();
    let { LOGIN, LOGOUT } = types.all(false);

    expect(types.get('LOGIN')).toBe('auth/login');
    expect(types.get('LOGIN', false)).toBe('login');
    expect(() => types.get('FETCH')).toThrow();
    expect(REGISTER).toBe('auth/register');
    expect(DESTROY).toBe('auth/destroy');
    expect(LOGIN).toBe('login');
    expect(LOGOUT).toBe('logout');

    expect(studlyCase).toBeDefined();
    expect(createMutationTypes).toBeDefined();
});