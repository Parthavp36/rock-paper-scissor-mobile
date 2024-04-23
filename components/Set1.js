import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import React , {useState} from 'react';
export default function Set1({val,sets}) {
  const[score,setscore]=useState(0);
  const [botscore,setbotscore]=useState(0);
  const [ch,setch]=useState(0);
  const [botch,setbotch]=useState(0);
  const [win,setwin]=useState(0);
  const [count,setcount]=useState(0);
  const ttmp=parseInt(sets);
  const handlegame = (a) =>
  {
      const tmp=parseInt(a);
      const tmch=ch+1;
      if(count+1===ttmp)
      {
        setTimeout(()=>{
          setcount(count+1)
        },1000)
      }
      else{
      setcount(count+1);
      }
      setch(a);
      const t=Math.floor(Math.random()*3+1);
      setbotch(t);
      if (
      (tmp === 1 && t === 3) ||
      (tmp === 2 && t === 1) ||
      (tmp === 3 && t === 2)
    ) {
      setwin(1);
      setscore(score+1);
    } else if (tmp === t) {
      setwin(2); // Draw 
    } else {
      setwin(3);
      setbotscore(botscore+1); // Bot wins
    }
  }
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'space-between'}}>
      <View style={styles.container}>
        <View style={{width:'40%',flexDirection:'row',marginTop:30,alignItems:'center',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../assets/prof.png')} style={styles.logo}/>
          <Text style={{fontSize:20,color:'white'}}>You</Text>
          </View>
          <Text style={{fontSize:20,color:'white'}}>{score}</Text>
        </View>
        <Text style={{fontSize:20,color:'white',marginTop:30,fontWeight:'bold'}}>:</Text>
        <View style={{width:'40%',flexDirection:'row',marginTop:30,alignItems:'center',justifyContent:'space-between'}}>
          <Text style={{fontSize:20,color:'white'}}>{botscore}</Text>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../assets/robot.png')} style={{height:32,width:32}}/>
          <Text style={{fontSize:20,color:'white',marginLeft:10}}>Bot</Text>
          </View>
        </View>
      </View>
      { count === ttmp &&
      <View style={styles.popup}>
          <Text style={score>botscore || score === botscore ? styles.poptxt : styles.poptxt1}>{score>botscore ? "You Won!!!" : score<botscore ? "You lose...":"Tied"}</Text>
          {score>botscore || score === botscore ? <Image source={require('../assets/award.png')} style={{height:100,width:100}}/> : <Image source={require('../assets/game.png')} style={{height:100,width:100}}/>}
          <View style={{flexDirection:'row',width:'80%',alignItems:'center',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',width:'40%',alignItems:'center',justifyContent:'space-evenly'}}>
                <Image source={require('../assets/prof.png')} style={styles.logo}/>
                <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>{score}</Text>
            </View>
            <Text style={{fontSize:22,color:'green'}}>:</Text>
            <View style={{flexDirection:'row',width:'40%',alignItems:'center',justifyContent:'space-evenly'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>{botscore}</Text>
                <Image source={require('../assets/robot.png')} style={{height:32,width:32}}/>
            </View>
          </View>
          <TouchableOpacity style={{height:50,width:180,backgroundColor:'green',color:'white',alignItems:'center',justifyContent:'center',borderRadius:10}} onPress={()=>val(false)}>
            <Text style={{color:'white'}}>Play Again</Text>
          </TouchableOpacity>
      </View>
      }
      {win === 0 ? <Text style={{fontSize:25,color:'green'}}>Choose Your choice</Text> : win === 1 ? <Text style={{fontSize:25,color:'green'}}>You Wins</Text> : win === 2 ? <Text style={{fontSize:25,color:'green'}}>Tied</Text>: <Text style={{fontSize:25,color:'red'}}>You lose</Text>}
      <View style={styles.play}>
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:25,marginBottom:20}}>Bot</Text>
          {botch==1 ? <Image source={require('../assets/stone.png')} style={{height:100,width:100,transform:'rotate(180deg)'}}/> : botch==2 ?
           <Image source={require('../assets/paper.png')} style={{height:100,width:100,transform:'rotate(180deg)'}}/> : botch==3 ?
           <Image source={require('../assets/scissor.png')} style={{height:100,width:100,transform:'rotate(180deg)'}}/> : 
          <Image source={require('../assets/robot.png')} style={{height:100,width:100}}/> }
        </View>
        <View style={{backgroundColor:'green',height:5,width:'90%',borderRadius:10}}></View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
          {ch==1 ? <Image source={require('../assets/stone.png')} style={{height:100,width:100}}/> : ch==2 ?
           <Image source={require('../assets/paper.png')} style={{height:100,width:100}}/> : ch==3 ?
           <Image source={require('../assets/scissor.png')} style={{height:100,width:100}}/> : 
          <Image source={require('../assets/prof.png')} style={{height:140,width:140}}/> }
          <Text style={{fontSize:25}}>You</Text>
        </View>
      </View>
      <View style={{width:'100%',flexDirection:'row-reverse',}}>
        <TouchableOpacity onPress={()=>val(false)}><Image source={require('../assets/left.png')} style={{height:30,width:30,marginRight:20}}/></TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',width:'80%',marginBottom:30,alignItems:'center',justifyContent:'space-evenly'}}>
        <TouchableOpacity onPress={()=>handlegame(1)}><Image source={require('../assets/stone.png')} style={{height:50,width:50}}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>handlegame(2)}><Image source={require('../assets/paper.png')} style={{height:50,width:50}}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>handlegame(3)}><Image source={require('../assets/scissor.png')} style={{height:50,width:50}}/></   TouchableOpacity>  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height : 100,
    width : '100%',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'green',
    justifyContent:'space-between',
  },
  play : {
    height:'50%',
    width:'100%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
  },
  logo: {
    height: 40,
    width: 40,
  },
  popup : {
    height:'54%',
    width:'80%',
    backgroundColor:'#e5e4e2',
    position:'absolute',
    top:'25%',
    zIndex:+1,
    borderRadius:10,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  poptxt : {
    fontSize:30,
    color:'green',
    fontWeight:'bold',
  },
  poptxt1 : {
    fontSize:30,
    color:'red',
    fontWeight:'bold',
  },
});
