import {combineReducers} from 'redux';

import {loginReducer, logoutReducer} from './auth';

import {profileReducer, changePasswordReducer} from './account';

import {permissionStoreReducer, permissionTypeReducer, permissionGetReducer} from './permission';
import {statisticReducer} from './statistics';

import {checkinReducer, checkoutReducer} from './scan';
import {attendancesReducer} from './attendances';
import globalReducer from './globalReducer'

const reducers = combineReducers({
  loginReducer,
  logoutReducer,
  changePasswordReducer,
  profileReducer,
  permissionStoreReducer,
  permissionTypeReducer,
  permissionGetReducer,
  statisticReducer,
  checkinReducer,
  checkoutReducer,
  attendancesReducer,
  globalReducer
});

export default reducers;
