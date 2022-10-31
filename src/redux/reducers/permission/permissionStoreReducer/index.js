import { PERMISSION_STORE_ATTEMPT, PERMISSION_STORE_FAILED, PERMISSION_STORE_SUCCESS } from '../../../actions/permission/permissionStoreAction'

const initialState =
{
    isLoading: false,
    data: false,
    errorMessage: false
}

const permissionStoreReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case PERMISSION_STORE_ATTEMPT:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case PERMISSION_STORE_SUCCESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case PERMISSION_STORE_FAILED:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage.data.errors
            }
        default:
            return state
    }
}

export default permissionStoreReducer