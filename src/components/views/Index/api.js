import {client} from '../../../api';

export const getCountryData = (country, data_type) => client.get(`dayone/country/${country}/status/${data_type}`);
export const getCountrySummary = () => client.get(`summary`);