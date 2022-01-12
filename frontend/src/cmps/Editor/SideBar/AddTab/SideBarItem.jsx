import React from 'react'
import { useDrag } from 'react-dnd'

import ViewColumnIcon from '@mui/icons-material/ViewColumn'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import SmartButtonIcon from '@mui/icons-material/SmartButton'
import Crop75Icon from '@mui/icons-material/Crop75'
import RoomIcon from '@mui/icons-material/Room'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel'
import EmailIcon from '@mui/icons-material/Email'

import header1 from '../../../../assets/images/side-bar/header/header1.jpg'
import header2 from '../../../../assets/images/side-bar/header/header2.jpg'

import nav1 from '../../../../assets/images/side-bar/nav/nav1.jpg'

import furniCarousle from '../../../../assets/images/side-bar/section/furniCarousle.jpg'
import gallery from '../../../../assets/images/side-bar/section/gallery.jpg'
import headerConstruction from '../../../../assets/images/side-bar/section/headerConstruction.jpg'
import hero1 from '../../../../assets/images/side-bar/section/hero1.jpg'
import hero2 from '../../../../assets/images/side-bar/section/hero2.jpg'
import hero3 from '../../../../assets/images/side-bar/section/hero3.jpg'
import remodelingServices from '../../../../assets/images/side-bar/section/remodelingServices.jpg'
import sectionMeal from '../../../../assets/images/side-bar/section/sectionMeal.jpg'
import testimonials from '../../../../assets/images/side-bar/section/testimonials.jpg'

import dentalFooter from '../../../../assets/images/side-bar/footer/dentalFooter.jpg'
import dentalFooterUpper from '../../../../assets/images/side-bar/footer/dentalFooterUpper.jpg'
import dentalFotterCallNow from '../../../../assets/images/side-bar/footer/dentalFotterCallNow.jpg'
import footer1 from '../../../../assets/images/side-bar/footer/footer1.jpg'
import footer2 from '../../../../assets/images/side-bar/footer/footer2.jpg'
import remodeling from '../../../../assets/images/side-bar/footer/remodeling.jpg'

import dentalHero from '../../../../assets/images/templates/dental/dentalHero.jpg'
import dentalReviews from '../../../../assets/images/templates/dental/dentalReviews.jpg'
import dentalServices from '../../../../assets/images/templates/dental/dentalServices.jpg'
import dentist from '../../../../assets/images/templates/dental/dentist.jpg'

const KeysToComponentMap = {
  header1,
  header2,
  hero1,
  hero2,
  hero3,
  dentalHero,
  gallery,
  furniCarousle,
  footer1,
  footer2,
  nav1,
  dentalFooter,
  dentalReviews,
  dentalServices,
  testimonials,
  remodelingServices,
  headerConstruction,
  dentist,
  sectionMeal,
  dentalFotterCallNow,
  dentalFooterUpper,
  remodeling,
}

const KeysToIconMap = {
  'ViewColumnIcon': <div className="icon"><ViewColumnIcon /></div>,
  'TextFieldsIcon': <div className="icon"><TextFieldsIcon /></div>,
  'VideoLibraryIcon': <div className="icon"><VideoLibraryIcon /></div>,
  'InsertPhotoIcon': <div className="icon"><InsertPhotoIcon /></div>,
  'SmartButtonIcon': <div className="icon"><SmartButtonIcon /></div>,
  'Crop75Icon': <div className="icon"><Crop75Icon /></div>,
  'RoomIcon': <div className="icon"><RoomIcon /></div>,
  'GroupAddIcon': <div className="icon"><GroupAddIcon /></div>,
  'ViewCarouselIcon': <div className="icon"><ViewCarouselIcon /></div>,
  'EmailIcon': <div className="icon"><EmailIcon /></div>,
}

export const SideBarItem = ({ data, type }) => {
  const [{ opacity }, drag] = useDrag({
    type,
    item: data,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.2 : 1
    })
  })

  return (
    <div
      className="side-bar-item flex direction-column justify-center"
      ref={drag}
      style={{ opacity }}
    >
      {data.icon && KeysToIconMap[data.icon]}
      {!data.image && (data.name || data.component.type)}
      {data.image && <img alt="cmp preview" src={KeysToComponentMap[data.image]} />}
    </div >
  )
}

