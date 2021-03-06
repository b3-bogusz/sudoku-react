import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { Card, Content, Grid, Title, Numbers, NewButton } from "./components";
import reportWebVitals from './reportWebVitals';
import { configureStore } from "./core";
import { GlobalStyles, theme } from "./styles";

const store = configureStore();

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
            <Content data-cy="content">
                <Title data-cy="title">Sudoku</Title>
                <Card data-cy="card">
                    <NewButton />
                    <Grid />
                    <Numbers />
                </Card>
            </Content>
        </Provider>
    </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
