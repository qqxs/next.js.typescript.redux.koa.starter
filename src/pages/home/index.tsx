import { NextPage } from "next";
import Layout from "@components/Layout";
import HomePage from "@components/pages/home";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default Home;
