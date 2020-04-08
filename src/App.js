import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HookEffect from './components/HookEffect';
import ClassMouse from './components/ClassMouse';
import HookMuse from './components/HookMuse';
import MousePos from './components/MousePos';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import ComponentC from './components/ComponentC';
import ReducerCounter from './components/ReducerCounter';
import ReducerCounter2 from './components/ReducerCounter2';
import ContextCounter from './components/ContextCounter';
import HTTPState from './components/HTTPState';
import HTTPReducer from './components/HTTPReducer';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {

  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookEffect /> */}
      {/* <ClassMouse /> */}
      {/* <HookMuse /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}

      {/* <UserContext.Provider value = {'Ritik'}>
        <ChannelContext.Provider value = '1'>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      
      {/* <ReducerCounter /> */}
      {/* <ReducerCounter2 /> */}

      {/* <ContextCounter /> */}

      {/* <HTTPState /> */}
      <HTTPReducer />
    </div>
  );
}

export default App;
