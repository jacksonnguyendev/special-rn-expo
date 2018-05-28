export default class ApiStatus {
  static DEFAULT = '__DEFAULT__'
  static FETCHING = '__FETCHING__'
  static SUCCESS = '__SUCCESS__'
  static FAILURE = '__FAILURE__'

  constructor(status = ApiStatus.DEFAULT, data) {
    if (typeof status === 'object') {
      return Object.assign(this, status);
    }
    this.status = status;
    this.data = data;
  }

  isDefault() {
    return this.status === ApiStatus.DEFAULT;
  }
  isFetching() {
    return this.status === ApiStatus.FETCHING;
  }
  isSuccess() {
    return this.status === ApiStatus.SUCCESS;
  }
  isFailure() {
    return this.status === ApiStatus.FAILURE;
  }

  get message() {
    if (this.message) return this.message;
    if (this.data instanceof Error /* || this.data instanceof Parse.Error */) {
      const errorMessage = this.data.message;
      return typeof errorMessage === 'string' ? errorMessage : `${errorMessage}`;
    }
    switch (this.status) {
      case ApiStatus.SUCCESS:
        return 'Success';
      case ApiStatus.FAILURE:
        return 'Failure';
      case ApiStatus.FETCHING:
        return 'Fethching';
      default:
        return 'Default';
    }
  }

  static default(...args) {
    return new ApiStatus(ApiStatus.DEFAULT, ...args);
  }

  static success(...args) {
    return new ApiStatus(ApiStatus.SUCCESS, ...args);
  }
  static fetching(...args) {
    return new ApiStatus(ApiStatus.FETCHING, ...args);
  }
  static failure(...args) {
    return new ApiStatus(ApiStatus.FAILURE, ...args);
  }
}
