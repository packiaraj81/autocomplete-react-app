const Country = ({ countryDetails }) => {
  console.log("countryDetails = ", countryDetails);
  const countryCode = countryDetails && Object.keys(countryDetails);
  const region = countryDetails[countryCode]?.region;
  return (
    <div>
      <div> Country Code {countryCode} </div>
      <div> Region {region} </div>
    </div>
  );
};

export default Country;
