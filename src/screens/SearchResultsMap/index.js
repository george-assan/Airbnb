import { PLACEHOLDERS } from '@babel/types';
import React, { useState, useEffect, useRef } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
//use PROVIDER_GOOGLE if you want to enforce provider
import places from '../../../assets/data/feed';
import PostCarouselItem from '../../components/PostCarouselItem';
import { FlatList } from 'react-native-gesture-handler';

const SearchResultsMap = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    const flatlist = useRef();
    const map = useRef();
    let timeout = false;

    const viewConfig = useRef({ itemVisiblePercentThreshold: 70 })
    const onViewChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {

            if (timeout) {
                clearTimeout(timeout)
                timeout = false;
            }
            timeout = setTimeout(() => {
                const selectedPlace = viewableItems[0].item;
                setSelectedPlaceId(selectedPlace.id)
            }, 100)

        }
    })

    const width = useWindowDimensions().width;

    useEffect(() => {
        if (!selectedPlaceId || !flatlist) {
            return;
        }
        const index = places.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({ index })

        const selectedPlace = places[index];
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }
        map.current.animateToRegion(region);
    }, [selectedPlaceId])

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <MapView
                ref={map}
                style={{ width: '100%', height: '100%' }}
                // provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            >
                {places.map((place, index) => (
                    <CustomMarker
                        coordinate={place.coordinate}
                        key={index}
                        price={place.newPrice}
                        isSelected={place.id === selectedPlaceId}
                        onPress={() => setSelectedPlaceId(place.id)}
                    />)
                )}
            </MapView>

            <View style={{ position: 'absolute', bottom: 10 }}>
                <FlatList
                    ref={flatlist}
                    data={places}
                    renderItem={({ item }) => <PostCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />
            </View>
        </View>
    );
}

export default SearchResultsMap
