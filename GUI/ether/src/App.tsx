// App.tsx
import { ChakraProvider } from "@chakra-ui/react";
// App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";

export default function App() {
  return (
    <ChakraProvider>
      <Layout>
        <p style={{ color: "white" }}>Hello, world!</p>
      </Layout>
    </ChakraProvider>
  )
}

export default function App() {
  return (
    // lets us use Chakra UI syntax across our app:
    <ChakraProvider>
      // we'll add content to our app shortly
    </ChakraProvider>
  )
}
// App.tsx
import ConnectButton from "./components/ConnectButton";
// other code

<Layout>
  <ConnectButton />
</Layout>