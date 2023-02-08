import React, { useEffect, useState } from "react";
import Header from "../Header";
import activityDetails from "../../api/activity";
export default function AdminDashboard() {
  const [activityData, setActivityData] = useState([]);
  const getDetail = async () => {
    try {
      const response = await activityDetails();
      setActivityData(response.data.activity);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <>
      <Header />
      <section className="activity-details">
        {activityData?.map((ele) => {
          return (
            <div className="activity">
              <div className="heading flex-between">
                <p>Email</p>
                <p>Upload</p>
              </div>

             <div className="details flex-between">
                <p>{ele.email}</p>
                <p>True</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
