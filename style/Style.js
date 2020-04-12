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
  buttonForm: {
    margin: '2%',
    // width:'60%',
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: '10%',
  },
  Title: {
    textAlign: 'center',
    fontFamily: 'Oswald-BoldItalic',
    // fontWeight:'bold',
    fontSize: 25,
  },
  Info: {
    fontFamily: 'georgia',
    fontSize: 15,
    marginTop: '2%',
  },
  Mark: {
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 20,
    margin: '2%',
    fontWeight: 'bold',
    borderRadius: 10,
    marginRight: '10%',
    marginLeft: '10%',
    borderColor: 'blue',
    alignItems: 'center',
  },
  MarkTitle: {
    fontFamily: 'Oswald-BoldItalic',
    margin: '2%',
    fontSize: 25,
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
  Marksview: {
    borderWidth: 1,
    height: '100%',
    width: '25%',
    padding: '3%',
    borderRadius: 10,
    marginLeft: '7%',
    borderColor: 'blue',
    alignItems: 'center',
  },
  Markstext: {
    marginRight: '23%',
    marginLeft: '22%',
  },
  Marksnumber: {
    color: 'blue',
  },
  row: {
    flexDirection: 'row'
  },
  badgeStyle: { 
    position: 'absolute',
    top: -4,
    right: -4 
  },
  notificationContainer: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft: 10,
    //marginRight: 10,
    margin: '2%',
    flexDirection: 'row',
  },
  detail: {
    fontFamily: 'georgia',
    fontSize: 17,
    marginTop: '2%',
    marginBottom: '2%',
    marginLeft: '2%',
    marginTop: '4%',
    fontWeight: 'bold',
  },
  MoreDetail: {
    marginLeft: '2%',
  },
  Chat: {
    marginBottom: '8%',
  },
});
