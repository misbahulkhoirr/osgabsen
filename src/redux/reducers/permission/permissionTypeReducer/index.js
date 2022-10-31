import { PERMISSION_TYPE_ATTEMPT,PERMISSION_TYPE_FAILED,PERMISSION_TYPE_SUCCESS } from '../../../actions/permission/permissionTypeAction'

const initialState =
{
    isLoading: false,
    data: false,
    errorMessage: false
}

const permissionTypeReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case PERMISSION_TYPE_ATTEMPT:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case PERMISSION_TYPE_SUCCESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case PERMISSION_TYPE_FAILED:
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

export default permissionTypeReducer