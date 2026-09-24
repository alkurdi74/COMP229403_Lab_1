import React, { useState } from 'react'
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const increment = () => {
    setCount(count + step)
  }

  const decrement = () => {
    setCount(count - step)
  }

  const reset = () => {
    setCount(0)
  }

  const handleStepChange = (e) => {
    const value = parseInt(e.target.value)
    if (value > 0 && value <= 10) {
      setStep(value)
    }
  }

  return (
    <div className="counter-container">
      <h2 className="page-title">Counter App</h2>
      
      <div className="counter-wrapper">
        <div className="counter-display">
          <div className="counter-value">{count}</div>
          <div className="counter-label">Current Count</div>
        </div>

        <div className="counter-controls">
          <button 
            className="counter-button decrement" 
            onClick={decrement}
            disabled={count <= 0}
          >
            -
          </button>
          
          <button 
            className="counter-button reset" 
            onClick={reset}
          >
            Reset
          </button>
          
          <button 
            className="counter-button increment" 
            onClick={increment}
          >
            +
          </button>
        </div>

        <div className="step-control">
          <label htmlFor="step">Step Value:</label>
          <input
            type="number"
            id="step"
            min="1"
            max="10"
            value={step}
            onChange={handleStepChange}
          />
          <span className="step-info">(1-10)</span>
        </div>

        <div className="counter-info">
          <div className="info-item">
            <span className="info-label">Current Step:</span>
            <span className="info-value">{step}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Status:</span>
            <span className={`info-value status ${count > 0 ? 'positive' : count < 0 ? 'negative' : 'zero'}`}>
              {count > 0 ? 'Positive' : count < 0 ? 'Negative' : 'Zero'}
            </span>
          </div>
        </div>
      </div>

      <div className="counter-explanation">
        <h3>How It Works</h3>
        <p>
          This counter demonstrates React's state management using the <code>useState</code> hook. 
          You can increment or decrement the counter by the specified step value, or reset it to zero. 
          The state automatically updates the UI when values change.
        </p>
        <div className="features-list">
          <div className="feature-item">
            <strong>State Management:</strong> Uses React's useState hook to manage counter value
          </div>
          <div className="feature-item">
            <strong>Dynamic Updates:</strong> UI automatically updates when state changes
          </div>
          <div className="feature-item">
            <strong>Conditional Rendering:</strong> Button disabled when count reaches minimum
          </div>
          <div className="feature-item">
            <strong>Custom Step:</strong> Adjust increment/decrement by step value
          </div>
        </div>
      </div>
    </div>
  )
}