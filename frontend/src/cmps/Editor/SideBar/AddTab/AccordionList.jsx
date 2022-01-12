import {
    SIDEBAR_ITEMS_BASIC, SIDEBAR_ITEMS_FOOTER,
    SIDEBAR_ITEMS_NAV, SIDEBAR_ITEMS_SECTIONS, SIDEBAR_ITEMS_HEADER
} from '../../../../js/constants'

export const AccordionList = [
    {
        name: 'header',
        items: SIDEBAR_ITEMS_HEADER
    },
    {
        name: 'nav',
        items: SIDEBAR_ITEMS_NAV
    },
    {
        name: 'section',
        items: SIDEBAR_ITEMS_SECTIONS
    },
    {
        name: 'footer',
        items: SIDEBAR_ITEMS_FOOTER
    },
    {
        name: 'basics',
        title: 'Element',
        className: 'element-items',
        items: SIDEBAR_ITEMS_BASIC
    },
    {
        name: 'chat',
        className: 'chat-app-edit'
    }
]