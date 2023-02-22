import axios from 'axios';
import server from '../../constants/config';

export const list = () => {
  const method = 'GET';
  const url = `${server.BASE_URL}/bots/`;
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  };
  return axios({
    method,
    url,
    headers,
  });
};

export const create = params => {
  const method = 'POST';
  const url = `${server.BASE_URL}/bots/`;
  const headers = {
    'Content-Type': 'application/json',
  };
  const data = JSON.stringify(params.data);
  return axios({
    method,
    url,
    data,
    headers,
  });
};

export const fetch = params => {
  const method = 'GET';
  const url = `${server.BASE_URL}/bots/${params.botId}`;
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  };
  return axios({
    method,
    url,
    headers,
  });
};

export const update = params => {
  const method = 'PUT';
  const url = `${server.BASE_URL}/bots/${params.botId}`;
  const headers = {
    'Content-Type': 'application/json',
  };
  const data = JSON.stringify(params.data);
  return axios({
    method,
    url,
    data,
    headers,
  });
};

export const remove = params => {
  const method = 'DELETE';
  const url = `${server.BASE_URL}/bots/${params.botId}`;
  const headers = {
    'Content-Type': 'application/json',
  };
  return axios({
    method,
    url,
    headers,
  });
};
