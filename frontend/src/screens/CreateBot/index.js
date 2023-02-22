import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ModalLoader from '../../components/ModalLoader';
import useCreateBot from './hook';
import styles from './styles';

function CreateBot(props) {
  const {
    isFetching,
    isEditing,
    error,
    name,
    purpose,
    setName,
    setPurpose,
    onCreateHandler,
    onUpdateHandler,
    onBackPressHandler,
  } = useCreateBot(props);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonsView}>
        <TouchableOpacity onPress={onBackPressHandler}>
          <Text style={styles.buttonLabel}>Back</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.inputContainer}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.inputView}>
          <Text style={styles.textLabel}>Bot Name</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            multiline={true}
            onChangeText={setName}
          />
        </View>
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        <View style={styles.inputView}>
          <Text style={styles.textLabel}>Purpose</Text>
          <TextInput
            style={styles.textInput}
            value={purpose}
            multiline={true}
            onChangeText={setPurpose}
          />
        </View>
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        <View style={styles.submitView}>
          <TouchableOpacity
            onPress={isEditing ? onUpdateHandler : onCreateHandler}>
            <Text style={styles.submitText}>
              {isEditing ? 'UPDATE' : 'CREATE'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {isFetching && <ModalLoader />}
    </SafeAreaView>
  );
}

export default CreateBot;
