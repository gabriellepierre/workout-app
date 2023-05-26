import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

export default function DarkLayout({children}:{children: ReactNode}) {

    return (
      <View style={styles.container}>
        {children}
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
        paddingHorizontal:20,
        backgroundColor: '#4e5a65',
    },
  });
  
  