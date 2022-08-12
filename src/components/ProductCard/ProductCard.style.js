import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1.7,
    borderRadius: 10,
    borderColor: '#02a9f6',
    backgroundColor: '#fff',
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
  },
  body_container: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18.5,
    fontWeight: 'bold',
    padding: 7,
  },
  price: {
    padding: 7,
    textAlign: 'right',
    fontSize: 16,
    color: 'white',
  },
});
