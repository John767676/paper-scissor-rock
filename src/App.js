import React, {useEffect, useState} from "react";


function App() {

    const items = ['paper','scissor','rock']

    const [isPicked,setIsPicked] = useState(false)
    const [count,setCount] = useState(0)
    const [numOfClick,setNumOfClick] = useState(0)
    const [result,setResult] = useState('')

    const [userPick,setUserPick] = useState('')
    const [computerPick,setComputerPick] = useState('')

    const handleChose = (e) => {
        setUserPick(e.target.value)
        setIsPicked(true)
        setTimeout(() => {
            setComputerPick(items[Math.floor(Math.random() * items.length)])
            setNumOfClick(prevState => prevState + 1)
        },2000)
    }

    useEffect(() => {
        if (userPick === 'paper') {
            if (computerPick === 'rock') {
                setCount(prevState => prevState + 1)
                setResult('win')
            } else if (computerPick === 'scissor') {
                setCount(0)
                setResult('lose')
            } else {
                setResult('draw')
            }
        } else if (userPick === 'scissor') {
            if (computerPick === 'paper') {
                setCount(prevState => prevState + 1)
                setResult('win')
            } else if (computerPick === 'rock') {
                setCount(0)
                setResult('lose')
            } else {
                setResult('draw')
            }
        } else {
            if (computerPick === 'scissor') {
                setCount(prevState => prevState + 1)
                setResult('win')
            } else if (computerPick === 'paper') {
                setCount(0)
                setResult('lose')
            } else {
                setResult('draw')
            }
        }
    },[numOfClick])

    useEffect(() => {
        if (isPicked === false) {
            setComputerPick('')
            setResult('')
        }
    }, [isPicked])

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
                              {count}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="game">
              {isPicked === false ?
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
                          {userPick === 'paper' ?
                              <div className='modal'>
                                  <span className="comp">YOU PICKED</span>
                                  <button className="paper-button-ongone"
                                          style={{backgroundImage: 'url(https://i.ibb.co/RpHbpGT/oie-12043444s-B4f-Fjf.png)',backgroundPosition: 'center',backgroundSize:'100px', backgroundRepeat: 'no-repeat'}}
                                  >
                                  </button>
                              </div>
                              : userPick === 'scissor' ?
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
                          {result === 'win' ?
                                  <div className='win-div'>
                                      <span className='res-text'>YOU WIN</span>
                                      <button className='res-button' style={{color: '#687894'}} onClick={() => setIsPicked(false)}>PLAY AGAIN</button>
                                  </div>
                                  : result === 'lose' ?
                                      <div className='lose-div'>
                                          <span className='res-text'>YOU LOSE</span>
                                          <button className='res-button' style={{color: 'red'}} onClick={() => setIsPicked(false)}>PLAY AGAIN</button>
                                      </div> : result === 'draw' ?
                                      <div className='draw-div'>
                                          <span className='res-text'>IT'S DRAW</span>
                                          <button className='res-button' style={{color: '#D35400'}} onClick={() => setIsPicked(false)}>PLAY AGAIN</button>
                                      </div> :
                                      <div className='empty-div'></div>
                          }
                          {computerPick === 'paper' ?
                              <div className='modal'>
                                  <span className="comp">THE HOUSE PICKED</span>
                                  <button className="paper-button-ongone-comp"
                                          style={{backgroundImage: 'url(https://i.ibb.co/b24Dqzd/oie-12043444s-B4f-Fjf-1.png)',backgroundPosition: 'center',backgroundSize:'100px', backgroundRepeat: 'no-repeat'}}
                                  >
                                  </button>
                              </div>
                              : computerPick === 'scissor' ?
                                  <div className='modal'>
                                      <span className="comp">THE HOUSE PICKED</span>
                                      <button className="scissor-button-ongone-comp"
                                              style={{backgroundImage: 'url(https://i.ibb.co/YBNxzYm/oie-1203827-CKBARrf3.png)',backgroundPosition: 'center',backgroundSize:'100px', backgroundRepeat: 'no-repeat'}}
                                      >
                                      </button>
                                  </div>
                                  : computerPick === 'rock' ?
                                      <div className='modal'>
                                          <span className="comp">THE HOUSE PICKED</span>
                                          <button className="rock-button-ongone-comp"
                                                  style={{backgroundImage: 'url(https://i.ibb.co/bFwQRh4/oie-1203657blc-VV6-KY.png)',backgroundPosition: 'center',backgroundSize:'100px', backgroundRepeat: 'no-repeat'}}
                                          >
                                          </button>
                                      </div>
                                      :
                                      <div className="empty-div-ongone-comp"></div>
                          }
                      </div>
                  </div>
              }
          </div>
          <div className="rules">

          </div>
      </div>
  );
}

export default App;
