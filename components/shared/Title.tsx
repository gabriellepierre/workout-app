import { StyleSheet, Text, View, ViewStyle } from 'react-native';

type TitleProps= {
    title: string;
    subtitle: string;
    dark?: boolean;
}

export default function Title({title, subtitle, dark}: TitleProps) {
  const titleStyle = [styles.title];
  const subtitleStyle = [styles.subtitle];
  if (dark) {
    //@ts-ignore
    titleStyle.push({ color: 'white' });
    //@ts-ignore
    subtitleStyle.push({ color: 'white'});
  } 
    return (
      <View>
          <Text style={titleStyle}>{title}</Text>
          
          <Text style={subtitleStyle}>{subtitle}</Text>
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    title: {
      marginTop: 60,
      fontSize: 80,
      fontWeight: "800",
      color: "#364d53"
    },
    subtitle: {
        marginVertical: 20,
        fontSize: 20,
        textTransform: "uppercase",
      }
  });
  
  