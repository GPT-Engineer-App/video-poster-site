import { useState } from "react";
import { Container, VStack, Text, Input, Button, FormControl, FormLabel, Box, Heading, Textarea, IconButton } from "@chakra-ui/react";
import { FaVideo, FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleLogin = () => {
    // Handle login logic
  };

  const handleRegister = () => {
    // Handle registration logic
  };

  const handlePostVideo = () => {
    // Handle video posting logic
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>
          Video Posting Site
        </Heading>

        {isLogin ? (
          <Box width="100%">
            <Heading as="h2" size="lg" mb={4}>
              Login
            </Heading>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" mb={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="link" mt={2} onClick={() => setIsLogin(false)}>
              Don't have an account? Register
            </Button>
          </Box>
        ) : (
          <Box width="100%">
            <Heading as="h2" size="lg" mb={4}>
              Register
            </Heading>
            <FormControl id="username" mb={4}>
              <FormLabel>Username</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" mb={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button leftIcon={<FaUserPlus />} colorScheme="teal" onClick={handleRegister}>
              Register
            </Button>
            <Button variant="link" mt={2} onClick={() => setIsLogin(true)}>
              Already have an account? Login
            </Button>
          </Box>
        )}

        <Box width="100%" mt={8}>
          <Heading as="h2" size="lg" mb={4}>
            Post a Video
          </Heading>
          <FormControl id="video-title" mb={4}>
            <FormLabel>Title</FormLabel>
            <Input type="text" value={videoTitle} onChange={(e) => setVideoTitle(e.target.value)} />
          </FormControl>
          <FormControl id="video-description" mb={4}>
            <FormLabel>Description</FormLabel>
            <Textarea value={videoDescription} onChange={(e) => setVideoDescription(e.target.value)} />
          </FormControl>
          <FormControl id="video-url" mb={4}>
            <FormLabel>Video URL</FormLabel>
            <Input type="url" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
          </FormControl>
          <Button leftIcon={<FaVideo />} colorScheme="teal" onClick={handlePostVideo}>
            Post Video
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
