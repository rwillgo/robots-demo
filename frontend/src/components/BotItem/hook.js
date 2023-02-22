import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Types from '../../store/actions';
import ActionSheet from '@powerdesigninc/react-native-actionsheet';
import NavigationService from '../../navigation/NavigationService';

const useBotItem = props => {
  const isInitialMount = useRef(true);
  const {item, onEditSuccess, onRemoveSuccess} = props;
  const {name, purpose} = item.item;

  const dispatch = useDispatch();
  const removeRequestType = useSelector(
    state => state.botsReducer?.removeRequestType,
  );
  const removeErrorMessage = useSelector(
    state => state.botsReducer?.removeErrorMessage,
  );

  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (!isFetching) {
        return;
      }
      switch (removeRequestType) {
        case Types.BOTS_REMOVE_REQUEST:
          break;
        case Types.BOTS_REMOVE_SUCCESS:
          setIsFetching(false);
          onRemoveSuccess();
          break;
        default:
          setIsFetching(false);
          setError(removeErrorMessage.message);
          break;
      }
    }
  }, [removeRequestType]);

  const onRemoveHandler = () => {
    const params = {botId: item.item._id};
    dispatch({type: Types.BOTS_REMOVE_REQUEST, params});
    setIsFetching(true);
  };

  const onEditHandler = () => {
    const params = {botId: item.item._id, callback: onEditSuccess};
    NavigationService.navigate('CreateBot', params);
  };

  const onOptionsHandler = () => {
    const options = ['Edit bot', 'Delete bot', 'Cancel'];
    ActionSheet.showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex: 2,
        cancelButtonIndex: 2,
      },
      index => {
        switch (index) {
          case 0:
            onEditHandler();
            break;
          case 1:
            onRemoveHandler();
            break;
          default:
            break;
        }
      },
    );
  };

  return {name, purpose, onOptionsHandler};
};

export default useBotItem;
