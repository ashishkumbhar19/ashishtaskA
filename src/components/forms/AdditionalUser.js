import React from "react";

function AdditionalUser({ prevPage }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Additional User</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">User Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Role</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
        </div>
        <div className="flex justify-between mt-4">
         
        </div>
      </form>
    </div>
  );
}

export default AdditionalUser;
