import { request } from 'umi';

export async function get_data(params) {
    return request('/sensor/spectrum/measure', {
        method: 'POST',
        params: {...params },
    });
}

export async function get_dynamic() {
    return request('/sensor/spectrum/val', {
        method: 'GET',
    });
}