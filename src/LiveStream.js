import React, { useRef, useState } from 'react';

const LiveStream = () => {
    const videoRef = useRef(null);
    const [streaming, setStreaming] = useState(false);
    let stream;

    // Start the live stream
    const startStream = async () => {
        if (!streaming) {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                videoRef.current.srcObject = stream;
                setStreaming(true);
            } catch (err) {
                console.error("Error accessing media devices.", err);
            }
        }
    };

    // Stop the live stream
    const stopStream = () => {
        if (streaming && videoRef.current.srcObject) {
            videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
            videoRef.current.srcObject = null;
            setStreaming(false);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Live Stream</h2>
            <video ref={videoRef} autoPlay playsInline style={{ width: '80%', maxWidth: '600px' }}></video>
            <div style={{ marginTop: '20px' }}>
                <button onClick={startStream} disabled={streaming} style={{ marginRight: '10px' }}>
                    Start Stream
                </button>
                <button onClick={stopStream} disabled={!streaming}>
                    Stop Stream
                </button>
            </div>
        </div>
    );
};

export default LiveStream;
