import React from 'react'
import NavBar from './NavBar'
import styled from "@emotion/styled";
import BackgroundVideo from "./testGradient.webm"

const ViewportWrapper = styled("div")`
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    position: relative;
    padding-top: 100px;
`
const BackgroundWrapper = styled("div")`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    filter: hue-rotate(198deg);

    video {
        min-height: 100%;
        min-width: 100%;
        height: 120%;
        width: auto;
        opacity: .5;
    }
`

const ContentWrapper = styled("div")`
    z-index: 0;
    width: 100%;
    height: auto;
    position: relative;
`



export default function Layout({ children }) {
    return (
        <ViewportWrapper>
            <NavBar />
            <ContentWrapper>
                {children}
            </ContentWrapper>
            <BackgroundWrapper>
                <video loop muted autoPlay playsInline>
                    <source
                        src={BackgroundVideo}
                        type="video/webm" />
                </video>
            </BackgroundWrapper>
        </ViewportWrapper>
    )
}
