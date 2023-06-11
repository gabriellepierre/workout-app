import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '../shared/PrimaryButton';
import { PROGRAM_LEVEL } from '../../model/program/Level';
import { PROGRAM_OBJECTIVE } from '../../model/program/Objective';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose }) => {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const handleApplyFilters = () => {
    // Gérer l'application des filtres ici
    console.log('Option 1 sélectionnée :', selectedOption1);
    console.log('Option 2 sélectionnée :', selectedOption2);

    onClose(); // Fermer la modal après avoir appliqué les filtres
  };

  const objectives = PROGRAM_OBJECTIVE;
  const levels = PROGRAM_LEVEL;

  const handleClearFilters = () => {
    // Gérer la réinitialisation des filtres ici
    setSelectedOption1(null);
    setSelectedOption2(null);
  };

  return (
      <Modal visible={visible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filtrer par</Text>
            <View style={styles.filterSection}>
              <Text style={styles.filterSectionTitle}>Objectif</Text>

              {objectives.map((item) => 
                <TouchableOpacity
                style={styles.radioButton}
                onPress={() => setSelectedOption1(item)}
              >
                <Ionicons
                  name={selectedOption1 === item ? 'md-radio-button-on' : 'md-radio-button-off'}
                  size={24}
                  color="#fff"
                />
                <Text style={styles.radioButtonLabel}>{item}</Text>
              </TouchableOpacity>
              )}
            </View>
            <View style={styles.filterSection}>
              <Text style={styles.filterSectionTitle}>Niveau</Text>
              
              {levels.map((item) => 
                <TouchableOpacity
                  style={styles.radioButton}
                  onPress={() => setSelectedOption2(item)}
                >
                  <Ionicons
                    name={selectedOption2 === item ? 'md-radio-button-on' : 'md-radio-button-off'}
                    size={24}
                    color="#fff"
                  />
                  <Text style={styles.radioButtonLabel}>{item}</Text>
                </TouchableOpacity>
                )}
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={handleClearFilters} title='Réinitialiser' color='#ec9374' textStyle={{color: "white"}} />

              <PrimaryButton onPress={handleApplyFilters} title='Appliquer' color='white' textStyle={{color: "black"}} />
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Ionicons name="md-close" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#364d53',
    borderRadius: 20,
    padding: 20,
    // alignItems: 'center',
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 16,
    color: 'white',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  filterSection: {
    marginBottom: 20,
  },
  filterSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioButtonLabel: {
    marginLeft: 8,
    color: 'white',
    textTransform: "uppercase"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 40,
    width: '100%',
    gap: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "white",
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
});

export default FilterModal;
