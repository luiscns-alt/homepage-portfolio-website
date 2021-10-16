import { Container, Box, Heading } from '@chakra-ui/layout'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack develop based in Brazil!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexgow={1}>
          <Heading as="h2" variant="page-title">
            Luis Carlos
          </Heading>
          <p>( Developer / Designer)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
