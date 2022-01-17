import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { isMobile } from 'react-device-detect'
import { Tab, Tabs } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox'
import EditIcon from '@mui/icons-material/Edit'
import { Undo } from './Undo'
import { TabItems } from './TabItems'
import { SavePublish } from './SavePublish'
import { SaveModal } from './SaveModal/SaveModal'
import { saveWap } from '../../../store/actions/wap.actions'
import { eventBusService } from '../../../services/eventbus.service'

export const SideBar = ({ selected, updateCmp, onUndo, chat, setChatIsEnabled, setChatTxt }) => {
    const dispatch = useDispatch()

    const [isEdit, setIsEdit] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isPublishModal, setIsPublishModal] = useState(false)

    const _id = useSelector(state => state.wapReducer._id)
    const cmps = useSelector(state => state.wapReducer.cmps)
    const style = useSelector(state => state.wapReducer.style)
    const name = useSelector(state => state.wapReducer.name)

    useEffect(() => {
        const removeEventBus = eventBusService.on('componentSelected', () => { setIsEdit(true) })
        return () => {
            removeEventBus()
        }
    }, [])

    const handleChange = (ev, value) => {
        setIsEdit(value === 'add' ? false : true)
    }

    const onUpdateCmp = (field, data) => {
        updateCmp(selected, field, data)
    }

    const onSave = async newName => {
        if (!_id) return
        const wapName = newName || name
        const wap = { _id, cmps, style, chat, name: wapName }
        await dispatch(saveWap(wap))
    }

    return (
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
            <section className="side-bar">
                <Tabs
                    className='tabs'
                    value={isEdit ? 'edit' : 'add'}
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab icon={<AddBoxIcon />} className="tab add" label="Add" value="add" />
                    <Tab icon={<EditIcon />} className="tab edit" label="Edit" value="edit" />
                </Tabs>
                <Undo onUndo={onUndo} />
                <TabItems
                    selected={selected}
                    onUpdateCmp={onUpdateCmp}
                    isEdit={isEdit}
                    chat={chat}
                    setChatIsEnabled={setChatIsEnabled}
                    setChatTxt={setChatTxt}
                />
                <SavePublish
                    setIsPublishModal={setIsPublishModal}
                    setIsModalOpen={setIsModalOpen}
                />
                <SaveModal
                    name={name}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    onSave={onSave}
                    isPublish={isPublishModal}
                />
            </section>
        </DndProvider>
    )
}