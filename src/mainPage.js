import { useParams } from "react-router-dom";

function Home() {
  let { userId } = useParams();
  return (
    <div className="Home">
      <h2>{userId}</h2>
    </div>
  );
}

export default Home;
