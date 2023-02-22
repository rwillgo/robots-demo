import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import BotItem from '../../components/BotItem';
import ModalLoader from '../../components/ModalLoader';
import useHomeScreen from './hook';
import styles from './styles';

function HomeScreen(props) {
  const {isFetching, error, bots, onRefreshHandler, onCreateHandler} =
    useHomeScreen(props);

  const renderEmpty = () => {
    return (
      <View style={styles.emptyView}>
        <Text>Tap "Refresh" to list all bots</Text>
      </View>
    );
  };

  const renderError = () => {
    return (
      <View style={styles.emptyView}>
        <Text>{error}</Text>
      </View>
    );
  };

  const renderItem = item => {
    return (
      <BotItem
        item={item}
        onEditSuccess={onRefreshHandler}
        onRemoveSuccess={onRefreshHandler}
      />
    );
  };

  const renderItemSeparator = () => {
    return <View style={styles.spacer} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonsView}>
        <TouchableOpacity onPress={onRefreshHandler}>
          <Text style={styles.buttonLabel}>Refresh</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCreateHandler}>
          <Text style={styles.buttonLabel}>Create Bot</Text>
        </TouchableOpacity>
      </View>
      {!error ? (
        <FlatList
          style={styles.flatList}
          data={bots}
          contentContainerStyle={styles.contentContainer}
          renderItem={renderItem}
          ItemSeparatorComponent={renderItemSeparator}
          ListEmptyComponent={renderEmpty}
        />
      ) : (
        renderError()
      )}
      {isFetching && <ModalLoader />}
    </SafeAreaView>
  );
}

export default HomeScreen;
