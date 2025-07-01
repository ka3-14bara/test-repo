
import tableData from './content/table-data.json';
import './App.css';
import Row from './content/Row';
import StationCreationPage from './content/StationCreationPage';

function App() {
  const rows = tableData.map(row => {return <Row key={row["inventory-number"]} rowContent={row} />});
  return (
    <div className="App">
      {/*<div className='Tables-container'>
        <table>
          <thead>
            <tr>
              <th>Емкость</th>
              <th>Нумерация шлейфов</th>
              <th>Инвентарный номер</th>
              <th>Место установки</th>
              <th>Дата ввода в эксплуатацию</th>
              <th>Номер акта ввода в кэсплуатацию</th>
              <th>Номер исполнительной документации</th>
              <th>Номер проектной документации</th>
              <th>Обслуживающая компания</th>
              <th>Звук</th>
              <th>Свет-звук</th>
              <th>Речь</th>
              <th>Свет</th>
              <th>Комментарий</th>
              <th>Дата корректировки</th>
              <th>Кол-во ИБЭ АПС</th>
              <th>Кол-во ИБЭ СОУЭ</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>*/}
      <StationCreationPage/>
    </div>
  );
}

export default App;
