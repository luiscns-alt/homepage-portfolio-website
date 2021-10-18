import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WordGridItem } from '../components/grid-item'
import Section from '../components/section'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WordGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WordGridItem>
        </Section>
        <Section>
          <WordGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </WordGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
