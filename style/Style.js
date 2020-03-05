import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  ContainerLoading: {
    backgroundColor: 'white',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  TextLoading: {
    fontSize: 15,
    color: 'black',
    marginTop: '30%',
  },
  indicator: {
    marginTop: '40%',
  },
  ContainerHome: {
    height: '100%',
    backgroundColor: 'white',
  },
  Container: {
    height: '100%',
    backgroundColor: 'ghostwhite',
  },
  Body: {
    height: '100%',
    backgroundColor: 'ghostwhite',
    margin: '1%',
  },
  ScrollHome: {
    backgroundColor: 'white',
    height: '100%',
    marginBottom: 10,
  },
  Scroll: {
    backgroundColor: 'ghostwhite',
    height: '100%',
    marginBottom: 10,
  },
  button: {
    margin: '2%',
    // width:'60%',
    marginLeft: '20%',
    marginRight: '20%',
  },
  Title: {
    textAlign: 'center',
    fontFamily: 'Oswald-BoldItalic',
    // fontWeight: 'bold',
    fontSize: 25,
  },
  Info: {
    fontFamily: 'georgia',
    fontSize: 15,
    marginTop: '2%',
  },
  cardContainer: {
    elevation: 1,
    // borderRadius: 60,
    width: '100%',
    borderWidth: 1,
    marginBottom: '5%',
    marginTop: 3,
  },

  Picker: {
    margin: '5%',
    marginHorizontal: '10%',
    backgroundColor: '#e1e1e5',
  },
  Checkbox: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: '10%',
    backgroundColor: '#e1e1e5',
    marginTop: '4%',
  },
  Inputx: {
    backgroundColor: '#e1e1e5',
  },
  arrow: {
    marginLeft: '90%',
    marginTop: '1%',
  },
});
