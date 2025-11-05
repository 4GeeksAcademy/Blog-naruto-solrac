export const initialStore = () => {
  return {
    characters: [],
    characterDetails: null,
    akatsukis: [],
    akatsukiDetail: null,
    karas: [],
    karaDetail: null
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

    case 'get_akatsukis':
      return{
        ...store,
        akatsukis: action.payload
      };
      
    case 'get_akatsuki_id':
      return{
        ...store,
        akatsukiDetail: action.payload
      }  

    case 'get_karas':
      return {
        ...store,
        karas: action.payload
      }

    case 'get_kara_id':
      return {
        ...store,
        karaDetail: action.payload
      }  

    default:
      throw Error('Unknown action.');
  }
}
