import React, { ReactNode } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';

interface ExerciseCardProps {
  onPress: () => void;
  title: string;
  bodyPart: string;
  image?: string;
  checkbox?: ReactNode;
  style?: boolean;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ onPress, title, image, bodyPart, checkbox, style }) => {
  const cardStyle = [styles.card];
  const titleStyle = [styles.title];
  const bodyPartStyle = [styles.bodyPart];

  if(style) {
    //@ts-ignore
    cardStyle.push({ backgroundColor: "#ec9374" });
  } else {
    //@ts-ignore
    titleStyle.push({ color: "#364d53" });
    //@ts-ignore
    bodyPartStyle.push({ color: "#364d53" });
  }
  return (
    <Card style={cardStyle}>
      <Card.Content>
        <View style={styles.justifiedContent}>
          <View style={styles.justifiedContent}>
            {image}
            <View>
              <Text style={titleStyle} numberOfLines={1}>{title}</Text>

              <Text style={bodyPartStyle} numberOfLines={1}>{bodyPart}</Text>
            </View>
          </View>

          {checkbox}
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
    // display: "inline-flex",
  },
  justifiedContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bodyPart: {
    fontSize: 15,
    color: "white",
  }
});

export default ExerciseCard;
