import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { WapPreview } from '../cmps/Dashboard/WapPreview/WapPreview'
import { wapService } from '../services/waps.service'
import { socketService } from '../services/socket.service'
import { setLoader, setMsg } from '../store/actions/general.actions'
import { useScrollToTop } from '../hooks/useScrollToTop'

export const Dashboard = () => {
    useScrollToTop()

    const [waps, setWaps] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            dispatch(setLoader(true))
            try {
                // socketService.on('updated leads', onUpdateLeads)
                setWaps(await wapService.getWaps())
            } catch (err) {
                dispatch(setMsg({ type: 'error', txt: err }))
                navigate('/', { replace: true })
            } finally {
                dispatch(setLoader(false))
            }
        })()
    }, [])

    const onUpdateLeads = async () => {
        setWaps(await wapService.getWaps())
    }

    const onRemove = (wapId) => {
        setWaps(waps.filter(wap => wap._id !== wapId))
        dispatch(setMsg({ type: 'success', txt: 'Deleted successfully' }))
    }

    return (
        <>
            {!waps && setLoader(true) && <></>}
            {waps && setLoader(false) && (
                <div className="dashboard">
                    {waps.length === 0 && (
                        <>
                            <h1>You don't have any websites yet</h1>
                            <div className="create-first">
                                <Link to="/templates">Click here</Link>
                                <span> and create your first website by picking the template you love.</span>
                            </div>
                        </>
                    )}
                    <div className="my-sites">
                        {waps.map(wap => <WapPreview key={wap._id} wap={wap} onRemove={onRemove} />)}
                    </div>
                </div>
            )}
        </>
    )
}
