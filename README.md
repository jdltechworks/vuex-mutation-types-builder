# Mutation Types Builder for Vuex

A helper class to generate mutation types in vuex. Also, you can share your created mutation types in other modules.

I'm a react/redux developer, while trying vuex I applied what I have learned in react/redux.

This is redux-module inspired approach.

We got this idea from a redux book.

[Full stack react module management](https://www.fullstackreact.com/articles/better-redux-module-management/)

```
    const types = {}

    types.YOUR_MUTATION_TYPE_FIRST = 'YOUR_MUTATION_TYPE_FIRST'
    types.YOUR_MUTATION_TYPE_SECOND = 'YOUR_MUTATION_TYPE_SECOND'
    types.YOUR_MUTATION_TYPE_THIRD = 'YOUR_MUTATION_TYPE_THIRD'

    export default types
```


## Usage:

types.js
```javascript
import { createMutationTypes } from 'vuex-mutation-types-builder'

const types = new MutationTypes(
    'LOGIN',
    'LOGOUT',
    'REGISTER',
    'DESTROY'
)

export default types

```

mutations.js
```javascript
import types from './types'

export default {
    [types.get('LOGIN', false)] (state, payload) {

    },
    [types.get('LOGOUT', false)] (state, payload) {

    },
    [types.get('REGISTER', false)] (state, payload) {

    }
}

```

or

mutations.js
```javascript

import types from './types'

const { LOGIN, LOGOUT, REGISTER } = types.all(false)

export default {
    [LOGIN] (state, payload) {

    },
    [REGISTER] (state, payload) {

    },
    [LOGOUT] (state, payload) {

    }
}

```
actions.js
```javascript
import types from './types'


const { LOGIN } = types.all(false)

export default {
    async doLogin({commit, state}) {
        commit(LOGIN)
    }
}
```

somemodule/actions.js
```javascript
import types from './types'


const { LOGIN } = types.all()

export default {
    async needsLoginMutationType({commit, state}) {
        commit(LOGIN)
    }
}
```
