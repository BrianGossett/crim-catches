import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth,  logout } from "../../Util/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";


function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [backend, setBackend] = useState({});
  const navigate = useNavigate();
  const fetchFishData= async () => {
    try {
    //   const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    //   const doc = await getDocs(q);
    //   const data = doc.docs[0].data();
    //   setName(data.name);
        fetch("/fish").then(
            response => response.json()
        ).then(
        data => {
          setBackend(data)
          console.log(data)
        }
      )

    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchFishData();
  }, [user, loading]);
  return (
    <div className="dashboard">
       <div className="dashboard__container">
        Logged in as
         <div>{backend["0"]["id"]}</div>
         <div>{user?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
       </div>
     </div>
  );
}
export default Dashboard;