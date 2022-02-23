import { createAction } from "@reduxjs/toolkit";

/**
 * Creates the appropriate action(s)
 * @param {string} name the name of the slice you are creating the actions for
 * @returns {Function} A function that accepts 3 params:
 * - action (string): name of the action to create
 * - hasSuccess (boolean): true if a Success action must be created too
 * - hasError (boolean): true if an Error action must be created too
 */
export const getActionCreator = (name) => (action, hasSuccess, hasError) => {
  const act = {
    [action]: createAction(`${name}/${action}`)
  };
  if (hasSuccess)
    act[`${action}Success`] = createAction(`${name}/${action}Success`);
  if (hasError) act[`${action}Error`] = createAction(`${name}/${action}Error`);
  
	return act;
};
/**
 * Creates API actions, the normal action and the respective Success and Error to
 * properly handle the API's response
 * @param {string} name the name of the slice you are creating the actions for
 * @returns {Function} A function that accepts 1 param, the action's name
 */
export const getApiActionCreator = (name) => (action) =>
  getActionCreator(name)(action, true, true);
