import Link from "next/link";

function errorPage() {
    return (
        <div>
            <div className="navbar">
                <Link href="/">
                    <a className="link">Main page</a>
                </Link>
                <Link href="/users">
                    <a className="link">users page</a>
                </Link>
            </div>
            <h1>Error Page!</h1>
            <style jsx>
                {`
                    .navbar {
                        background-color: yellow;
                        font-size: 24px;
                    }

                    .link {
                        padding: 20px;
                    }
                `}
            </style>
        </div>
    );
}

export default errorPage;
