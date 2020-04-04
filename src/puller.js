import React, { useReducer } from "react";
import lawToken from "./lawToken.png";
import chaosToken from "./chaosToken.png";
import "./puller.css";

const CHANGE_LAW = "CHANGE_LAW";
const CHANGE_CHAOS = "CHANGE_CHAOS";
const PULL_TOKEN = "PULL_TOKEN";
const LOADING = "LOADING";

const LAW = "LAW";
const CHAOS = "CHAOS";

const PULLER_ACTIONS = {
  [CHANGE_LAW]: CHANGE_LAW,
  [CHANGE_CHAOS]: CHANGE_CHAOS,
  [PULL_TOKEN]: PULL_TOKEN,
  [LOADING]: LOADING,
};

const Puller = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case PULLER_ACTIONS.CHANGE_LAW:
        return {
          ...state,
          lawTokens: Number(action.value),
        };
      case PULLER_ACTIONS.CHANGE_CHAOS:
        return {
          ...state,
          chaosTokens: Number(action.value),
        };
      case PULLER_ACTIONS.PULL_TOKEN:
        const totalTokenNumber = state.lawTokens + state.chaosTokens;
        const rolledNum = Math.floor(Math.random() * totalTokenNumber) + 1;
        const pulledToken = rolledNum <= state.lawTokens ? LAW : CHAOS;
        return {
          ...state,
          pulledToken,
          isLoading: false,
        };
      case PULLER_ACTIONS.LOADING:
        return {
          ...state,
          isLoading: true,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    lawTokens: 1,
    chaosTokens: 1,
    pulledToken: "",
    isLoading: false,
  });

  return (
    <div className="Puller">
      <div className="TokenInputs">
        <div className="TokenInput">
          <label className="inputLabel" htmlFor="lawTokens">
            Number of Law Tokens:
          </label>
          <div className="TokenInputBox">
            <input
              type="number"
              id="lawTokens"
              name="lawTokens"
              min="0"
              max="100"
              value={state.lawTokens}
              onChange={(e) => {
                dispatch({
                  type: PULLER_ACTIONS.CHANGE_LAW,
                  value: e.target.value,
                });
              }}
            />
            <img alt="law token" src={lawToken} width={50} height={50} />
          </div>
        </div>
        <div className="TokenInput">
          <label htmlFor="chaosTokens">Number of Chaos Tokens:</label>
          <div className="TokenInputBox">
            <input
              type="number"
              id="chaosTokens"
              name="chaosTokens"
              min="0"
              max="100"
              value={state.chaosTokens}
              onChange={(e) => {
                dispatch({
                  type: PULLER_ACTIONS.CHANGE_CHAOS,
                  value: e.target.value,
                });
              }}
            />
            <img alt="chaos token" src={chaosToken} width={50} height={50} />
          </div>
        </div>
      </div>
      <div className="buttonWrapper">
        <button
          type="button"
          onClick={() => {
            dispatch({ type: PULLER_ACTIONS.LOADING });
            setTimeout(function () {
              dispatch({ type: PULLER_ACTIONS.PULL_TOKEN });
            }, 500);
          }}
        >
          Pull Token
        </button>
      </div>
      <div className="Results">
        <h2>You pulled...</h2>
        {state.isLoading || state.pulledToken === "" ? (
          <p className="Results-tokenType">...</p>
        ) : (
          <div>
            <img
              alt={state.pulledToken === LAW ? "law token" : "chaos token"}
              src={state.pulledToken === LAW ? lawToken : chaosToken}
              width={150}
              height={150}
            />
            <p
              className={`Results-tokenType ${
                state.pulledToken === LAW ? "Results-law" : "Results-chaos"
              }`}
            >
              {state.pulledToken}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Puller;
