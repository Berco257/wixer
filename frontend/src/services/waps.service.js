import { userService } from './user.service'
import { construction } from '../templates/construction'
import { dental } from '../templates/dental'
import { fylo } from '../templates/fylo'
import { mercedes } from '../templates/mercedes'
import { remodeling } from '../templates/remodeling'
import { restaurant } from '../templates/restaurant'
import { utilService } from './util.service'

const STORAGE_KEY_WAPS = 'waps'
const gWaps = JSON.parse(localStorage.getItem(STORAGE_KEY_WAPS)) ||
    [construction, dental, fylo, mercedes, remodeling, restaurant]

const save = async wap => {
    await _delay()

    const wapToSave = { ...wap }
    delete wapToSave.selected
    delete wapToSave.loader

    const loggedInUser = userService.getLoggedinUser()
    if (loggedInUser) wapToSave.owner = loggedInUser._id

    if (wapToSave._id) {
        const wapIdx = gWaps.findIndex(wap => wap._id === wapToSave._id)
        gWaps[wapIdx] = wapToSave
    } else {
        wapToSave._id = utilService.makeId()
        gWaps.push(wapToSave)
    }
    _saveWaps()
    return Promise.resolve(wapToSave)
}

const remove = async wapId => {
    await _delay()

    const loggedInUser = userService.getLoggedinUser()
    if (!loggedInUser) return Promise.reject('Please login first')

    const wapIdx = gWaps.findIndex(wap => wap._id === wapId && wap.owner === loggedInUser._id)
    if (wapIdx === -1) return Promise.reject('Cannot delete website')

    gWaps.splice(wapIdx, 1)
    _saveWaps()
    return Promise.resolve({ msg: 'Deleted successfully' })
}

const getById = async wapId => {
    await _delay()

    const wap = JSON.parse(JSON.stringify(gWaps.find(w => w._id === wapId)))
    if (!wap) return Promise.reject('Page cannot be found')
    return Promise.resolve(wap)
}

const getByName = async wapName => {
    await _delay()

    const wap = JSON.parse(JSON.stringify(gWaps.find(w => w.name === wapName)))
    if (!wap) return Promise.reject('Page cannot be found')
    return Promise.resolve(wap)
}

const getWaps = async () => {
    await _delay()

    const loggedInUser = userService.getLoggedinUser()
    if (!loggedInUser) return Promise.reject('Please login first')

    const waps = JSON.parse(JSON.stringify(gWaps.filter(wap => wap.owner === loggedInUser._id)))
    return Promise.resolve(waps)
}

const sendLead = async (wapName, lead) => {
    await _delay()

    lead.id = utilService.makeId()
    const wapIdx = gWaps.findIndex(wap => wap.name === wapName)
    gWaps[wapIdx].leads ? gWaps[wapIdx].leads.push(lead) : gWaps[wapIdx].leads = [lead]

    _saveWaps()
    return Promise.resolve(lead)
}

const _saveWaps = () => {
    localStorage.setItem(STORAGE_KEY_WAPS, JSON.stringify(gWaps))
}

const _delay = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, 500)
    })
}

export const wapService = {
    save,
    remove,
    getById,
    getByName,
    sendLead,
    getWaps
}
