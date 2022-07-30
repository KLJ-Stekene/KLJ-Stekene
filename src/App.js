import {Fragment, lazy, Suspense, useMemo} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Container, createTheme, CssBaseline, LinearProgress, ThemeProvider, Typography, useMediaQuery} from "@mui/material";
import {Footer, Navbar} from "./components";
import {evenementen} from "./config";

const Startpagina = lazy(() => import("./containers/startpagina"));
const OverOnsPagina = lazy(() => import("./containers/overons"));
const BestuursPagina = lazy(() => import("./containers/bestuur"));
const SponsorsPagina = lazy(() => import("./containers/sponsors"));
const EvenementenSelectiePagina = lazy(() => import("./containers/evenement"));
const EvenementPagina = lazy(() => import("./containers/evenement/evenementpagina"));

function App() {
    const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
    const theme = useMemo(() => createTheme({
        palette: {
            mode: prefersLightMode ? "light" : "dark",
        },
    }), [prefersLightMode]);

    return <Fragment>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Navbar/>
                <main>
                    <Container sx={{paddingY: 2}}>
                        <Suspense fallback={<LinearProgress variant={"indeterminate"}/>}>
                            <Routes>
                                <Route path={"*"} element={<Container>
                                    <Typography variant={"h4"} component={"h2"}>
                                        Deze pagina lijkt verdwenen te zijn!
                                    </Typography>
                                </Container>}/>
                                <Route path={"/"}>
                                    <Route index element={<Startpagina/>}/>
                                    <Route path={"overons"} element={<OverOnsPagina/>}/>
                                    <Route path={"bestuur"} element={<BestuursPagina/>}/>
                                    <Route path={"sponsors"} element={<SponsorsPagina/>}/>
                                    <Route path={"evenement"}>
                                        <Route index element={<EvenementenSelectiePagina/>}/>
                                        {
                                            evenementen.map((evenement, index) => <Route
                                                key={index}
                                                path={evenement.url}
                                                element={<EvenementPagina evenement={evenement}/>}
                                            />)
                                        }
                                    </Route>
                                </Route>
                            </Routes>
                        </Suspense>
                    </Container>
                </main>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    </Fragment>;
}

export default App;
