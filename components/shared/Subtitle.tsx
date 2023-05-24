import { StyleSheet, Text, View } from 'react-native';

type SubtitleProps= {
    text: string;
}

export default function Subtitle(props: SubtitleProps) {
    return (
      <View>
          <Text style={styles.text}>{props.text}</Text>
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    text: {
        marginVertical: 20,
        fontSize: 20,
        color: "black",
        textTransform: "uppercase",
      }
  });
  
  