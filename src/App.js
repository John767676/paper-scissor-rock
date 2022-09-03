import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetPick, setUserPick} from "./store/reducers/user/userActions";
import {resetComputer, setCompPick} from "./store/reducers/comp/comActions";
import {drawAction, loseAction, resetResultAction, winAction} from "./store/reducers/logic/logicActions";


function App() {

    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const handleChose = (e) => {
        dispatch(setUserPick(e.target.value))
        setTimeout(() => {
            dispatch(setCompPick())
        },800)
    }

    useEffect(() => {
        if (state.userReducer.userPick === 'paper') {
            if (state.compReducer.computerPick === 'rock') {
                dispatch(winAction())
            } else if (state.compReducer.computerPick === 'scissor') {
                dispatch(loseAction())
            } else {
                dispatch(drawAction())
            }
        } else if (state.userReducer.userPick === 'scissor') {
            if (state.compReducer.computerPick === 'paper') {
                dispatch(winAction())
            } else if (state.compReducer.computerPick === 'rock') {
                dispatch(loseAction())
            } else {
                dispatch(drawAction())
            }
        } else {
            if (state.compReducer.computerPick === 'scissor') {
                dispatch(winAction())
            } else if (state.compReducer.computerPick === 'paper') {
                dispatch(loseAction())
            } else {
                dispatch(drawAction())
            }
        }
    },[state.compReducer.numOfClick])

    useEffect(() => {
        if (state.userReducer.isPicked === false) {
            dispatch(resetComputer())
            dispatch(resetResultAction())
        }
    }, [state.userReducer.isPicked])

  return (
      <div className='field'>
          <div className="header">
              <div className="wrapper">
                  <div className="name-of-game">
                      ROCK
                      PAPER
                      SCISSORS
                  </div>
                  <div className="score">
                      <div className="wrapper-score">
                          SCORE
                          <div className="score-num">
                              {state.logicReducer.count}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="game">
              {state.userReducer.isPicked === false ?
                  <div className="game-container">
                      <div className="paper">
                          <button className="paper-button" onClick={handleChose} value='paper'
                                  style={{backgroundImage: 'url(https://i.ibb.co/RpHbpGT/oie-12043444s-B4f-Fjf.png)',backgroundPosition: 'center',backgroundSize:'75px', backgroundRepeat: 'no-repeat'}}
                          >
                          </button>
                      </div>
                      <div className="scissors">
                          <button className="scissors-button" onClick={handleChose} value='scissor'
                                  style={{backgroundImage: 'url(https://i.ibb.co/YBNxzYm/oie-1203827-CKBARrf3.png)',backgroundPosition: 'center',backgroundSize:'75px', backgroundRepeat: 'no-repeat'}}
                              >
                          </button>
                      </div>
                      <div className="rock">
                          <button className="rock-button" onClick={handleChose} value='rock'
                                  style={{backgroundImage: 'url(https://i.ibb.co/DpCztWL/oie-120333-GQm-S0-Ds8.png)',backgroundPosition: 'center',backgroundSize:'75px', backgroundRepeat: 'no-repeat'}}
                          >
                          </button>
                      </div>
                  </div>
                  :
                  <div className='game-ongone'>
                      <div className="buttons">
                          {state.userReducer.userPick === 'paper' ?
                              <div className='modal'>
                                  <span className="comp">YOU PICKED</span>
                                  <button className="paper-button-ongone"
                                          style={{backgroundImage: 'url(https://i.ibb.co/RpHbpGT/oie-12043444s-B4f-Fjf.png)',backgroundPosition: 'center',backgroundSize:'100px', backgroundRepeat: 'no-repeat'}}
                                  >
                                  </button>
                              </div>
                              : state.userReducer.userPick === 'scissor' ?
                                  <div className='modal'>
                                      <span className="comp">YOU PICKED</span>
                                      <button className="scissor-button-ongone"
                                              style={{backgroundImage: 'url(https://i.ibb.co/yqw5zLH/scissor.png)',backgroundPosition: 'center',backgroundSize:'100px', backgroundRepeat: 'no-repeat'}}
                                      >
                                      </button>
                                  </div>
                                  :
                                  <div className='modal'>
                                      <span className="comp">YOU PICKED</span>
                                      <button className="rock-button-ongone"
                                              style={{backgroundImage: 'url(https://i.ibb.co/JzmrWvh/rock.png)',backgroundPosition: 'center',backgroundSize:'100px', backgroundRepeat: 'no-repeat'}}
                                      >
                                      </button>
                                  </div>
                          }
                          {state.logicReducer.result === 'win' ?
                                  <div className='win-div'>
                                      <span className='res-text'>YOU WIN</span>
                                      <button className='res-button' style={{color: '#687894'}} onClick={() => dispatch(resetPick())}>PLAY AGAIN</button>
                                  </div>
                                  : state.logicReducer.result === 'lose' ?
                                      <div className='lose-div'>
                                          <span className='res-text'>YOU LOSE</span>
                                          <button className='res-button' style={{color: 'red'}} onClick={() => dispatch(resetPick())}>PLAY AGAIN</button>
                                      </div> : state.logicReducer.result === 'draw' ?
                                      <div className='draw-div'>
                                          <span className='res-text'>IT'S DRAW</span>
                                          <button className='res-button' style={{color: '#D35400'}} onClick={() => dispatch(resetPick())}>PLAY AGAIN</button>
                                      </div> :
                                      <div className='empty-div'></div>
                          }
                          {state.compReducer.computerPick === 'paper' ?
                              <div className='modal'>
                                  <span className="comp">THE HOUSE PICKED</span>
                                  <button className="paper-button-ongone-comp"
                                          style={{backgroundImage: 'url(https://i.ibb.co/b24Dqzd/oie-12043444s-B4f-Fjf-1.png)',backgroundPosition: 'center',backgroundSize:'100px', backgroundRepeat: 'no-repeat'}}
                                  >
                                  </button>
                              </div>
                              : state.compReducer.computerPick === 'scissor' ?
                                  <div className='modal'>
                                      <span className="comp">THE HOUSE PICKED</span>
                                      <button className="scissor-button-ongone-comp"
                                              style={{backgroundImage: 'url(https://i.ibb.co/YBNxzYm/oie-1203827-CKBARrf3.png)',backgroundPosition: 'center',backgroundSize:'100px', backgroundRepeat: 'no-repeat'}}
                                      >
                                      </button>
                                  </div>
                                  : state.compReducer.computerPick === 'rock' ?
                                      <div className='modal'>
                                          <span className="comp">THE HOUSE PICKED</span>
                                          <button className="rock-button-ongone-comp"
                                                  style={{backgroundImage: 'url(https://i.ibb.co/bFwQRh4/oie-1203657blc-VV6-KY.png)',backgroundPosition: 'center',backgroundSize:'100px', backgroundRepeat: 'no-repeat'}}
                                          >
                                          </button>
                                      </div>
                                      :
                                      <div className='modal'>
                                          <span className="comp">THE HOUSE PICKED</span>
                                          <div className="empty-div-ongone-comp"></div>
                                      </div>
                          }
                      </div>
                  </div>
              }
          </div>
          {/*<div className="rules">*/}

          {/*</div>*/}
      </div>
  );
}

export default App;
