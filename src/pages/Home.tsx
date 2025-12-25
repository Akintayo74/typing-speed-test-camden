import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageContainer from "../components/PageContainer";
import Spacer from "../components/Spacer";
import TypingTest from "../components/TypingTest";

function Home() {
  return (
    <PageContainer>

      <Header />

      <Spacer gap={400}>
        <Navbar />
      </Spacer>
      
      <Spacer gap={400}>
        <TypingTest />
      </Spacer>
    </PageContainer>
  );
}

export default Home;
