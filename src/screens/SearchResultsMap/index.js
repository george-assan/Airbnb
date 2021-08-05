import { PLACEHOLDERS } from '@babel/types';
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
//use PROVIDER_GOOGLE if you want to enforce provider
import places from '../../../assets/data/feed';
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultsMap = () => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <MapView
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
                        isSelected={place.id === selectedPlaceId}
                        key={index}
                        coordinate={place.coordinate}
                        price={place.newPrice}
                        onPress={() => setSelectedPlaceId(place.id)}
                    />
                ))}
            </MapView>
            <View style={{ position: 'absolute', bottom: 40 }}>
                <PostCarouselItem post={places[0]} />
            </View>
        </View>
    )
}

export default SearchResultsMap
