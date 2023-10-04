import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReverseClickedBoxes from './pages/ReverseClickedBoxes';
import AnalogClock from './pages/AnalogClock';
import UndoRedoDots from './pages/UndoRedoDots';
import ReactionTimeGame from './pages/ReactionTimeGame';
import TimerOne from './pages/TimerOne';
import TimerTwo from './pages/TimerTwo';
import ToDoListReducer from './pages/ToDoListReducer';
import RatingsUseContextUseReducer from './pages/RatingsUseContextUseReducer';
import SignUpFormOne from './pages/SignUpFormOne';
import MonkeyType from './pages/MonkeyType';
import RestfulFetchPerson from './pages/RestfulFetchPerson';
import ChangeThemeUseContext from './pages/ChangeThemeUseContext';
import ChangeLanguageUseContext from './pages/ChangeLanguageUseContext';
import FilteringUseMemo from './pages/FilteringUseMemo';
import SortListUseMemo from './pages/SortListUseMemo';
import ArrayUseReducer from './pages/ArrayUseReducer';
import FormUseRef from './pages/FormUseRef';
import InfiniteScrollUseRefUseCallback from './pages/InfiniteScrollUseRefUseCallback';
import ChartJSDemo from './pages/ChartJSDemo';
import TodoListTwo from './pages/TodoListTwo';

function App() {
    return (
        
            <div className='bg-[#f5f5f5]'>
                <Navbar />
                <main className="max-w-6xl mx-auto">
                    <section id="top"
                        className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
                    >
                        <Router>
                            <Routes>
                                <Route path="/" element={<Home />}/>
                                <Route path="/ReverseClickedBoxes" element={<ReverseClickedBoxes />} />
                                <Route path="/AnalogClock" element={<AnalogClock />} />
                                <Route path="/UndoRedoDots" element={<UndoRedoDots />} />
                                <Route path="/ReactionTimeGame" element={<ReactionTimeGame />} />
                                <Route path="/TimerOne" element={<TimerOne />} />
                                <Route path="/TimerTwo" element={<TimerTwo />} />
                                <Route path="/ToDoListReducer" element={<ToDoListReducer />} />
                                <Route path="/TodoListTwo" element={<TodoListTwo />} />
                                <Route path="/RatingsUseContextUseReducer" element={<RatingsUseContextUseReducer />} />
                                <Route path="/SignUpFormOne" element={<SignUpFormOne />} />
                                <Route path="/MonkeyType" element={<MonkeyType />} />
                                <Route path="/RestfulFetchPerson" element={<RestfulFetchPerson />} />
                                <Route path="/ChangeThemeUseContext" element={<ChangeThemeUseContext />} />
                                <Route path="/ChangeLanguageUseContext" element={<ChangeLanguageUseContext />} />
                                <Route path="/FilteringUseMemo" element={<FilteringUseMemo />} />
                                <Route path="/SortListUseMemo" element={<SortListUseMemo />} />
                                <Route path="/ArrayUseReducer" element={<ArrayUseReducer />} />
                                <Route path="/FormUseRef" element={<FormUseRef />} />
                                <Route path="/InfiniteScrollUseRefUseCallback" element={<InfiniteScrollUseRefUseCallback />} />
                                <Route path="/ChartJSDemo" element={<ChartJSDemo />} />
                            </Routes>
                        </Router>
                    </section>
                </main>
                <Footer />
            </div>
    )
}

export default App
