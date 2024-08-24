import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.cajitapadre}>
      <View style={styles.cajitahija1}></View>
      <View style={styles.cajitahija2}></View>
      <View style={styles.cajitapadre2}>
        <View style={styles.cajitahija3}></View>
        <View style={styles.cajitahija4}></View>
        <View style={styles.cajitahija5}></View>
      </View>
      
      <View style={styles.cajitahija6}></View>
      
    
      </View>
    
  );
}

const styles = StyleSheet.create({
  cajitapadre: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  cajitahija1:{
    width: 400,
    height: 100,
    backgroundColor: 'aqua',
    marginTop:40,
    marginLeft: 5,
  },
  cajitahija2:{
    width: 400,
    height: 340,
    backgroundColor: 'aqua',
    marginTop:50,
    marginLeft: 5,
    
},



cajitapadre2: {
  flex: 1,
  flexDirection: 'row',
  
},
cajitahija3:{
  width: 120,
  height: 120,
  backgroundColor: 'aqua',
  marginTop:70,
  marginLeft: 5,
},
cajitahija4:{
  
  width: 120,
  height: 120,
  backgroundColor: 'aqua',
  marginTop:70, 
marginLeft: 20,
marginRight: 15,
  
},

cajitahija5:{
  width: 120,
  height: 120,
  backgroundColor: 'aqua',
  marginTop:70,
marginLeft: 5,


},
cajitapadre2: {
  flex: 1,
  flexDirection: 'row',
  
},

cajitahija6:{
  width: 400,
    height: 100,
    backgroundColor: 'aqua',
    marginBottom: 40,
    marginLeft: 5,
  

},
})
