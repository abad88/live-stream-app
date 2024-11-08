import React from 'react';
import LiveStream from './LiveStream';

function App() {
    const streamUrl = "https://www.youtube.com/watch?v=Mxp_4OT96QY"; // Replace with the actual stream URL

    return (
        <div className="App">
            <h1>Live Stream Viewer</h1>
            <LiveStream streamUrl={streamUrl} />
        </div>
    );
}

export default App;