import {Fragment, lazy, Suspense, useMemo} from "react";
import {
    Container,
    createTheme,
    CssBaseline,
    LinearProgress,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";

const Startpagina    = lazy(() => import("./containers/startpagina"));
const Overonspagina  = lazy(() => import("./containers/overons"));
const Bestuurpagina  = lazy(() => import("./containers/bestuur"));
const Sponsorspagina = lazy(() => import("./containers/sponsors"));

function App() {
    const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
    const theme            = useMemo(() => createTheme({
                                                           palette: {
                                                               mode: prefersLightMode ? "light" : "dark",
                                                           },
                                                       }), [prefersLightMode]);

    return (<Fragment>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Navbar />
                <main>
                    <Container sx={{paddingY: 2}}>
                        <Suspense fallback={<LinearProgress />}>
                            <Routes>
                                <Route path={"*"} element={<Container>
                                    <Typography variant={"h4"} component={"h2"}>
                                        Deze pagina lijkt verdwenen te zijn!
                                    </Typography>
                                </Container>} />
                                <Route path={"/"}>
                                    <Route index element={<Startpagina />} />
                                    <Route path={"overons"} element={<Overonspagina />} />
                                    <Route path={"bestuur"} element={<Bestuurpagina />} />
                                    <Route path={"sponsors"} element={<Sponsorspagina />} />
                                </Route>
                            </Routes>
                        </Suspense>
                    </Container>
                </main>
                {/*Footer*/}
            </BrowserRouter>
        </ThemeProvider>
    </Fragment>);
}

export default App;
