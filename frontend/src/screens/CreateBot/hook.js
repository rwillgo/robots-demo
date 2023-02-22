import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
import Types from '../../store/actions';
import NavigationService from '../../navigation/NavigationService';

const useCreateBot = props => {
  const isInitialMount = useRef(true);

  const dispatch = useDispatch();

  // create bot
  const createRequestType = useSelector(
    state => state.botsReducer?.createRequestType,
  );
  const createErrorMessage = useSelector(
    state => state.botsReducer?.createErrorMessage,
  );

  // fetch bot
  const fetchedBot = useSelector(state => state.botsReducer?.fetchedBot);
  const fetchRequestType = useSelector(
    state => state.botsReducer?.fetchRequestType,
  );
  const fetchErrorMessage = useSelector(
    state => state.botsReducer?.fetchErrorMessage,
  );

  // update bot
  const updateRequestType = useSelector(
    state => state.botsReducer?.updateRequestType,
  );
  const updateErrorMessage = useSelector(
    state => state.botsReducer?.updateErrorMessage,
  );

  const [isFetching, setIsFetching] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const [purpose, setPurpose] = useState(null);

  useEffect(() => {
    const {botId} = props.route.params;
    if (botId) {
      setIsEditing(true);
      fetchBot(botId);
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      switch (createRequestType) {
        case Types.BOTS_CREATE_REQUEST:
          break;
        case Types.BOTS_CREATE_SUCCESS:
          setIsFetching(false);
          onBackPressHandler();
          Alert.alert('New bot created!', [
            {
              text: 'OK',
              onPress: null,
            },
          ]);
          break;
        default:
          setIsFetching(false);
          setError(createErrorMessage.message);
          break;
      }
    }
  }, [createRequestType]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (!isEditing) {
        return;
      }
      switch (fetchRequestType) {
        case Types.BOTS_FETCH_REQUEST:
          break;
        case Types.BOTS_FETCH_SUCCESS:
          setName(fetchedBot.name);
          setPurpose(fetchedBot.purpose);
          setIsFetching(false);
          break;
        default:
          setIsFetching(false);
          setError(fetchErrorMessage.message);
          break;
      }
    }
  }, [fetchRequestType]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (!isEditing) {
        return;
      }
      switch (updateRequestType) {
        case Types.BOTS_UPDATE_REQUEST:
          break;
        case Types.BOTS_UPDATE_SUCCESS:
          setIsFetching(false);
          onBackPressHandler();

          Alert.alert('Bot successfully updated!', [
            {
              text: 'OK',
              onPress: null,
            },
          ]);
          break;
        default:
          setIsFetching(false);
          setError(updateErrorMessage.message);
          break;
      }
    }
  }, [updateRequestType]);

  const fetchBot = botId => {
    const params = {botId};
    dispatch({type: Types.BOTS_FETCH_REQUEST, params});
    setIsFetching(true);
  };

  const onCreateHandler = () => {
    const data = {name, purpose};
    const params = {data};
    dispatch({type: Types.BOTS_CREATE_REQUEST, params});
    setIsFetching(true);
  };

  const onUpdateHandler = () => {
    const botId = props.route.params.botId;
    const data = {name, purpose};
    const params = {botId, data};
    dispatch({type: Types.BOTS_UPDATE_REQUEST, params});
    setIsFetching(true);
  };

  const onBackPressHandler = () => {
    const {callback} = props.route.params;
    if (callback) {
      callback();
    }
    NavigationService.goBack();
  };

  return {
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
  };
};

export default useCreateBot;
