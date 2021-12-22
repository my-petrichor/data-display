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

export async function dynamic_demo(onmessage) {
    const ws = new WebSocket('ws://192.168.3.3:7000/api/v1/ws');
    ws.onopen = () => {
        console.log('websocket connection construct succeed');
    };

    ws.onmessage = onmessage;

    ws.onclose = (e) => {
        console.log('websocket connection close, reason:%s, code:%d\n', e.message, e.code);
    };

    ws.onerror = (e) => {
        console.log('come across error:%s\n', e.error);
    };
}