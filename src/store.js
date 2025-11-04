export const initialStore = () => {
  return {
    characters: [],
    characterDetails: null
  }

}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_characters':
      return {
        ...store,
        characters: action.payload
      };
    case "get_character_id":
      return {
        ...store,
        characterDetail: action.payload
      };
    default:
      throw Error('Unknown action.');
  }
}
