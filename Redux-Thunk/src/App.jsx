import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchCustomers } from "./asyncAction/customers";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";

function App() {
  //Для изменения состояние
  const dispatch = useDispatch();
  //Получение состояние
  const cash = useSelector((state) => state.cash.cash);
  const customer = useSelector((state) => state.customer.customer);

  console.log(customer);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <h1>Баланс :{cash}</h1>
        <button
          onClick={() => addCash(Number(prompt()))}
          className="button green"
        >
          Пополнить счет
        </button>
        <button
          onClick={() => getCash(Number(prompt()))}
          className="button red"
        >
          Снять со счета
        </button>
        <button onClick={() => addCustomer(prompt())} className="button green">
          Добавить клиента
        </button>
        <button
          onClick={() => getCash(Number(prompt()))}
          className="button red"
        >
          Удалить клиента
        </button>
        <button
          onClick={() => dispatch(fetchCustomers())}
          className="button red"
        >
          Получить клиентов из базы
        </button>
      </div>
      <div>
        {customer.length > 0 ? (
          <div>
            {customer.map((item) => (
              <div
                style={{
                  fontSize: "20px",
                  padding: "20px",
                  border: "2px solid black",
                  margin: "10px",
                }}
                onClick={() => removeCustomer(item)}
              >
                {item.name}
              </div>
            ))}
          </div>
        ) : (
          <h2>Клиенты отсуствуют</h2>
        )}
      </div>
    </>
  );
}

export default App;
