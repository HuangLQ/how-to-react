import { combineReducers } from 'redux-immutablejs'

import { reducer as uiReducer } from 'redux-ui'
import routerReducer from './routerReducer'
import entitiesReducer from './entitiesReducer'
import pagesReducer from './pagesReducer'
import errorMessageReducer from './errorMessageReducer'
import { reducer as formReducer } from 'redux-form/immutable'

const rootReducer = combineReducers({
  ui: uiReducer,
  form: formReducer,
  routing: routerReducer,
  entities: entitiesReducer,
  pages: pagesReducer,
  errorMessage: errorMessageReducer,
})

export default rootReducer
