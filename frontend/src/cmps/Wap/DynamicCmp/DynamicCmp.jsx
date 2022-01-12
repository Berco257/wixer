import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDrag } from 'react-dnd'
import { translateStyle } from '../../../services/util.service'
import { COMPONENT } from '../../../js/constants'
import { Image } from './Image'
import { Text } from './Text'
import { Video } from './Video'
import { Nav } from './Nav/Nav'
import { Button } from './Button'
import { Actions } from '../Actions'
import { GMap } from './GMap'
import { SocialIcons } from './SocialIcons/SocialIcons'
import { Carousel } from './Carousel/Carousel'
import { ContactForm } from './ContactForm/ContactForm'

export const DynamicCmp = ({ cmp, path, updateCmp, select, selected }) => {
  const isEditor = useLocation().pathname.includes('editor')
  const ref = useRef(null)
  const [actionsVisible, setActionsVisible] = useState(false)
  const component = cmp.component
  const { gap, alignItems, justifyContent, display } = cmp.component.style
  const { id } = cmp

  const [{ isDragging }, drag] = useDrag({
    type: COMPONENT,
    item: {
      type: COMPONENT,
      id: cmp.id,
      path,
      style: cmp.style,
      component: cmp.component
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const opacity = isDragging ? 0.2 : 1
  drag(ref)

  const onSelect = (ev) => {
    ev.stopPropagation()
    select('component', path.split('-'))
  }

  const onUpdateCmp = (field, value) => {
    updateCmp(selected, field, value)
  }

  const getCmp = (component) => {
    const { data, style, type } = component

    const props = {
      id,
      data,
      style: translateStyle({ ...style }),
      path,
      selected,
      updateCmp: onUpdateCmp
    }

    switch (type) {
      case 'text': return <Text {...props} />
      case 'image': return <Image {...props} />
      case 'video': return <Video {...props} />
      case 'nav': return <Nav {...props} />
      case 'button': return <Button {...props} />
      case 'GMap': return <GMap {...props} />
      case 'social': return <SocialIcons {...props} />
      case 'carousel': return <Carousel {...props} />
      case 'form': return <ContactForm {...props} />
      default: return <></>
    }
  }

  const getClass = () => {
    let classes = `component draggable ${component.type}`
    if (selected && selected.id === cmp.id) classes += ' selected'
    if (actionsVisible) classes += ' element-hover'
    return classes
  }

  return (
    <div
      ref={isEditor ? ref : null}
      style={{ opacity, gap: (cmp.component.type === 'nav') ? '' : gap, alignItems, justifyContent, display }}
      className={getClass()}
      onClick={isEditor ? onSelect : () => { }}
      onMouseEnter={isEditor ? () => { setActionsVisible(true) } : () => { }}
      onMouseLeave={isEditor ? () => { setActionsVisible(false) } : () => { }}
    >
      {getCmp(component)}
      {isEditor && actionsVisible && <Actions path={path} type={COMPONENT} />}
    </div>
  )
}
