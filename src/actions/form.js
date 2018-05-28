import { form } from './constants';
import action from '../utils/action';

const updateFormValue = action(form.UPDATE_FORM_VALUE);
const resetFormValue = action(form.RESET_FORM_VALUE);

const formActions = {
  updateFormValue,
  resetFormValue,
};

export {
  formActions as default,
  updateFormValue,
  resetFormValue,
};
