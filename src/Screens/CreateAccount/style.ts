import { StyleSheet } from "react-native";
import { COLOR } from "../../Utils/color";
import { vh, vw } from "../../Utils/dimension";
const styles = StyleSheet.create({
    mainparent:{
        flex:1,
       backgroundColor:COLOR.BLACK
      },
      leftarrowimg:{
        // height:30,
        // width:30
        height:vh(30),
        width:vw(30)
      },
      createtext:{
        color:COLOR.WHITE,
        fontFamily:'HelveticaNeue-BoldItalic',
        fontWeight:'bold',
        fontSize:25
      },
      signuptext:{
        color:COLOR.WHITE,
        fontSize:15,
        fontFamily:'HelveticaNeue-BoldItalic',
      },
      createparent:{
        // marginVertical:3,
        marginLeft:vw(12),
        // borderWidth:1,borderBottomColor:'blue'
      },
      innercreatesign:{
        marginVertical:vw(3)
      },
    
      createbutton: {
        // marginRight:14,
  // marginRight:vw(20),
        left:vw(10),
        // bottom: 10,
        backgroundColor: COLOR.LIGHTBLUE,
        borderRadius: vw(5),
        justifyContent: 'center',
        alignItems: 'center',
        height: vh(50),
        marginTop: vh(30),
        // borderWidth:1,
        // borderColor:'red',
        width:vw(350)
  
      },
      buttontext: {
        color: COLOR.BLACK,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily:'HelveticaNeue-BoldItalic'
      },
      checkBox: {
        // marginRight: 11,
         marginLeft: 22,
        width: vw(18),
        height: vh(18),
        marginTop:vh(30)
      },
      checkboxparent:{
        justifyContent: 'space-between', 
        flexDirection: 'row'
      },
      innercheckbox:{
        right: vw(5)
      },
      agree:{
        marginTop: vh(30),
         marginLeft: vw(3)
      },
      agreetext:{
        color: 'white'
      },
      terms:{
      
        marginTop: vh(30),
         marginRight: vw(170)
      },
      termstext:{
        color: COLOR.LIGHTBLUE
      },
      orparent:{
        flexDirection: 'row',
         alignItems: 'center', 
         marginTop: vh(25)
      },
      orinner:{
        flex: 1, height: vh(1), backgroundColor: 'grey'
      },
      ortext:{
        width: vw(50), textAlign: 'center', color: 'white'
      },
      orouter:{
        flex: 1, height: vh(1), backgroundColor: 'grey'
      },
      googleimg:{
        width:vw(355),
        height:vh(48),
        borderRadius:vh(5)
      },
      parentgoogle:{
      alignSelf:'center',
      marginTop:vh(20)
      },
      alreadyuser:{
        color:COLOR.WHITE,
        left:vw(116)
      },
      sign:{
        color:COLOR.LIGHTBLUE,
        right:vw(122),
        fontFamily:'HelveticaNeue-BoldItalic'
      },
      bottomsign:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:vh(15),
        alignItems:'center'

      },

      handlingAll:{
        marginTop:3,
        color:'red',
        paddingLeft:15
      }
  
  })
  
export{styles}  