// Components
import { Container } from "@/components/container/container.component";

const Home = (): React.ReactElement => {
  return (
    <Container>
      <div className="flex flex-col grow py-4">
        <h1>Index</h1>
        <p>Index page content</p>
      </div>
    </Container>
  );
};

export default Home;
