import React from 'react'
import { COLUMN, INNERSECTION, SECTION } from '../../../../js/constants'
import { ColumnSectionEdit } from './items/ColumnSectionEdit'
import { ImageEdit } from './items/ImageEdit'
import { TextEdit } from './items/TextEdit'
import { NavEdit } from './items/NavEdit'
import { ButtonEdit } from './items/ButtonEdit'
import { VideoEdit } from './items/VideoEdit'
import { GMapEdit } from './items/GMapEdit'
import { SocialIconsEdit } from './items/SocialIconsEdit'
import { CarouselEdit } from './items/CarouselEdit/CarouselEdit'
import { FormEdit } from './items/FormEdit'

export const EditTab = ({ type, style, data, updateCmp }) => {
    const props = { style, updateCmp, data }

    switch (type) {
        case COLUMN:
        case SECTION:
        case INNERSECTION: return <ColumnSectionEdit {...props} />
        case 'button': return <ButtonEdit {...props} />
        case 'carousel': return <CarouselEdit {...props} />
        case 'form': return <FormEdit {...props} />
        case 'GMap': return <GMapEdit {...props} />
        case 'image': return <ImageEdit {...props} />
        case 'nav': return <NavEdit {...props} />
        case 'social': return <SocialIconsEdit {...props} />
        case 'text': return <TextEdit {...props} />
        case 'video': return <VideoEdit {...props} />
        default: return <></>
    }
}