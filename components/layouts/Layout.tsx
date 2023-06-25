import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { StyleSheet, Text, View, ViewStyle, TouchableWithoutFeedback, Keyboard } from 'react-native';

type LayoutProps = {
  children: ReactNode;
  dark?: boolean;
  style?: ViewStyle;
}

export default function Layout({children, dark, style}: LayoutProps) {
  const layoutStyle = [styles.container, style];

  if (dark) {
    layoutStyle.push({ backgroundColor: "#364d53" });
    // JAM 60100B
    // ff8583
  } else {
    layoutStyle.push({ backgroundColor: '#fff' });
  }


    return (
    // NOTATION : Handle a TextInput correctly
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={layoutStyle}>
        {dark ? 
          <StatusBar style='light' />
        :
          <StatusBar style='auto' />
        }
        
        {children}
      </View>
    </TouchableWithoutFeedback>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      paddingHorizontal:20,
    },
  });
  
  