import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageContainer from "../components/PageContainer";
import Spacer from "../components/Spacer";

function Home() {
  return (
    <PageContainer>

      <Header />

      <Spacer gap={400}>
        <Navbar />
      </Spacer>
      
    </PageContainer>
  );
}

export default Home;
