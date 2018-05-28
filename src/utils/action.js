function action(type: string) {
  return function actionObject(payload = {}, meta = {}) {
    return {
      type,
      payload,
      meta,
    };
  };
}
export default action;

