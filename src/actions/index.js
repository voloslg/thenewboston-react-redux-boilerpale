export const selectUser = (user) => {
  console.log('selectUser');
  return {
    type: 'USER_SELECTED',
    payload: user
  };
}; 