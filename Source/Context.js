import React from "react";

const Context = React.createContext({
    musics: [],
    SetMusics: () => { },
    loading: true,
    SetLoading: () => { },
    playing: false,
    SetPlaying: () => { },
    currentMusic: {},
    SetCurrentMusic: () => { },
    index: 0,
    SetIndex: () => { },
    Player: {}
});

export default Context;

