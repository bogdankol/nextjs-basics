import { useRouter } from "next/router";
import styles from "../../styles/user.module.scss";
import MainNavigation from "../../components/MainNavigation";

export default function ({ user }) {
    const router = useRouter();
    const { query } = router;
    return (
        <MainNavigation keywords={user.name}>
            <div className={styles.user}>
                User's page with id: {user.id}, which is also known as{" "}
                {user.name}
                <p>hello</p>
            </div>
        </MainNavigation>
    );
}

export async function getServerSideProps({ params }) {
    const result = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const user = await result.json();

    return {
        props: { user }, // will be passed to the page component as props
    };
}
