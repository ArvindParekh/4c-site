import React, { useState } from "react";
import GetActivemembers from "./GetActivemembers";
import Users from "./Users";

// import contributors data
import activeMembers from "../content/activemembers.json";
import Title from "./Title";

const ActiveMembers = () => {
  const [tab] = useState("Active Members");
  return (
    <div className="mt-[3em] flex items-center justify-center">
      <section className="max-w-bodyContainer flex-1 text-center  font-bold text-white">
        <Title heading="Active Members" />
        <div className="m-2 flex flex-wrap items-center justify-center overflow-y-auto pb-4">
          {tab === "Active Members" ? (
            <GetActivemembers users={activeMembers} />
          ) : (
            <Users users={activeMembers.profiles} />
          )}
        </div>
      </section>
    </div>
  );
};

export default ActiveMembers;
