"use client";
import { useState } from "react";
import DynamicForm from "@/components/DynamicForm";
import formData from "../public/fields.json";

interface FieldData {
  id: number;
  name: string;
  fieldType: string;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string;
  required?: boolean;
  listOfValues?: string[];
}

const Home = () => {
  const [fields] = useState<FieldData[]>(formData.data);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "20px 0",
          fontWeight: "bold",
          fontSize: "36px",
          color: "#333",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Dynamic Form
      </h1>
      {fields.length > 0 ? (
        <DynamicForm fields={fields} />
      ) : (
        <p style={{ textAlign: "center" }}>Loading...</p>
      )}
    </div>
  );
};

export default Home;
