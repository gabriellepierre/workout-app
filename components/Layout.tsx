import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from '../navigation/Navigation';

export default function Layout({children}:{children: ReactNode}) {

    return (
      <View style={styles.container}>
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
  
  