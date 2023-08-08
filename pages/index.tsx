import styled from "styled-components";
import {useEffect} from "react";

const FrontMain = () => {
    useEffect(() => {
        const myWindow = window as any;
        myWindow.flutter_inappwebview.callHandler("getAlertPermission", "2302230219209008");
    }, []);
    return (
        <>
            <FlutterBoxOne onClick={() => {
                const myWindow = window as any;
                if (myWindow.flutter_inappwebview) {
                    myWindow.flutter_inappwebview.callHandler("payOneMethod", "01000000000");
                } else {
                    // [Legacy] postMessage use webview_flutter
                    myWindow.payOneMethod.postMessage("01000000000");
                }
            }}>
                <BoxOneText>Flutter Console 1</BoxOneText>
            </FlutterBoxOne>
            <FlutterBoxInsta onClick={() => window.location.href = "https://www.instagram.com/yeonpick_official/"}>
                <BoxTwoText>Flutter Instagram</BoxTwoText>
            </FlutterBoxInsta>
            <FlutterBoxNotion onClick={() => {
                const myWindow = window as any;
                if (myWindow.flutter_inappwebview) {
                    myWindow.flutter_inappwebview.callHandler("getAlertPermission", "2302230219209008");
                } else {
                    // [Legacy] postMessage use webview_flutter
                    myWindow.getAlertPermission.postMessage("2302231119209008");
                }
            }}>
                <BoxThreeText>Flutter Notion</BoxThreeText>
            </FlutterBoxNotion>
            <FlutterBoxGoogleForm onClick={() => window.location.href = "https://forms.gle/YpjxoasWxsK4K4PE6"}>
                <BoxFourText>Flutter GoogleForm</BoxFourText>
            </FlutterBoxGoogleForm>
        </>
    );
};

const FlutterBoxOne = styled.div`
  width: 150px;
  height: 150px;
  background-color: tomato;
  line-height: 150px;
`;

const BoxOneText = styled.p`
  text-align: center;
`;

const FlutterBoxInsta = styled.div`
  width: 150px;
  height: 150px;
  background-color: lightpink;
  line-height: 150px;
`;

const BoxTwoText = styled.p`
  text-align: center;
`;

const FlutterBoxNotion = styled.div`
  width: 150px;
  height: 150px;
  background-color: gray;
  line-height: 150px;
`;

const BoxThreeText = styled.p`
  text-align: center;
`;

const FlutterBoxGoogleForm = styled.div`
  width: 150px;
  height: 150px;
  background-color: tan;
  line-height: 150px;
`;

const BoxFourText = styled.p`
  text-align: center;
`;

export default FrontMain;
