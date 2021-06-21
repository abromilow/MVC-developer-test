import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
    --red: #FF4949;
    --black: #2e2e2e;
    --darkBlue: #343a40;
    --white: #ffffff;
    }

.error {
    color: var(--red);
}
`;

export default GlobalStyles;
