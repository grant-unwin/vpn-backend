/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { city } from './city';

export interface country {
    id?: number;
    name?: string;
    icon?: string;
    cities?: Array<city>;
}
