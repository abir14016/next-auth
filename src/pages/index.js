import Head from "next/head";
import { useSession } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
const HomePage = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>Welcome To Next Auth Home Page</h1>
      {/* <h2 style={{ textAlign: "center" }}>Logged in user: {session?.user?.name}</h2> */}
      {
        session?.user && <h4 style={{ textAlign: "center" }}>Logged in user Email: {session?.user?.email}</h4>
      }
      {
        user?.email && <h4 style={{ textAlign: "center" }}>Logged in user Email: {user?.email}</h4>
      }
    </div>
  );
};

export default HomePage;
