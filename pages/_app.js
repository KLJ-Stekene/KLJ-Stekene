import '../styles/globals.css';
import {CacheProvider} from "@emotion/react";
import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import darkTheme from "../styles/theme/darkTheme";
import {CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import Layout from "../components/layout";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    return <CacheProvider value={emotionCache}>
        <ThemeProvider theme={!prefersDarkMode ? lightTheme : darkTheme}>
            <CssBaseline/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    </CacheProvider>;
};

export default MyApp;
