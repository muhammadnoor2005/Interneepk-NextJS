import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router"


export default function () {
  const router = useRouter();

  return(
    <div className={"homeDiv"}>
      <h1>Home</h1>

      {/* profile btn */}
      <div className="profileBtn" onClick={() => {router.push("/profile")}}>
        <span>Profile</span>
      </div>

      {/* logout btn */}
      <div className="logoutBtn" onClick={() => {router.replace("/api/auth/logout")}}>
        <span>Logout</span>
      </div>
    </div>
  )
}
export const getServerSideProps = withPageAuthRequired();

