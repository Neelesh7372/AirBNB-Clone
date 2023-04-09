
import React,{useState, useEffect, useRef} from 'react';
import { useWindowDimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';


const SearchResultsMap = (props) => {

  const flatlist= useRef();
  const map=useRef();

  const viewConfig=useRef({itemVisiblePercentThreshold:70});
  const onViewChanged=useRef(({viewableItems})=>{
    if(viewableItems.length>0){
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  })

  const [selectedPlaceId, setSelectedPlaceId] = useState(null);  

  const width=useWindowDimensions().width;
  useEffect(()=>{
    if(!selectedPlaceId || !flatlist){
      return;
    }
    const index=posts.findIndex(place => place.id===selectedPlaceId)
    flatlist.current.scrollToIndex({index})

    const selectedPlace=posts[index];
    const region={
      latitude:selectedPlace.latitude,
      longitude:selectedPlace.longitude,
      latitudeDelta:0.5,
      longitudeDelta:0.5,
    }
    map.current.animateToRegion(region);
  },[selectedPlaceId])

  const {posts}=props;

  return (
    <View style={{width:'100%', height:'100%'}}>
    <MapView
      ref={map}
      style={{width:'100%',height:'100%'}}
      initialRegion={{
      latitude: 28.3279822,
      longitude: -16.5124847,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }}
  >
    {posts.map(place => (
        <CustomMarker
        coordinate={{latitude: place.latitude,longitude:place.longitude}}
        price={place.newPrice}
        isSelected={place.id===selectedPlaceId}
        onPress={()=>setSelectedPlaceId(place.id)}
        />)
    )}
  </MapView>
    <View style={{position:'absolute', bottom:10}}>
        <FlatList
          ref={flatlist} 
          data={posts} 
          renderItem={({item})=><PostCarouselItem post={item}/>} 
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width-60}
          snapToAlignment={"center"}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
         />       
    </View>
  </View>
  )
}

export default SearchResultsMap;