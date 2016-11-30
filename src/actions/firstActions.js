export function firstAction(value) {
  return function(dispatch) {
    dispatch({
      type: 'UPDATE_SORT_BY',
      payload: value
    });
  }
}