import { StyleSheet, Text, View } from 'react-native';

type TitleProps= {
    title: string;
    subtitle: string;
}

export default function Title(props: TitleProps) {
    return (
      <View>
          <Text style={styles.title}>{props.title}</Text>
          
          <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    title: {
      marginTop: 60,
      fontSize: 80,
      fontWeight: "800",
      color: "black",
    },
    subtitle: {
        marginVertical: 20,
        fontSize: 20,
        color: "black",
        textTransform: "uppercase",
      }
  });
  
  