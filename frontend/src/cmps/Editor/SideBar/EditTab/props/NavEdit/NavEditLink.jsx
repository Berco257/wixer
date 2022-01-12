import React from 'react'

export const NavEditLink = ({ links, updateData }) => {
    return (
        <>
            {links.map((link, idx) => {
                return (
                    <div key={'NAV Item' + idx}>
                        <label htmlFor={link.txt + idx}>{link.txt}</label>
                        <input
                            placeholder="Link to Section number:"
                            id={link.txt + idx}
                            type="number"
                            name="url"
                            key={link.txt + idx}
                            value={link.url}
                            onChange={(ev) => { updateData(ev, link.txt) }}
                        />
                    </div>
                )
            })}
        </>
    )
}