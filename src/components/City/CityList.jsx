import styles from "./cityList.module.css";
import Spinner from "../Spinner/Spinner";
import CityItem from "./CityItem";
import Message from "../Message";
import { useCities } from "../../contexts/CitiesContext";

const MSG = "Add your first city to your map !";
function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message={MSG} />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
