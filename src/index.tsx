import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";

import { Content, Title, Card } from "./components";
import reportWebVitals from './reportWebVitals';
import { GlobalStyles, theme } from "./styles";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Content>
            <Title>
                Sudoku
            </Title>
            <Card>
                This is Sudoku App
            </Card>
        </Content>
    </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
