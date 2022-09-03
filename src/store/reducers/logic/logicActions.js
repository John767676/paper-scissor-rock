
export const WIN = 'WIN'
export const LOSE = 'LOSE'
export const DRAW = 'DRAW'
export const RESET_RESULT = 'RESET_RESULT'

export const winAction = () => ({
    type: WIN
})

export const loseAction = () => ({
    type: LOSE
})

export const drawAction = () => ({
    type: DRAW
})

export const resetResultAction = () => ({
    type: RESET_RESULT
})