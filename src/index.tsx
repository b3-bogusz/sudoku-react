import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";

import { Content, Grid, Title, Card } from "./components";
import reportWebVitals from './reportWebVitals';
import { GlobalStyles, theme } from "./styles";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Content data-cy="content">
            <Title data-cy="title">
                Sudoku
            </Title>
            <Card data-cy="card">
                <Grid />
            </Card>
        </Content>
    </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
