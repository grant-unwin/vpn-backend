/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { server } from './server';

export interface city {
    id?: number;
    name?: string;
    servers?: Array<server>;
}
