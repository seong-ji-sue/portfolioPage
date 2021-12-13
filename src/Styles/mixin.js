import { css } from 'styled-components';

const colorStyleGroup = {
  white: '#FFFFFF',
  pageColumn: ' #232e3c',
  inputBorder: '#ededed',
  inputShadow: '#9c88ff',
  inputPlaceholder: '#bcbcbc',
  cautionTextStyle: '#d63939',
  buttonBackground: '#086ad8',
  testButtonBackground: '#3ae374',
  settingMenuFont: '#333333',
  mainPageInfoColor: '#0000008a',
};

const flexStyleGroup = (justify, align, direction) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`;

const fontStyleGroup = (size, color, weight) => css`
  font-size: ${size};
  color: ${color};
  font-weight: ${weight};
`;

const widthHeightStyleGroup = (width, height) => css`
  width: ${width};
  height: ${height};
`;

const marginStyleGroup = margin => css`
  margin: ${margin};
`;

const paddingStyleGroup = padding => css`
  padding: ${padding};
`;

const firstTopTagStyle = () => css`
  ${flexStyleGroup('center', 'center')}
  ${widthHeightStyleGroup('', '100vh')}
`;

const wrapperBoxStyle = () => css`
  border-radius: 10px;
  background-color: ${colorStyleGroup.white};
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
`;

const inputHoverStyle = () => css`
  outline: none;

  &:focus {
    box-shadow: 0px 0px 0px 3px rgba(156, 136, 255, 0.7);
    transition: 0.5s ease-in-out;
  }

  &::placeholder {
    ${fontStyleGroup('14px', colorStyleGroup.inputPlaceholder)}
  }
`;

const cautionTextStyleStyle = () => css`
  ${marginStyleGroup('0 0 0 10px')}
  ${fontStyleGroup('12px', colorStyleGroup.cautionTextStyle)}
`;

const jobsettingPositionStyle = () => css`
  position: relative;
  right: -120px;
`;

const mixin = {
  colorStyleGroup,
  flexStyleGroup,
  fontStyleGroup,
  widthHeightStyleGroup,
  marginStyleGroup,
  paddingStyleGroup,
  firstTopTagStyle,
  wrapperBoxStyle,
  inputHoverStyle,
  cautionTextStyleStyle,
  jobsettingPositionStyle,
};

export default mixin;
