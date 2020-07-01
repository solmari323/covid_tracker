import {client} from '../../../api';

export const getCountryData = country => client.get(`dayone/country/${country}/status/confirmed`);