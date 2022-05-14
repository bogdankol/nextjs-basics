import A from "./A";
import Head from "next/head";

function MainNavigation({ children, keywords }) {
    return (
        <>
        <Head>
            <meta  keywords={"mySite and other words " + keywords} />
            <title>Main Page</title>
        </Head>
            <div className="navbar">
                <A href={"/"} text={"Main Page"} />
                <A href={"/users"} text={"users Page"} />
                <A href={"/errorPage"} text={"error Page"} />
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background-color: yellow;
                        font-size: 24px;
                    }
                `}
            </style>
        </>
    );
}

export default MainNavigation;
