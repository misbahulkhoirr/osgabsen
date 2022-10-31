import { LOGOUT_ATTEMPT, LOGOUT_FAILED, LOGOUT_SUCCESS } from '../../../actions/auth/logoutAction'

const initialState =
{
    isLoading: false,
    data: false,
    errorMessage: false
}

const logoutReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case LOGOUT_ATTEMPT:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case LOGOUT_FAILED:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state
    }
}

export default logoutReducer