const React = require("react-native");

const { StyleSheet,Animated } = React;

export default {

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
  
 
},
logoText: {
  fontSize: 40,
  fontWeight: "600",
  marginTop: 150,
  marginBottom: 30,
  textAlign: 'center',
  color:'darkblue',
  fontFamily:'',
  
},
loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
loginButton: {
  backgroundColor: '#3897f1',
  borderRadius: 5,
  height: 45,
  marginTop: 10,
  marginBottom:20,
  width:190,
  textAlign:'center',
},
fbLoginButton: {
  height: 45,
  marginTop: 10,
  backgroundColor: 'transparent',
  
},
 image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
};
