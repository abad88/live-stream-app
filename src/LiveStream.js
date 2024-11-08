import React from 'react';
import ReactPlayer from 'react-player';

const LiveStream = ({ streamUrl }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Live News Stream</h2>
            <ReactPlayer
                url={streamUrl}
                playing
                controls
                width="800px"
                height="450px"
                config={{
                    file: {
                        attributes: {
                            autoPlay: true,
                            muted: false,
                            playsInline: true,
                            preload: "auto",
                        },
                        forceHLS: true, 
                    },
                }}
                playbackRate={1.05} 
            />
        </div>
    );
};

export default LiveStream;