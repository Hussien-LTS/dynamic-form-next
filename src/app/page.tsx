import { GetStaticProps } from "next";
import DynamicForm from "@/components/DynamicForm";

export const getStaticProps: GetStaticProps = async () => {
  const response = await import("./public/fields.json");
  return { props: { formData: response } };
};

const Home: React.FC<{ formData: any }> = ({ formData }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dynamic Form</h1>
      <DynamicForm formData={formData} />
    </div>
  );
};

export default Home;
