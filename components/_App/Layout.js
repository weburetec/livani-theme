import React from 'react';
import Head from "next/head";
import GoTop from '../Shared/GoTop';

const Layout = ({children}) => {
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 2000);
    }, [])

    return(
        <React.Fragment>
            <Head>
                <title>HK Gadgets - One Stopp Shoppe</title>
                <meta name="description" content="HK Gadgets - One Stopp Shoppe" />
                <meta name="og:title" property="og:title" content="HK Gadgets - One Stopp Shoppe"></meta>
                <meta name="twitter:card" content="HK Gadgets - One Stopp Shoppe"></meta>
                <link rel="canonical" href="https://www.hkgadgets.com/"></link>
                <meta property="og:image" content="https://scontent.flko4-1.fna.fbcdn.net/v/t39.30808-6/324929441_634383168687421_972015060598931467_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=faRxFizmqqMAX8069bw&_nc_ht=scontent.flko4-1.fna&oh=00_AfDumpUg2xB1SdJ1Bp_sx0bnBk_MqHzCIG6_yrGJmrhGVA&oe=63D3CB2B" />
            </Head>
            {loader ? 'Loading' : children}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;
