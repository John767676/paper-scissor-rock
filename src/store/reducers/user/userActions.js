
export const USERPICK = 'USERPICK'
export const RESETPICK = 'RESETPICK'

export const setUserPick = (pick) => ({
    type: USERPICK,
    payload: pick
})

export const resetPick = () => ({
    type: RESETPICK
})
