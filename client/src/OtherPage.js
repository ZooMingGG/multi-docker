import { Link } from 'react-router-dom';

const OtherPage = () => {
  return (
    <div>
      <div>Im some other page</div>
      <br />
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default OtherPage;
