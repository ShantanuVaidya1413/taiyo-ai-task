// Import necessary hooks and components
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Card from "../Card";
import Sidebar from "../Sidebar";
import notfound from "../assets/notFound.svg";
import { useSelector } from "react-redux";

// Contacts component
const Contacts = () => {
  // Access the contacts data from the Redux store
  const contacts = useSelector((state: any) => state.contacts);

  // Function to navigate to the create contact page
  const navigate = useNavigate();

  // Render the component
  return (
    <div className="flex lg:flex-row flex-col">
      {/* Sidebar component */}
      <Sidebar />
      <div className="lg:w-[1190px] w-full">
        {/* Button to create a new contact */}
        <Button
          text="Create Contact"
          onClick={() => {
            navigate("/contacts/create");
          }}
        />

        {/* Display title */}
        <p className="text-center text-primary text-lg mt-5 tracking-widest">
          All Contacts
        </p>

        {/* Conditional rendering based on the presence of contacts */}
        <div className="flex flex-col justify-center items-center lg:m-0 m-5">
          {contacts?.items?.length > 0 ? (
            // Render list of contacts
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10 ">
              {contacts.items?.map((item: any) => (
                <Card details={item} key={item?.id} />
              ))}
            </div>
          ) : (
            // Display a message if no contacts are available
            <div className="mt-10 border border-primary p-5 rounded flex items-center gap-5">
              <img
                className="w-[56px] h-[56px]"
                src={notfound}
                alt={notfound}
              />
              <p className="text-start text-primary font-medium">
                No contacts found!
                <br />
                Please add contact from <br /> Create Contact Button
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Export the Contacts component
export default Contacts;
