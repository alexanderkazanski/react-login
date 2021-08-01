import Authentication from './Authentication'
import * as authenticationActions from './store/actions'
import { authenticationReducer } from './store/reducer'

export default Authentication;

export {
    authenticationActions,
    authenticationReducer
}