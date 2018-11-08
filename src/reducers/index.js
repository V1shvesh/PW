import {
  ADD_BLOCK,
  MOVE_BLOCK,
  INIT_LINK,
  SET_LINK,
} from '../actions';

export default function reducer(state = { blockCount: 0, linkActive: false }, action) {
  switch (action.type) {
    case ADD_BLOCK: {
      const nextCount = state.blockCount + 1;
      const { x, y } = action.attr;
      const nextBlocks = { ...state.blocks };
      nextBlocks[state.blockCount] = { x, y };
      return {
        ...state,
        blockCount: nextCount,
        blocks: nextBlocks,
      };
    }
    case INIT_LINK:
      return {
        ...state,
        linkActive: true,
        initializedLink: { from: action.from },
      };
    case SET_LINK: {
      const { initializedLink } = state;
      initializedLink.to = action.to;
      return {
        ...state,
        linkActive: false,
        initializedLink: null,
        links: [...state.links, initializedLink],
      };
    }
    case MOVE_BLOCK: {
      const { id, x, y } = action.attr;
      const nextBlocks = { ...state.blocks };
      nextBlocks[id] = { x, y };
      return {
        ...state,
        blocks: nextBlocks,
      };
    }
    default:
      return state;
  }
}
