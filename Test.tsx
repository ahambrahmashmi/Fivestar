import { View, Text, StatusBar,Image,SafeAreaView} from 'react-native'
import React from 'react'



const Test = () => {
  return (
   <SafeAreaView style={{flex:1,backgroundColor:"black"}}>
     <StatusBar barStyle="light-content" translucent={true}/>
       <View>
         <Text style={{color:'white',borderWidth:1,backgroundColor:'red'}}>hi jdiofdo</Text> 
         <Image source={require('../../src/assets/images/left.png')}/> 
       </View>
     

   </SafeAreaView>
  )
}

export default Test