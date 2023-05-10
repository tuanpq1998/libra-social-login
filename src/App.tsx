import { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

import Header from "./components/Header";
import GoogleFeatures from "./components/GoogleFeatures";
import SignInFlows from "./components/SignInFlows";

import { Flows } from "./types/enums";
import AuthorizationFeatures from "./components/AuthorizationFeatures";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import CodeFlow from "./components/CodeFlow";

function App() {
  const [flow, setFlow] = useState<Flows | null>(null);

  return (
    <Flex
      minH="100vh"
      bg="gray.50"
      direction="column"
      align="center"
      py="10"
      px="4"
    >
      <Text mt="20" textAlign="center"></Text>
      <h1>
        <b>Login FB</b>
      </h1>

      <LoginSocialFacebook
        isOnlyGetToken={true}
        appId="278244437875440"
        onResolve={(response) => {
          console.log(response);
        }}
        onReject={(error) => {
          console.log(error);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
      <Text mt="20" textAlign="center"></Text>
      <h1>
        <b>Login Google</b>
      </h1>
      <a href="https://github.com/MomenSherif/react-oauth">
        @react-oauth/google
      </a>
      <Text mt="3" textAlign="center">
        Google OAuth2 using the new Google Identity Services SDK for React 🚀
      </Text>
      {<CodeFlow />}
    </Flex>
  );
}

export default App;
