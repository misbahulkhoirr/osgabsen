import { ATTENDANCES_ATTEMPT, ATTENDANCES_FAILED, ATTENDANCES_SUCCESS } from '../../../actions/attendances/attendancesAction'

const initialState =
{
    isLoading: false,
    data: false,
    errorMessage: false
}

const attendancesReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case ATTENDANCES_ATTEMPT:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case ATTENDANCES_SUCCESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case ATTENDANCES_FAILED:
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

export default attendancesReducer