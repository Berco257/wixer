import React, { useCallback } from 'react'
import debounce from 'lodash.debounce'
import { HeightEdit } from '../props/SizeEdit/HeightEdit'
import { geocodeService } from '../../../../../services/geocode.service'
import { MapEdit } from '../props/MapEdit'
import { RenderProps } from '../props/RenderProps'

export const GMapEdit = ({ style, data, updateCmp }) => {

    const onLocationChange = async (loc) => {
        const location = await geocodeService.getGeoLocation(loc)
        if (location) updateCmp('data', { ...data, lat: location.lat, lng: location.lng, location: loc })
    }

    const debouncedChangeHandler = useCallback(
        debounce(onLocationChange, 300)
        , [])

    const handleChange = ({ target }) => {
        const { name, value } = target
        updateCmp('data', { ...data, [name]: value })
        if (name === 'location') debouncedChangeHandler(value)
    }

    const onStyleChange = ({ target }) => {
        const { name, value } = target
        const newStyle = { ...style }
        newStyle[name] = value
        updateCmp('style', newStyle)
    }

    const propList = [
        {
            name: 'map',
            cmp: <MapEdit data={data} handleChange={handleChange} />
        },
        {
            name: 'height',
            cmp: <HeightEdit value={style.height} handleChange={onStyleChange} />
        }
    ]

    return (
        <div className="gmap-edit">
            <RenderProps propList={propList} />
        </div>
    )
}