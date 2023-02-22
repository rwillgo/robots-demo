import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import useBotItem from './hook';
import styles from './styles';

const BotItem = props => {
  const {name, purpose, onOptionsHandler} = useBotItem(props);

  return (
    <View style={styles.container}>
      <View style={styles.nameView}>
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>
        <TouchableOpacity onPress={onOptionsHandler}>
          <Feather name="more-horizontal" size={25} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.spacer} />
      <View>
        <Text style={styles.purpose} numberOfLines={20}>
          {purpose}
        </Text>
      </View>
    </View>
  );
};

export default BotItem;
