import React from "react";
import { useLocation, useParams } from "react-router";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

const Room = () => {
  const { roomId } = useParams();
  const location = useLocation();
  const { name, role } = location.state || { name: "GUEST", role: "Audience" };

  const roleCondition =
    role === "Host" ? ZegoUIKitPrebuilt.Host : ZegoUIKitPrebuilt.Audience;

  const sharedLinks = [
    {
      name: "Join As Audience",
      url: `${window.location.origin}/room/${roomId}`,
    },
  ];
  // generate Kit Token
  const appID = parseInt(process.env.REACT_APP_ZEGO_APP_ID, 10);
  const serverSecret = process.env.REACT_APP_ZEGO_SERVER_SECRET;
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomId,
    randomID(5),
    name
  );

  // start the call
  let myMeeting = async (element) => {
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role: roleCondition,
        },
      },
      sharedLinks,
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default Room;
