import { Text,Image, SafeAreaView, StyleSheet,View , TouchableOpacity } from 'react-native';
import  React , {useState} from 'react';
import Set1 from './components/Set1';
export default function App() {
  const [sts,setsts]=useState(0);
  const [status,setstatus]=useState(false);
  return (
    <>
    {status ? <Set1 val={setstatus} sets={sts}/> : 
    <View style={styles.container}>
      <Image source={require('./assets/rps.webp')} style={styles.img}/>
      <View style={styles.smcont}>
        <TouchableOpacity style={sts == 1 ? styles.btn2 : styles.btn} onPress={()=>setsts(1)}>
          <Text style={sts == 1 ? styles.txt1 : styles.txt}>1 SET</Text>
        </TouchableOpacity>
        <TouchableOpacity style={sts == 3 ? styles.btn2 : styles.btn} onPress={()=>setsts(3)}>
          <Text style={sts == 3 ? styles.txt1 : styles.txt}>3 SETS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={sts == 5 ? styles.btn2 : styles.btn} onPress={()=>setsts(5)}>
          <Text style={sts == 5 ? styles.txt1 : styles.txt}>5 SETS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnn} onPress={()=>setstatus(true)}>
          <Text style={{color:'white',fontSize:30}}>Play Game</Text>
        </TouchableOpacity>
      </View> 
    </View> }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'start',
    
  },
  img : {
    height:'35%',
    width:'100%',
  },
  smcont : {
    height:'50%',
    width:'80%',
    marginTop:20,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  btn : {
    height: 60,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:200,
    borderRadius:10,
    borderColor:'green',
    borderWidth:1,
    borderStyle:'solid',
    color:'green',
  },
  btnn : {
    height: 60,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:300,
    borderRadius:10,
    backgroundColor:'green',
  },
  txt : {
    color : 'green',
    fontSize:30,
  },
  txt1 : {
    color : 'white',
    fontSize:30,
  },
  btn2 : {
    height: 60,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:200,
    borderRadius:10,
    backgroundColor:'green',
    color:'white',
  },
});
