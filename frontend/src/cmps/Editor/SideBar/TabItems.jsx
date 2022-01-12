import React from 'react'
import { StyledEngineProvider } from '@mui/styled-engine'
import { AddTab } from './AddTab/AddTab'
import { EditTab } from './EditTab/EditTab'
import { COMPONENT } from '../../../js/constants'

export const TabItems = ({ selected, onUpdateCmp, isEdit, chat, setChatIsEnabled, setChatTxt }) => {
    
    return (
        <div className="items">
            {!isEdit && (
                <AddTab
                    chat={chat}
                    setChatIsEnabled={setChatIsEnabled}
                    setChatTxt={setChatTxt}
                />
            )}
            {isEdit && selected && (
                <>
                    <div className="editing">
                        Editing: {(selected.type === COMPONENT) ? selected.component.type : selected.type}
                    </div>
                    <div className="sidebar-edit-component">
                        <StyledEngineProvider injectFirst>
                            <EditTab
                                type={(selected.type === COMPONENT) ? selected.component.type : selected.type}
                                style={(selected.type === COMPONENT) ? selected.component.style : selected.style}
                                data={(selected.type === COMPONENT) ? selected.component.data : selected.data}
                                updateCmp={onUpdateCmp}
                            />
                        </StyledEngineProvider>
                    </div>
                </>
            )}
            {isEdit && !selected && <div className="empty">Nothing is selected</div>}
        </div>
    )
}