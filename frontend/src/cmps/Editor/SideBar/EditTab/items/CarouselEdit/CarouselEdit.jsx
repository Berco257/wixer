import React, { useState } from 'react'
import { uploadImg } from '../../../../../../services/cloudinary.service'
import { utilService } from '../../../../../../services/util.service'
import { AddImage } from './AddImage'
import { Image } from './Image'
import { ImageLabel } from './ImageLabel'
import { Actions } from './Actions'

export const CarouselEdit = ({ data, updateCmp }) => {
  const [images, setImages] = useState(data.images)

  const handleChange = ({ target }) => {
    const label = target.value
    const imgIdx = target.name
    const newImages = [...images]
    newImages[imgIdx].label = label
    setImages(newImages)
    updateCmp('data', { images: newImages })
  }

  const onUploadImage = (imgPath, imgIdx) => {
    const newImages = [...images]
    newImages[imgIdx].imgPath = imgPath
    setImages(newImages)
    updateCmp('data', { images: newImages })
  }

  const onAdd = () => {
    const newImages = [...images]
    const image = {
      id: utilService.makeId(),
      label: 'Bird',
      imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format'
    }
    newImages.unshift(image)
    setImages(newImages)
    updateCmp('data', { images: newImages })
  }

  const onRemove = (imgIdx) => {
    const newImages = [...images]
    newImages.splice(imgIdx, 1)
    setImages(newImages)
    updateCmp('data', { images: newImages })
  }

  return (
    <div className="carousel-edit">
      <AddImage onAdd={onAdd} />
      {images.map((image, idx) => {
        return (
          <div key={image.id} className="edit">
            <Image
              image={image}
            />
            <ImageLabel
              image={image}
              idx={idx}
              handleChange={handleChange}
            />
            <Actions
              image={image}
              idx={idx}
              uploadImg={uploadImg}
              onUploadImage={onUploadImage}
              onRemove={onRemove}
            />
          </div>
        )
      })}
    </div>
  )
}