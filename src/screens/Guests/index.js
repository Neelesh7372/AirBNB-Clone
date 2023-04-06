import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const GuestsScreen = props => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
          </View>

          <View style={styles.buttons}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.btn}>-</Text>
            </Pressable>

            <Text style={styles.number}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.btn}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Children</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
          </View>

          <View style={styles.buttons}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={styles.btn}>-</Text>
            </Pressable>

            <Text style={styles.number}>{children}</Text>

            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={styles.btn}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Infants</Text>
            <Text style={{color: '#8d8d8d'}}>Under 2</Text>
          </View>

          <View style={styles.buttons}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={styles.btn}>-</Text>
            </Pressable>

            <Text style={styles.number}>{infants}</Text>

            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={styles.btn}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'SearchResults',
              },
            })
          }
          style={styles.search}>
          <Text style={styles.searchText}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestsScreen;
