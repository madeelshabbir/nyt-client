import { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import CustomCard from '../components/custom-card';
import { topStoriesActions } from '../actions/top-stories';

const StoriesPage = ({ title }) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    (async () => {
      const topStories = await topStoriesActions.index(title.toLowerCase());
      topStories.error || setStories(topStories.results);
    })();
  }, [title]);

  return (
    <Container>
      <h1 className="text-center mt-2"><u>{title}</u></h1>
      <Row>
        {
          stories.map((story) => {
            return (
              <Col xs={12} sm={6} md={4} key={story.title}>
                <CustomCard
                  title={story.title}
                  url={story.url}
                  image={story.multimedia && story.multimedia[0]?.url}
                  section={story.section}
                  subsection={story.subsection}
                />
              </Col>
            );
          })
        }
      </Row>
    </Container>
  )
};

export default StoriesPage;
