import { USER_ADD, USER_DELETE, IUser, IStoreAction } from "../types";

const initialUser: Partial<IUser> = {};

/**
 * @param {number} state user default state value
 * @param {Action} param action
 */
function userReducer(
  state: Partial<IUser> = initialUser,
  { type, payload }: IStoreAction<IUser>
): Partial<IUser> {
  switch (type) {
    case USER_ADD:
      return payload;
    case USER_DELETE:
      return {};
    default:
      return state;
  }
}

export default userReducer;
