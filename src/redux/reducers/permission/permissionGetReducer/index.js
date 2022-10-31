import { PERMISSION_GET_ATTEMPT,PERMISSION_GET_FAILED,PERMISSION_GET_SUCCESS } from '../../../actions/permission/permissionGetAction'

const initialState =
{
    isLoading: false,
    data: false,
    errorMessage: false
}

const permissionGetReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case PERMISSION_GET_ATTEMPT:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case PERMISSION_GET_SUCCESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case PERMISSION_GET_FAILED:
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

export default permissionGetReducer