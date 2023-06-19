import { StyleSheet, Text, View } from 'react-native';
import { ProgramType } from '../../model/program/ProgramType';
import { Card } from 'react-native-paper';


const ProgramSearched = ({program} : {program: ProgramType}) => {
    

    return(
        <Card style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.nameText}>{program.name}</Text>
                <Text style={styles.objectiveText}>- {program.objective}</Text>
            </View>
            <Text style={styles.level}>NIVEAU : {program.level}</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#364d53",
        padding: 15,
        borderRadius: 25,
        marginBottom: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    level: {
        color: "white",

    },
    nameText: {
        color: "white",
        textTransform: "uppercase",
        fontSize: 16,

    },
    objectiveText: {
        color: "white",
        fontSize: 10

    }
  });


  export default ProgramSearched;