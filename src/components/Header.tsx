import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#27B07D',
        height: 100,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
    },

    headerText: {
        fontSize: 20,
        color: 'rgba(0, 0, 0, .6)',
        paddingTop: 30,
        textAlign: 'center',
        letterSpacing: 3,
        fontFamily: 'Cinzel_700Bold'
    },
});

export default Header;