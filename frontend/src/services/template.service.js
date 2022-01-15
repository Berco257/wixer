import Plus from '../assets/images/templates/plus.svg'
import Restaurant from '../assets/images/templates/restaurant.jpg'
import Mercedes from '../assets/images/templates/mercedes.jpg'
import Remodeling from '../assets/images/templates/remodeling.jpg'
import Denatal from '../assets/images/templates/dental.jpg'
import Beautycare from '../assets/images/templates/beautycare.jpg'
import Jewelry from '../assets/images/templates/jewelry.jpg'
import Construction from '../assets/images/templates/construction.jpg'
import Fylo from '../assets/images/templates/fylo.jpg'

import { restaurant } from '../templates/restaurant'
import { mercedes } from '../templates/mercedes'
import { remodeling } from '../templates/remodeling'
import { dental } from '../templates/dental'
import { construction } from '../templates/construction'
import { fylo } from '../templates/fylo'

const gTemplates = [restaurant, mercedes, remodeling, dental, construction, fylo]
const gTemplatePreviews = [
    {
        id: '',
        img: Plus,
        title: 'Start from scratch',
    },
    {
        id: '6164652f381d1f42015a3aaf',
        img: Construction,
        title: 'Construction',
    },
    {
        id: '6164819e8947b38deef91914',
        img: Restaurant,
        title: 'Restaurant',
    },
    {
        id: '6166e7bbfc3a6af25e470a2d',
        img: Mercedes,
        title: 'Mercedes',
    },
    {
        id: '6166c9c9fc3a6af25e470a25',
        img: Denatal,
        title: 'Dental Clinic',
    },
    {
        id: '6162fdf3d98455014b006966',
        img: Fylo,
        title: 'Fylo',
    },
    {
        id: '61628879223761233d27e194',
        img: Remodeling,
        title: 'Remodeling',
    },
    {
        id: 'demo1',
        img: Beautycare,
        title: 'Beauty Care',
    },
    {
        id: 'demo2',
        img: Jewelry,
        title: 'jewelry',
    },
]

const getAmountOfTemplates = (amount = 0) => {
    if (!amount) return gTemplatePreviews
    else return gTemplatePreviews.slice(0, amount)
}


const getTemplatesIds = () => {
    return gTemplatePreviews.map(template => template.id)
}

const getTemplate = (templateId) => {
    const template = JSON.parse(JSON.stringify(gTemplates.find(template => template._id === templateId)))
    return template
}

export const templateService = {
    getAmountOfTemplates,
    getTemplatesIds,
    getTemplate
}