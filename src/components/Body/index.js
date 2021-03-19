import React, { useEffect, useState } from "react";
import '../../App.css'
import axios from 'axios'

const Body = () => {
    const [city, setCity] = useState();
    const [listCity, setListCity] = useState([]);
    const [uf, setUf] = useState('AC');
    const [listUf, setListUf] = useState([]);
    const [make, setMake] = useState('')
    const [listmake, setlistMake] = useState([])
    const [model, setModel] = useState([])
    const [version, setVersion] = useState([])
    const [vehicles, setVehicles] = useState([])


    const listMake = async () => {
        const result = await axios.get('http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make');
        setlistMake(result.data)
    }

    const vehiclesList = async (id) => {
        const result = await axios.get(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=${id}`);
        setVehicles(result.data)
        console.log(result.data)
    }

    const modelo = async (id) => {
        const result = await axios.get(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${id}`);
        setModel(result.data)
    }

    const listversion = async (id) => {
        const result = await axios.get(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${id}`);
        setVersion(result.data)
    }

    const loadUf = () => {
        let url = 'https://servicodados.ibge.gov.br/';
        url = url + 'api/v1/localidades/estados';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => a.nome.localeCompare(b.nome));
                setListUf([...data]);
            });
    }
    const loadCity = (id) => {
        let url = 'https://servicodados.ibge.gov.br/api/v1/';
        url = url + `localidades/estados/${id}/municipios`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => a.nome.localeCompare(b.nome));
                setListCity([...data]);
            });
    }

    const onChangeMake = (event) => {
        setMake(event.target.value);
    }

    useEffect(() => {
        listMake();
    }, [])

    useEffect(() => {
        if (make) {
            modelo(make);
            vehiclesList(make)
            listversion(make)
        }
    }, [make])

    useEffect(() => {
        if (uf) {
            loadCity(uf);
        }
    }, [uf]);

    useEffect(() => {
        loadUf();
    }, []);

    return (

        <>
            <div className="WhiteBox">
                <div className="SearchBar__inputcontainer">
                    <div className="checkbox">
                        <label>NOVOS</label>
                        <input type="checkbox" className="checknovos" />
                        <label>USADOS</label>
                        <input type="checkbox" className="checknovos" />
                    </div>
                    <select className="generic"
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                    >
                        {listUf.map((a, b) => (
                            <option
                                value={a.id}

                            >{a.sigla} - {a.nome}</option>
                        ))}
                    </select>

                    <select
                        className="inputGeneric2"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    >
                        {listCity.map((a, b) => (
                            <option

                                value={a.sigla}>{a.nome}</option>
                        ))}
                    </select>
                    <select className="generic" >
                        <option>Raio: 1000km</option>
                        <option>Raio: 2000km</option>
                        <option>Raio: 3000km</option>
                    </select>
                    <select className="versao"
                        value={make}
                        onChange={onChangeMake}

                    >
                        <option>Marcar: Todos</option>
                        {listmake.map((a, b) => (
                            <option
                                value={a.ID}
                            >{a.Name}</option>
                        ))}
                    </select>


                </div>


                <div className="SearchBar__inputcontainer">
                    <select className="generic">
                        {model.map((models, index) => (
                            <option className="" value={model} key={index.id}>{models.Name}</option>
                        ))}
                    </select>
                    <select className="generic" >
                        <option>Ano Desejado</option>
                        <option>2021</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                    </select>
                    <select className="inputGeneric2" >
                        <option>Faixa de Preço</option>
                        <option>2021</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                    </select>
                    <select className="versao">
                        <option> Versão: Todos</option>
                        {version.map((versions, index) => (
                            <option className="" key={index.id}>{versions.Name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <a href="/"> > Busca Avançada </a>
                    <button className="button-hed">Ver Ofertas</button>
                </div>
            </div>

            <div className="menu-opcoes">
                {vehicles.map(vehicless => (
                    <ul>
                        <img src={vehicless.Image} width="320" height="200" />
                    </ul>

                ))}
            </div>
        </>
    )
}

export default Body;