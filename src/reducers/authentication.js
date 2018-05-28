import update from 'immutability-helper';
import { authentication } from '../actions/constants';
import ApiStatus from '../services/apiStatus';

const intitalState = {
  userData: null,
  login: {
    status: ApiStatus.default(),
    error: {
      code: null,
      message: null,
    },
  },
  register: {
    status: ApiStatus.default(),
    error: {
      code: null,
      message: null,
    },
  },
};

function authReducer(state = intitalState, action) {
  switch (action.type) {
    case authentication.LOGIN_REQUEST: {
      return update(state, {
        login: {
          status: ApiStatus.fetching(),
          error: {
            code: { $set: null },
            message: { $set: null },
          },
        },
      });
    }
    case authentication.LOGIN_SUCCESS: {
      const { userData } = action.payload;
      return update(state, {
        login: {
          status: { $set: ApiStatus.success() },
          error: {
            code: { $set: null },
            message: { $set: null },
          },
        },
        userData: { $set: userData },
      });
    }
    case authentication.LOGIN_FAILURE: {
      const { errorCode, errorMessage } = action.payload;
      return update(state, {
        login: {
          status: { $set: ApiStatus.failure() },
          error: {
            code: { $set: errorCode },
            message: { $set: errorMessage },
          },
        },
      });
    }
    case authentication.REGISTER_REQUEST: {
      return update(state, {
        register: {
          status: ApiStatus.fetching(),
          error: {
            code: { $set: null },
            message: { $set: null },
          },
        },
      });
    }
    case authentication.REGISTER_SUCCESS: {
      return update(state, {
        register: {
          status: { $set: ApiStatus.success() },
          error: {
            code: { $set: null },
            message: { $set: null },
          },
        },
      });
    }
    case authentication.REGISTER_FAILURE: {
      const { errorCode, errorMessage } = action.payload;
      return update(state, {
        register: {
          status: { $set: ApiStatus.failure() },
          error: {
            code: { $set: errorCode },
            message: { $set: errorMessage },
          },
        },
      });
    }
    default:
      return state;
  }
}

export default authReducer;

