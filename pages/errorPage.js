import Link from "next/link";
import { useRouter } from "next/router";
import redirect from 'nextjs-redirect';
import {useLayoutEffect} from 'react';

function errorPage() {
    const data = false // await res.json()
    const router = useRouter();
    // use context.resolvedUrl for conditional redirect

    // if (!data) {
    //     return [{
    //         redirect: {
    //             destination: '/users/1',
    //             permanent: false,
    //         },
    //     }]
    // }
    useLayoutEffect(() => {
        // router.replace('/users/2')
    }, [])

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
// export default redirect( '/users/2');
