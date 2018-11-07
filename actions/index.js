// ACTIONS
export const ADD_BLOCK = 'ADD_BLOCK';
export const INIT_LINK = 'INIT_LINK';
export const SET_LINK = 'SET_LINK';
export const MOVE_BLOCK = 'MOVE_BLOCK';

// ACTION CREATORS
export function addBlock(x, y) {
  return {
    type: ADD_BLOCK,
    attr: {
      x,
      y,
    },
  };
}

export function initLink(id) {
  return {
    type: INIT_LINK,
    from: id,
  };
}

export function setLink(id) {
  return {
    type: SET_LINK,
    to: id,
  };
}

export function moveBlock(x, y, id) {
  return {
    type: MOVE_BLOCK,
    attr: {
      x,
      y,
      id,
    },
  };
}
