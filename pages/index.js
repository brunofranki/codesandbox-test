import React from "react";
import Head from "next/head";
import { useSetting, withLayout } from "onekijs";
import MainLayout from "../src/layout/MainLayout";
import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();
  console.log("router, useRouter", router, useRouter);
  const appName = useSetting("appName");
  const welcomeMsg = useSetting("welcomeMsg");
  return (
    <>
      <Head>
        <title>{appName}: Index</title>
      </Head>
      <div>{welcomeMsg}!!</div>
    </>
  );
};

export default withLayout(IndexPage, MainLayout);
