import {Fragment, lazy, memo} from "react";
import {Box} from "@mui/material";

const Splashscreen = lazy(() => import("./splashscreen"));
const EvenementenSectie = lazy(() => import("./evenementen"));

const Page = memo(() => {
    return <Fragment>
        <Splashscreen/>
        <Box marginY={2}/>
        <EvenementenSectie/>
    </Fragment>;
});

export default Page;