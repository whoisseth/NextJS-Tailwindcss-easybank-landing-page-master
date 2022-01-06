import React from "react";

function BtnRequestInvite({ hide }) {
  return (
    <button
      className={` ${hide} lg:flex px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-400  text-white hover:opacity-70 ease-in-out duration-300 `}
    >
      Request Invite
    </button>
  );
}

export default BtnRequestInvite;
