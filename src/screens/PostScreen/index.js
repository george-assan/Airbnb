import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import places from '../../../assets/data/feed'
import Post from '../../components/DetailedPost'
import styles from './style';
import { useRoute } from '@react-navigation/core';


const PostScreen = () => {
    const route = useRoute()
    const post = places.find(place => place.id == route.params.postId);

    return (
        <ScrollView style={styles.container}>
            <Post post={post} />
        </ScrollView>
    )
}

export default PostScreen
