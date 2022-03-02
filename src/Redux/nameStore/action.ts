import { auth, getToken, getUuid, getId, getMe, getCard, createCard1, getOperations1, creatOperations1 } from './service';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { userInterfece, changesNameInterfece, getLimitUserInterfece } from '../../../types/ContainerTypes';

export const authItem = createAsyncThunk(
  'auth',
  async (data: any) => {
    const response = await auth(data);
    return response;
  }
);

export const getTokenItem = createAsyncThunk(
  'get_token',
  async (data: any) => {
    const response = await getToken(data);
    return response;
  }
);

export const getUserId = createAsyncThunk(
  'get_id',
  async () => {
    const response = await getId();
    return response;
  }
);

export const getUserUuid = createAsyncThunk(
  'get_uuid',
  async () => {
    const response = await getUuid();
    return response;
  }
);

export const getMeInfo = createAsyncThunk(
  'get_me',
  async () => {
    const response = await getMe();
    return response;
  }
);

export const getCards = createAsyncThunk(
  'get_cards',
  async () => {
    const response = await getCard();
    return response;
  }
);

export const createCard = createAsyncThunk(
  'create_cards',
  async (data:any) => {
    const response = await createCard1(data);
    return response;
  }
);

export const getOperations = createAsyncThunk(
  'get_operations',
  async () => {
    const response = await getOperations1();
    return response;
  }
);

export const creatOperations = createAsyncThunk(
  'creat_operations',
  async (data:any) => {
    const response = await creatOperations1(data);
    return response;
  }
);

