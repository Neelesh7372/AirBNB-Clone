import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import { useRoute } from '@react-navigation/native';

const Tab=createMaterialTopTabNavigator();

 const SearchResultsTabNavigator=(props)=>{
  
  const route=useRoute();
  const {guests} =route.params;

  return (
    <Tab.Navigator screenOptions={{
      "tabBarActiveTintColor": "#f15454",
      "tabBarIndicatorStyle": {
        "backgroundColor": "#f15454"
      }
    }}>
        <Tab.Screen name={"list"}>
          {()=>(<SearchResultsScreen guests={guests}/>)}
        </Tab.Screen>
        <Tab.Screen name={"map"}>
          {()=>(<SearchResultsMap guests={guests}/>)}
        </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;