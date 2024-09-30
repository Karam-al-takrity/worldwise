import styles from "./CountryList.module.css";
import Spinner from "../Spinner/Spinner";
import Countryitem from "./CountryItem";
import Message from "../Message";
import { useCities } from "../../contexts/CitiesContext";

const MSG = "Add your first city to your map !";
function Countrylist() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message={MSG} />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <Countryitem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default Countrylist;
