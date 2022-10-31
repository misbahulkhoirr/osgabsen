import { STATISTIC_ATTEMPT, STATISTIC_FAILED, STATISTIC_SUCCESS } from '../../../actions/statistics/statisticAction'

const initialState =
{
    isLoading: false,
    data: false,
    errorMessage: false
}

const statisticReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case STATISTIC_ATTEMPT:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case STATISTIC_SUCCESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case STATISTIC_FAILED:
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

export default statisticReducer