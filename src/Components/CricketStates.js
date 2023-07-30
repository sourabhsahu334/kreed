import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';
  import React,{useState,useEffect} from 'react';
  import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import PieChart from 'react-native-pie-chart';
  import * as Progress from 'react-native-progress';
  import LinearGradient from 'react-native-linear-gradient';
import CricketHistory from './CricketHistory';
  
  const CricketStates = () => {
    const widthAndHeight = 100;
    const series = [22, 27];
    const sliceColor = ['#fbd203', 'aqua'];
    const labels = ['22', '27'];
    const [statetype,setstatetype]=useState("cricket");
  
    return (
      <ScrollView style={{marginTop:-40,}}>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            padding: 20,
            
            paddingBottom: 50,
          }}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TouchableOpacity>
              <MaterialCommunity name="cricket" size={25} color="pink" />
            </TouchableOpacity>
  
            <Text style={[styles.Text, {marginLeft: 10}]}>Badminton</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TouchableOpacity>
              <MaterialCommunity name="cricket" size={25} color="green" />
            </TouchableOpacity>
            <Text style={[styles.Text, {marginLeft: 10}]}>Batting: Right Hand</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TouchableOpacity>
              <MaterialCommunity name="bowling" size={25} color="pink" />
            </TouchableOpacity>
            <Text style={[styles.Text, {marginLeft: 10}]}>Bowling: Right Hand</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TouchableOpacity style={{borderWidth:3,borderColor:"green",borderRadius:20,}}>
              <MaterialCommunity name="star" size={20} color="yellow"  />
            </TouchableOpacity>
            <Text style={[styles.Text, {marginLeft: 10}]}>Expert</Text>
          </View>
          <View style={styles.table}>
            {/* Table Header */}
            <LinearGradient
              colors={['#20341D', '#86D957']}
              start={{x: 0, y: 1}}
              end={{x: 0, y: 0}}
              style={styles.row}>
              <Text style={styles.headerCell}>Format</Text>
              <Text style={styles.headerCell}>Match Played</Text>
              <Text style={styles.headerCell}>Match Won</Text>
              <Text style={styles.headerCell}>Won%</Text>
              <Text style={styles.headerCell}>Mvps</Text>
            </LinearGradient>
  
            {/* Table Rows */}
            <View style={styles.row}>
              <Text style={[styles.cell, {color: 'yellow',borderColor:"green",borderRightWidth:1}]}>LTD</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1}]}>10</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1}]}>5</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1}]}>50%</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1}]}>4</Text>

            </View>
  
     
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 50,
            }}>
            <View>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                labels={labels}
                coverFill={'#FFF'}
              />
              <Text style={[styles.Text, {fontSize: 14}]}>Test Match Played</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    backgroundColor: '#fbd203',
                  }}></View>
                <Text style={[styles.Text, {fontSize: 14, marginLeft: 10}]}>
                  Singles
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{height: 10, width: 10, backgroundColor: 'aqua'}}></View>
                <Text style={[styles.Text, {fontSize: 14, marginLeft: 10}]}>
                  Doubles
                </Text>
              </View>
            </View>
            <View style={{height: 100, width: 100}}>
              <Progress.Circle
                size={100}
                progress={0.8}
                borderWidth={10}
                borderColor="#e59a07"
                showsText={true}
              />
              <Text style={[styles.Text, {fontSize: 14}]}>
                {' '}
                Match Winning percentage
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{height: 10, width: 10, backgroundColor: 'blue'}}></View>
                <Text style={[styles.Text, {fontSize: 14, marginLeft: 10}]}>
                  Match Won
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{height: 10, width: 10, backgroundColor: 'aqua'}}></View>
                <Text style={[styles.Text, {fontSize: 14, marginLeft: 10}]}>
                  Match Lost
                </Text>
              </View>
            </View>
          </View>
          <View style={{width:"100%",height:40,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:20,paddingHorizontal:10,marginBottom:20}}>
            <TouchableOpacity  onPress={()=>setstatetype("badminton")} style={{borderBottomColor:statetype==="badminton"?"#86d597":"transparent",borderWidth:6,height:40,justifyContent:"center",paddingHorizontal:10,backgroundColor:statetype==="cricket"?"rgba(255,255,255,0.2)":"transparent",borderRadius:10}}><Text style={[styles.Text,{margin:"auto",fontSize:14,color:"#86d597"}]}>Cricket Ball Stats</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setstatetype("cricket")} style={{borderBottomColor:statetype==="cricket"?"#86d597":"transparent",borderWidth:6,height:40,justifyContent:"center",paddingHorizontal:10,backgroundColor:statetype==="badminton"?"rgba(255,255,255,0.2)":"transparent",borderRadius:10}}><Text style={[styles.Text,{fontSize:14,color:"#86d597"}]}>Tennis Ball Stats</Text></TouchableOpacity>
          </View>
          {statetype==="cricket"?    <View style={[styles.table,{backgroundColor:"#082613"}]}>
            {/* Table Header */}
            <LinearGradient
        colors={['rgba(255,255,255,.2)', 'rgba(255,255,255,.1)']}
              start={{x: 0, y: 1}}
              end={{x: 0, y: 0}}
              style={styles.row}>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>Format</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>M</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>Inn</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>B</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>Mdn</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>Runs</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>W</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>BB</Text>
            </LinearGradient>
  
            {/* Table Rows */}
            <View style={styles.row}>
              <Text style={[styles.cell, {color: 'yellow',borderColor:"green",borderRightWidth:1}]}>LTD</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>10</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>5</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>50%</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>4</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>5</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>50%</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>4</Text>

            </View>
            <LinearGradient
              colors={['rgba(255,255,255,.2)', 'rgba(255,255,255,.1)']}
              start={{x: 0, y: 1}}
              end={{x: 0, y: 0}}
              style={styles.row}>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>Format</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>ECON</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>AVG</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>SR</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>3W</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>4K</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>5W</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>Ball Type</Text>
            </LinearGradient>
            <View style={styles.row}>
              <Text style={[styles.cell, {color: 'yellow',borderColor:"green",borderRightWidth:1}]}>LTD</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>10</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>5</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>50%</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>4</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>5</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>50%</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>4</Text>

            </View>
  
     
          </View>:<View style={[styles.table,{backgroundColor:"#082613"}]}>
            {/* Table Header */}
            <LinearGradient
        colors={['rgba(255,255,255,.2)', 'rgba(255,255,255,.1)']}
              start={{x: 0, y: 1}}
              end={{x: 0, y: 0}}
              style={styles.row}>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>Format</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>M</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>Inn</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>B</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>Mdn</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>Runs</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>W</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>BB</Text>
            </LinearGradient>
  
            {/* Table Rows */}
            <View style={styles.row}>
              <Text style={[styles.cell, {color: 'yellow',borderColor:"green",borderRightWidth:1}]}>LTD</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>10</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>5</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>50%</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>4</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>5</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>50%</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>4</Text>

            </View>
            <LinearGradient
              colors={['rgba(255,255,255,.2)', 'rgba(255,255,255,.1)']}
              start={{x: 0, y: 1}}
              end={{x: 0, y: 0}}
              style={styles.row}>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>Format</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>ECON</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>AVG</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>SR</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>3W</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>4K</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>5W</Text>
              <Text style={[styles.headerCell,{fontSize:12,borderColor:"green",borderRightWidth:1,}]}>Ball Type</Text>
            </LinearGradient>
            <View style={styles.row}>
              <Text style={[styles.cell, {color: 'yellow',borderColor:"green",borderRightWidth:1}]}>LTD</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>10</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>5</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>50%</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>4</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>5</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>50%</Text>
              <Text style={[styles.cell,{borderColor:"green",borderRightWidth:1,fontSize:12}]}>4</Text>

            </View>
  
     
          </View>}
     
        </View>
        <View style={{height:150,width:"90%",borderRadius:20,borderWidth:2,borderColor:"#86d597",marginBottom:100,marginLeft:"auto",marginRight:"auto",}}>
        <View style={{borderBottomColor:"rgba(255,255,255,.5)",borderBottomWidth:2,width:"100%",height:70,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:5}}>
          <Text style={[styles.text,{color:"#86d597"}]}>Team 1</Text> 
          <View style={{}}><Text style={[styles.text]}>104/3</Text><Text style={[styles.text]}>8 overs</Text></View> 
          <View style={{height:"90%",backgroundColor:"rgba(255,255,255,.3)",justifyContent:"center",alignItems:"center",borderRadius:10,paddingHorizontal:5}}>
          <MaterialCommunity  style={{marginTop:5}} name="trophy" size={25} color="gold" />
          <Text style={[styles.text,{fontSize:12,color:"gold"}]}>Won</Text>
          <Text style={[styles.text,{fontSize:12,color:"gold",marginBottom:5}]}>Against</Text>
          </View>

          <View style={{}}><Text style={[styles.text]}>139/3</Text><Text style={[styles.text]}>8 overs</Text></View> 
          <Text style={[styles.text,{color:"#86d597"}]}>Team 2</Text> 
        </View>
        <View style={{width:"100%",height:"50%",justifyContent:"space-between",alignItems:"center",flexDirection:"row",paddingHorizontal:10}}>
            <Image source={require("../Assets/download1.png")} style={{height:30,width:30,borderRadius:30}}/>
           <View style={{flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}><MaterialCommunity name="cricket" size={20} color="yellow" />
           <MaterialCommunity name="bowling" size={20} color="red" style={{marginTop:10}} /></View>
            <View style={{}}><Text style={[styles.text]}>22(8)</Text><Text style={[styles.text]}>1-14-1</Text>
            <Text style={[styles.text,]}>O R W</Text></View> 
            <View style={{height:"100%",width:1.5,backgroundColor:"rgba(255,255,255,.5)"}}></View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <MaterialCommunity name="medal" size={20} color="gold"  />
            <Text style={[styles.text,{color:"#86d597",fontSize:16}]}>MVP</Text> 
            <Image source={require("../Assets/download1.png")} style={{height:25,width:25,borderRadius:12.5 , zIndex:1}}/>
            <Text style={[styles.text,{backgroundColor:"rgba(255,255,255,.3)",fontSize:14,fontWeight:"normal",paddingHorizontal:10,marginLeft:-10,borderRadius:15,paddingVertical:3}]}>guru</Text>
            </View>
        </View>
        
    </View>
      </ScrollView>
    );
  };
  const styles = StyleSheet.create({
    Text: {
      color: 'white',
      fontSize: 16,
    },
    table: {
      backgroundColor: 'black',
      borderWidth: 1,
      borderColor: 'green',
      marginBottom: 10,
      marginTop: 20,
    },
    row: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: 'green',
    },
    headerCell: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 3,
      fontWeight: 'bold',
      color: 'white',
  
    },
    cell: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 3,
      color: 'white',
    },
    text:{
        color:"white",
        fontSize:15,
        fontWeight:"bold"
    }
  });
  
  export default CricketStates;
  