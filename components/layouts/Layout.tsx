import React, { ReactNode } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

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
      <View style={layoutStyle}>
        {children}

      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      paddingHorizontal:20,
    },
  });
  
  