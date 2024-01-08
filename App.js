import { View, Text, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [darkTheme, setDarkThem] = useState(false);
  const [result, setResult] = useState('nilesh');

  const colors = {
    dark: '#222520',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',
  };

  const calculate=(title)=>{
    if(title=='C'){
      setResult('');
    } else if(title == 'DE'){
      setResult(result.substring(0, result.length - 1));
    }else if(title == '='){
      const ans = Number(eval(result).toFixed(3)).toString()
      setResult(ans);
    }
    else setResult(result + title);

  }


  const Btn = ({ title,type }) => (
      <TouchableOpacity 
      onPress={()=>calculate(title)}
      style={{
        padding: 10, borderRadius: 10, elevation: 2,
        backgroundColor: getColor(colors.light1, colors.dark1), height: 70, width: 70, margin: 16, 
        alignItems: 'center'
      }}>
        <Text style={{ 
          fontSize: 37, 
          color: "black",
          textAlign:'center',
          textAlignVertical:'center',
          color:getBtnColor(type)
          }}>{title}</Text>
      </TouchableOpacity>
    )


 const getBtnColor=(type)=>{
  if(type=='top'){
 return '#35FBD6'
  }else if(type=='right'){
 return '#EB6363'
  }else{
 return getColor(colors.dark,colors.light)
  }
 }
  const getColor = (light, dark) => darkTheme ? dark : light;
  return (
    <View style={{
      height: '100%',
      width: '100%',
      paddingVertical: 20,
      backgroundColor: getColor(colors.light, colors.dark),
      alignItems: 'center'
    }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkThem(!darkTheme)}
        thumbColor={getColor(colors.dark, colors.light)}
        trackColor={getColor(colors.light, colors.dark)}
      />

      <Text style={{
        fontSize: 40,
        color: getColor(colors.dark, colors.light),
        width: '100%',
        textAlign: 'right',
        paddingRight: 20,
        marginTop:160,
        paddingBottom:20
      }}>{result}
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap",justifyContent:'center',
    backgroundColor:getColor(colors.light1,colors.dark1),borderTopRightRadius:20,borderTopLeftRadius:20}}>
        <Btn title="C" type="top"/>
        <Btn title="DE" type="top"/>
        <Btn title="/" type="top"/>
        <Btn title="%" type="top" />
        <Btn title="7" type="number"/>
        <Btn title="8" type="number"/>
        <Btn title="9" type="number"/>
        <Btn title="*" type="right"/>
        <Btn title="4" type="number"/>
        <Btn title="5" type="number"/>
        <Btn title="6" type="number"/>
        <Btn title="-" type="right"/>
        <Btn title="1" type="number"/>
        <Btn title="2" type="number"/>
        <Btn title="3" type="number"/>
        <Btn title="+" type="right"/>
        <Btn title="00" type="number"/>
        <Btn title="0" type="number"/>
        <Btn title="." type="number"/>
        <Btn title="=" type="right"/>
      </View>
    </View>
  )
}

export default App
