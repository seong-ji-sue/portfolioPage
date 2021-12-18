import { createGlobalStyle } from 'styled-components';
import BlackHanSans from './BlackHanSans.woff';
import NotoSansKR from './NotoSansKR.woff';

export default createGlobalStyle`
    @font-face {
        font-family: "Black Han Sans, sans-serif";
        src: local("Black Han Sans, sans-serif"),
        url(${BlackHanSans}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: "Noto Sans KR,sans-serif";
        src: local("Noto Sans KR,sans-serif"),
        url(${NotoSansKR}) format('woff');
    }
`;
