import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './Title';
import Navigation from '../navigation/Navigation';


export default function Layout({children}:{children: ReactNode}) {

    return (
      <View style={styles.container}>
        {/* <Title title={props.title} subtitle={props.subtitle}/> */}
        {children}

        <Navigation />

      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:20,
      width: '100%',
      backgroundColor: "#fff",
    },
  });
  
  