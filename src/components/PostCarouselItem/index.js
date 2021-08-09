import React from 'react'
import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native'
import styles from './style'
import { useNavigation } from '@react-navigation/core'

const PostCarouselItem = (props) => {

    const post = props.post;
    // const width = useWindowDimensions().width
    const navigation = useNavigation();

    const gotToPostPage = () => {
        navigation.navigate('Post', { postId: post.id })
    }

    return (
        <Pressable onPress={gotToPostPage} style={styles.container}>
            <View style={styles.innerContainer}>

                {/* Image */}
                <Image style={styles.image} source={{ uri: post.image }}></Image>
                <View style={styles.textContainer}>

                    {/* Bed & Bedroom */}
                    <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

                    {/* Type & Description */}
                    <Text style={styles.description} numberOfLines={2}>{post.type}. {post.title}</Text>


                    {/* Old price & new price */}
                    <Text style={styles.prices}>
                        {/* <Text style={styles.oldPrice}>${post.oldPrice}</Text> */}
                        <Text style={styles.newPrice}> ${post.newPrice} </Text>
                        / night
                    </Text>
                </View>

            </View>
        </Pressable>
    )
}

export default PostCarouselItem
