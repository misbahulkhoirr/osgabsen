import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Text } from '../../atoms'
import { colors } from '../../../utils'

const Loading = () => {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.loadingBackground,
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 18,
        color: colors.primary,
        // fontFamily: fonts.primary[600],
        marginTop: 16
    }
})
