const Job = ({ title, contractType, country, city }) => {
  return (
    <div>
      <span>{title}</span>
      <span>{contractType}</span>
      <span>{country}</span>
      <span>{city}</span>
    </div>
  );
};

export default Job;
