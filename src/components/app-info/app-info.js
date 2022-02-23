import './app-info.css';

const AppInfo = ({NumberOfEmploeers, increaced}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Егорыча</h1>
            <h2>Общее число сотрудников: {NumberOfEmploeers}</h2>
            <h2>Премию получат: {increaced}</h2>
        </div>
    )
}

export default AppInfo;