import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Types from '../../store/actions';
import NavigationService from '../../navigation/NavigationService';

const useHomeScreen = () => {
  const isInitialMount = useRef(true);

  const dispatch = useDispatch();
  const bots = useSelector(state => state.botsReducer?.bots);
  const listRequestType = useSelector(
    state => state.botsReducer?.listRequestType,
  );
  const listErrorMessage = useSelector(
    state => state.botsReducer?.listErrorMessage,
  );

  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      switch (listRequestType) {
        case Types.BOTS_LIST_REQUEST:
          setIsFetching(true);
          break;
        case Types.BOTS_LIST_SUCCESS:
          setIsFetching(false);
          break;
        default:
          setIsFetching(false);
          setError(listErrorMessage.message);
          break;
      }
    }
  }, [listRequestType]);

  const getList = () => {
    dispatch({type: Types.BOTS_LIST_REQUEST});
  };

  const onRefreshHandler = () => {
    getList();
  };

  const onCreateHandler = () => {
    const params = {callback: onRefreshHandler};
    NavigationService.navigate('CreateBot', params);
  };

  return {
    isFetching,
    error,
    bots,
    onRefreshHandler,
    onCreateHandler,
  };
};

export default useHomeScreen;
