import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Card } from "../components/Card";
import DividerWithText from "../components/DividerWithText";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import useMounted from "../hooks/useMounted";

export default function Registerpage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const { register, signInWithGoogle } = useAuth();
  const mounted = useMounted();

  return (
    <Layout>
      <Card maxW="md" mx="auto" my={180} backgroundColor="#FFE3FE">
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            // your register logic here
            // console.log({email, password});
            if (!email || !password) {
              toast({
                description: "Credentials not valid",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            }
            setIsSubmitting(true);
            register(email, password)
              .then((response) => console.log(response))
              .catch((error) => {
                console.log(error.message);
                toast({
                  description: error.message,
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              })
              .finally(() => mounted.current && setIsSubmitting(false));
          }}
        >
          <Stack spacing="6">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                autoComplete="email"
                required
                borderColor="#5D3464"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                autoComplete="password"
                required
                borderColor="#5D3464"
              />
            </FormControl>
            <Button
              isLoading={isSubmitting}
              type="submit"
              backgroundColor="#9955A5"
              colorScheme="pink"
              size="lg"
              fontSize="md"
            >
              Sign up
            </Button>
          </Stack>
        </chakra.form>
        <Center my={4}>
          <Button variant="link" onClick={() => history.push("/login")}>
            Login
          </Button>
        </Center>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant="outline"
          isFullWidth
          borderColor="#5D3464"
          color="#5D3464"
          colorScheme="pink"
          leftIcon={<FaGoogle />}
          onClick={() =>
            signInWithGoogle()
              .then((user) => {
                console.log(user);
              })
              .catch((error) => console.log(error))}
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  );
}
