export const initialStore = () => {
  return {
    characters: [],
    characterDetails: null,
    akatsukis: [],
    akatsukiDetail: null,
    karas: [],
    karaDetail: null,
    favorites:[],
    logotipo: "https://static.wikia.nocookie.net/naruto/images/9/99/Naruto_ilustraci%C3%B3n.png/revision/latest?cb=20120328093346&path-prefix=es"
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

    case 'set_favorites':
      return{
        ...store,
        favorites: [...store.favorites,  action.payload]
      }
      
    case 'remove_favorites':
      return{
        ...store,
        favorites: store.favorites.filter(item => item.id !== action.payload.id)
      }  

    default:
      throw Error('Unknown action.');
  }
}
