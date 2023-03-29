import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
const sw = Dimensions.get('window').width;
const sh = Dimensions.get('window').height;
export default StyleSheet.create({
  ProduitThumbnail: {
    borderColor: '#AAAAAA',
    borderRadius: 4,
    borderWidth: 1,
    // alignItems: 'center',
    height: sh / 4,
    width: sw / 2 - 20,
    marginBottom: 5,
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    flexGrow: 1,
    minWidth: 50,
    minHeight: 50,
    maxWidth: sw / 2 - 40,
    height: sh / 4 - 20,
  },
});
