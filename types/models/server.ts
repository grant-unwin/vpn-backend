/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export interface server {
    id?: number;
    country?: number;
    address?: string;
    protocols?: server.protocols;
}

export namespace server {

    export enum protocols {
        IPSEC = 'ipsec',
        OPENVPN = 'openvpn',
    }


}
