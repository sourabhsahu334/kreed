import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PieChart from 'react-native-pie-chart';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';

const Badmintontates = () => {
  const widthAndHeight = 100;
  const series = [22, 27];
  const sliceColor = ['#fbd203', 'aqua'];
  const labels = ['22', '27'];

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
            <MaterialCommunity name="badminton" size={25} color="green" />
          </TouchableOpacity>

          <Text style={[styles.Text, {marginLeft: 10}]}>Badminton</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity>
            <FontAwesome name="hand-grab-o" size={25} color="pink" />
          </TouchableOpacity>
          <Text style={[styles.Text, {marginLeft: 10}]}>Grip: Right Hand</Text>
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
            <Text style={styles.headerCell}>Category</Text>
            <Text style={styles.headerCell}>Match Played</Text>
            <Text style={styles.headerCell}>Match Won</Text>
            <Text style={styles.headerCell}>Won%</Text>
          </LinearGradient>

          {/* Table Rows */}
          <View style={styles.row}>
            <Text style={[styles.cell, {color: 'yellow'}]}>Singles</Text>
            <Text style={styles.cell}>10</Text>
            <Text style={styles.cell}>5</Text>
            <Text style={styles.cell}>50%</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.cell, {color: 'aqua'}]}>Doubles</Text>
            <Text style={styles.cell}>15</Text>
            <Text style={styles.cell}>8</Text>
            <Text style={styles.cell}>53.33%</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.cell, {color: 'orange'}]}> Total</Text>
            <Text style={styles.cell}>20</Text>
            <Text style={styles.cell}>12</Text>
            <Text style={styles.cell}>60%</Text>
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
        <Text style={{color: 'white', marginBottom: 10}}>
          Win percentage in Singles
        </Text>
        <View style={{height: 10, marginBottom: 10}}>
          <Progress.Bar progress={0.3} width={300} color="#86eded" />
        </View>
        <Text style={{color: 'white', marginBottom: 10}}>
          Win percentage in Doubles
        </Text>
        <View style={{height: 10, marginBottom: 10}}>
          <Progress.Bar progress={0.5} width={300} color="#fe5981" />
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
    paddingHorizontal: 12,
    fontWeight: 'bold',
    color: 'white',

  },
  cell: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: 'white',
  },
});

export default Badmintontates;
