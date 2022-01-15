import { httpService } from '../services/http.service'
import { templateService } from './template.service'

async function save(wap) {
    delete wap.selected;
    delete wap.loader;
    if (wap._id) return await httpService.put(`wap/${wap._id}`, wap);
    else return await httpService.post('wap', wap)
}

async function remove(wapId) {
    return await httpService.delete(`wap/${wapId}`);
}

async function getById(wapId) {
    if (templateService.getTemplatesIds().includes(wapId)) {
        return templateService.getTemplate(wapId)
    }
    return await httpService.get(`wap?wapId=${wapId}`)
}

async function getByName(wapName) {
    return await httpService.get(`wap?wapName=${wapName}`)
}

async function getWaps() {
    try {
        return await httpService.get(`wap/waps`)
    } catch (err) {
        if (err?.response?.status === 401) throw ('Please login first.')
        else throw ('Error. please try later.')
    }
}

export const wapService = {
    save,
    remove,
    getById,
    getByName,
    getWaps
}
