
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const Menu = () => {
    return (
        <View>
            <View>
                <TouchableOpacity
                    // onPress={() => navigation.toggleDrawer()}
                    style={styles.menu}
                >
                    <Icon name="menu" size={35} color="white" />
                    {/* <Image
            source={require('../../../assets/menubar.png')}
            style={{ width: 30, height: 30, marginLeft: 10,  alignItems:'center'}}
          /> */}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        top: 5,
        left: 10,
        padding: 4,
        borderRadius: 30,
        backgroundColor: '#EE272E',
        zIndex: 1,
        alignItems: 'center',
    }
})