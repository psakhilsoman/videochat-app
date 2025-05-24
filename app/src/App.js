import React, { useState } from "react";
import { useWebRTC } from "./hooks/useWebRTC";

function App() {
  const roomId = "demo-room"; // Hardcoded for now
  const { localVideoRef, remoteVideoRef, messages, sendMessage } =
    useWebRTC(roomId);
  const [chatInput, setChatInput] = useState("");

  return (
    <div className="app">
      <h2>Video Call</h2>
      <video
        ref={localVideoRef}
        autoPlay
        muted
        playsInline
        style={{ width: 300 }}
      />
      <video ref={remoteVideoRef} autoPlay playsInline style={{ width: 300 }} />

      <div>
        <h3>Chat</h3>
        <div
          style={{ border: "1px solid gray", height: 150, overflowY: "auto" }}
        >
          {messages.map((msg, idx) => (
            <div key={idx}>
              <strong>{msg.sender}:</strong> {msg.message}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
        />
        <button
          onClick={() => {
            sendMessage(chatInput);
            setChatInput("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
