import Link from "next/link";
import MainNavigation from "../components/MainNavigation";

function Users({users}) {

    return (
        <MainNavigation keywords="users page">
            <h1>users Page</h1>
            <ul>
                {users.map((el) => (
                    <li key={el.id}>
                        <Link href={`/users/${el.id}`}>
                            <a>{el.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
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
        </MainNavigation>
    );
}

export default Users;

export async function getStaticProps(context) {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const users  =await result.json()
    return {
      props: {users}, // will be passed to the page component as props
    }
  }