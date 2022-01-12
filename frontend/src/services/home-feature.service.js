import { utilService } from './util.service'
import Feature1 from '../assets/images/home/features/feature1.png'
import Feature2 from '../assets/images/home/features/feature2.png'
import Feature3 from '../assets/images/home/features/feature3.png'

const gFeatures = [
    {
        id: utilService.makeId(),
        title: 'JUST DRAG & DROP',
        txt: 'With a super most innovative drag and drop website builder, you can design any website you want. Just Drag, Drop and Customize! All the templates below were built using Wixer Platform.',
        img: Feature1
    },
    {
        id: utilService.makeId(),
        title: 'WIXER EDITOR',
        txt: 'Start from scratch or choose from over designer-made templates that you can fully customize using Wixer website Editor.',
        img: Feature2
    },
    {
        id: utilService.makeId(),
        title: 'SUITED FOR ANY OF YOUR NEEDS',
        txt: 'Design and build your own high-quality websites. Whether you’re promoting your business, showcasing your work, opening your store or starting a blog you can do it all with the Wixer website builder.',
        img: Feature3
    }
]

const getFeatures = () => gFeatures

export const homeFeatureService = {
    getFeatures
}